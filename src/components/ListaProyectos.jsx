import React, { useState } from 'react';
import proyectoService from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );

  const [busqueda, setBusqueda] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: '',
    descripcion: '',
    cantidadIntegrantes: '',
    integrantes: [],
    roles: [],
    recursos: {
      pdf: '',
      drive: '',
      github: '',
    },
  });

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    cantidadIntegrantes,
    integrantes,
    roles,
    recursos,
  } = nuevoProyecto;

  let proyectosFiltrados = proyectos;
  let formulario = null;

  if (busqueda !== '') {
    proyectosFiltrados = proyectoService.buscarProyecto(busqueda);
  }

  const validarProyecto = () => {
    if (!titulo.trim()) return 'El título es obligatorio';
    if (!categoria.trim()) return 'La categoría es obligatoria';
    if (!estado.trim()) return 'El estado es obligatorio';
    if (!descripcion.trim()) return 'La descripción es obligatoria';

    if (!integrantes.length) return 'Debe haber integrantes';

    if (integrantes.some(i => !i?.trim()))
      return 'Todos los integrantes deben tener nombre';

    if (roles.some(r => !r?.trim()))
      return 'Todos los roles deben estar completos';

    return null;
  };

  if (mostrarFormulario) {
    formulario = (
      <div className='formulario'>

        <input
          type='text'
          placeholder='Título'
          value={titulo}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })
          }
        />

        <input
          type='text'
          placeholder='Categoría'
          value={categoria}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })
          }
        />

        <input
          type='text'
          placeholder='Estado'
          value={estado}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })
          }
        />

        <input
          type='text'
          placeholder='Descripción'
          value={descripcion}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              descripcion: e.target.value,
            })
          }
        />

        <input
          type='number'
          min='1'
          max='10'
          placeholder='Cantidad de integrantes'
          value={cantidadIntegrantes}
          onChange={(e) => {
            let cantidad = Number(e.target.value);

            if (!cantidad || cantidad < 1) cantidad = 1;
            if (cantidad > 10) cantidad = 10;

            setNuevoProyecto({
              ...nuevoProyecto,
              cantidadIntegrantes: cantidad,
              integrantes: Array(cantidad).fill(''),
              roles: Array(cantidad).fill(''),
            });
          }}
        />

        {integrantes.map((_, index) => (
          <input
            key={index}
            type='text'
            placeholder={`Integrante ${index + 1}`}
            value={integrantes[index] || ''}
            onChange={(e) => {
              const nuevos = [...integrantes];
              nuevos[index] = e.target.value;

              setNuevoProyecto({
                ...nuevoProyecto,
                integrantes: nuevos,
              });
            }}
          />
        ))}

        {roles.map((_, index) => (
          <input
            key={index}
            type='text'
            placeholder={`Rol del integrante ${index + 1}`}
            value={roles[index] || ''}
            onChange={(e) => {
              const nuevos = [...roles];
              nuevos[index] = e.target.value;

              setNuevoProyecto({
                ...nuevoProyecto,
                roles: nuevos,
              });
            }}
          />
        ))}

        <input
          type='text'
          placeholder='PDF'
          value={recursos.pdf}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: { ...recursos, pdf: e.target.value },
            })
          }
        />

        <input
          type='text'
          placeholder='Drive'
          value={recursos.drive}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: { ...recursos, drive: e.target.value },
            })
          }
        />

        <input
          type='text'
          placeholder='GitHub'
          value={recursos.github}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: { ...recursos, github: e.target.value },
            })
          }
        />

        {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}

        <button
          className='BotonGuardar'
          onClick={() => {
            const error = validarProyecto();

            if (error) {
              setMensaje(error);
              return;
            }

            proyectoService.agregarProyecto({
              id: Date.now(),
              titulo,
              categoria,
              estado,
              descripcion,

              recursos,

              equipo: integrantes.map((nombre, index) => ({
                nombre: nombre.trim(),
                rol: roles[index]?.trim() || '',
              })),
            });

            setProyectos(proyectoService.obtenerProyectos());

            setMensaje('Proyecto creado correctamente ✔');

            setTimeout(() => setMensaje(''), 2000);

            setMostrarFormulario(false);

            setNuevoProyecto({
              titulo: '',
              categoria: '',
              estado: '',
              descripcion: '',
              cantidadIntegrantes: '',
              integrantes: [],
              roles: [],
              recursos: {
                pdf: '',
                drive: '',
                github: '',
              },
            });
          }}
        >
          Guardar
        </button>
      </div>
    );
  }

  return (
    <section className='proyectos'>
      <h2 className='proyectos-titulo'>Proyectos</h2>

      <input
        className='busqueda'
        type='text'
        placeholder='Buscar proyecto'
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button
        className='Boton-Agregar'
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        Agregar Proyecto
      </button>

      {formulario}

      <div className='proyectos-lista'>
        {proyectosFiltrados.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={(id) => {
              proyectoService.eliminarProyecto(id);
              setProyectos(proyectoService.obtenerProyectos());
            }}
            onVerDetalle={(proyecto) => {
              setProyectoSeleccionado(
                proyectoSeleccionado?.id === proyecto.id ? null : proyecto
              );
            }}
          />
        ))}
      </div>

      {proyectoSeleccionado && (
        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          onCerrar={() => setProyectoSeleccionado(null)}
        />
      )}
    </section>
  );
}

export default ListaProyectos;