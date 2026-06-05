import React, { useState } from 'react';
import proyectoService from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import FormularioProyecto from './FormularioProyecto';
import RegistroActividad from './RegistroActividad.jsx';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );

  const [busqueda, setBusqueda] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [ultimaModificacion, setUltimaModificacion] = useState(new Date());

  const agregarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto({
      id: Date.now(),
      ...nuevoProyecto,
    });
    setProyectos(proyectoService.obtenerProyectos());
    setMostrarFormulario(false);
  };

  let proyectosFiltrados = proyectos;
  if (busqueda !== '') {
    proyectosFiltrados = proyectoService.buscarProyecto(busqueda);
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

      {mostrarFormulario && (
        <FormularioProyecto agregarProyecto={agregarProyecto} />
      )}

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

      <RegistroActividad ultimaModificacion={ultimaModificacion} />
    </section>
  );
}

export default ListaProyectos;
