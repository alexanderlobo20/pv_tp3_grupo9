import React from 'react';

function DetalleProyecto({ proyecto, onCerrar }) {
  if (!proyecto) return null;

  const { id, titulo, categoria, estado, descripcion, recursos, equipo } =
    proyecto;

  return (
    <div className='detalle-modal'>
      <div className='detalle-contenido'>
        <button
          className='btn-cerrar'
          onClick={onCerrar}
        >
          x
        </button>
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
              <strong>pdf: </strong>
              {recursos.pdf}
            </p>
            <p>
              <strong>drive: </strong> {recursos.drive}
            </p>
            <p>
              <strong>github: </strong>
              {recursos.github}
            </p>
          </div>
        </div>
        <div>
          <h3>Equipo</h3>
          <div className='detalle-espaciado'>
            {equipo.map((persona, index) => (
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
