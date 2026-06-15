import React from 'react';
import { useParams, Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService.js';

function DetalleProyecto() {
  const { id } = useParams();

  const proyecto = proyectoService.obtenerProyectoId(Number(id));

  if (!proyecto) {
    return (
      <p
        style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        Proyecto no encontrado
      </p>
    );
  }

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    recursos = {},
    equipo = [],
  } = proyecto;

  return (
    <div className='detalle-modal'>
      <div className='detalle-contenido'>
        <Link
          to='/proyectos'
          className='btn-cerrar'
        >
          ×
        </Link>
        <h2 className='detalle-titulo'>{titulo}</h2>
        <div className='detalle-espaciado'>
          <p>
            <strong>Categoria: </strong>
            {categoria}
          </p>
          <p>
            <strong>Estado: </strong>
            {estado}
          </p>
        </div>
        <div>
          <h3>Descripción</h3>
          <p className='detalle-espaciado'>{descripcion}</p>
        </div>
        <div>
          <h3>Recursos</h3>
          <div className='detalle-espaciado'>
            <p>
              <strong>PDF: </strong>
              {recursos.pdf}
            </p>
            <p>
              <strong>Drive: </strong> {recursos.drive}
            </p>
            <p>
              <strong>GitHub: </strong>
              {recursos.github}
            </p>
          </div>
        </div>
        <div>
          <h3>Equipo</h3>
          <div className='detalle-espaciado'>
            {equipo?.map((persona, index) => (
              <p key={index}>
                {persona.nombre} - {persona.rol}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProyecto;
