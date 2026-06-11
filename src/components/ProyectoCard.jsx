import React from 'react';
import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className='proyecto'>
      <h3>{titulo}</h3>

      <p>
        <strong>Categoría:</strong> {categoria}
      </p>

      <p>
        <strong>Estado:</strong> {estado}
      </p>

      <div className='btns'>
        <Link
          to={`/proyectos/${id}`}
          className='BotonVerDetalle'
        >
          Ver detalle
        </Link>

        <button
          className='BotonEliminar'
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProyectoCard;
