import React, { useState } from 'react';
import proyectoService from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState('');
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: '',
    descripcion: '',
    integrantes: [],
    roles: [],
    recursos: [],
  });
  const {
    titulo,
    categoria,
    estado,
    descripcion,
    integrantes,
    roles,
    recursos,
  } = nuevoProyecto;
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  let proyectosFiltrados = proyectos;
  let formulario = null;

  if (busqueda !== '') {
    proyectosFiltrados = proyectoService.buscarProyecto(busqueda);
  }

  if (mostrarFormulario) {
    formulario = (
      <div className='formulario'>
        <input
          type='text'
          placeholder='Título'
          value={titulo}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              titulo: e.target.value,
            })
          }
        />

        <input
          type='text'
          placeholder='Categoría'
          value={categoria}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              categoria: e.target.value,
            })
          }
        />

        <input
          type='text'
          placeholder='Estado'
          value={estado}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              estado: e.target.value,
            })
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
          type='text'
          placeholder='Integrantes (,)'
          value={nuevoProyecto.integrantes.join(',')}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              integrantes: e.target.value.split(','),
            })
          }
        />
        <input
          type='text'
          placeholder='Roles (,)'
          value={nuevoProyecto.roles.join(',')}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              roles: e.target.value.split(','),
            })
          }
        />
        <input
          type='text'
          placeholder='Recursos (,)'
          value={nuevoProyecto.recursos.join(',')}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              recursos: e.target.value.split(','),
            })
          }
        />
        <button
          className='BotonGuardar'
          onClick={() => {
            proyectoService.agregarProyecto({
              id: Date.now(),
              titulo: titulo,
              categoria: categoria,
              estado: estado,
              descripcion: descripcion,
              integrantes: integrantes,
              roles: roles,
              recursos: recursos,
            });

            setProyectos(proyectoService.obtenerProyectos());

            setMostrarFormulario(false);

            setNuevoProyecto({
              titulo: '',
              categoria: '',
              estado: '',
              descripcion: '',
              integrantes: [],
              roles: [],
              recursos: [],
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

      <div className='contenedor-proyectos'>
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
                if (
                  proyectoSeleccionado &&
                  proyectoSeleccionado.id === proyecto.id
                ) {
                  setProyectoSeleccionado(null);
                } else {
                  setProyectoSeleccionado(proyecto);
                }
              }}
            />
          ))}
        </div>
      </div>

      {proyectoSeleccionado && (
        <div className='detalle-contenedor'>
          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onCerrar={() => setProyectoSeleccionado(null)}
          />
        </div>
      )}
    </section>
  );
}

export default ListaProyectos;
