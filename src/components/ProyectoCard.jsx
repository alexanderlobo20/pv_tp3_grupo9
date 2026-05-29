import React from "react";

function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {
  
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="proyecto">

      <h3>{titulo}</h3>

      <p>
        <strong>Categoría:</strong> {categoria}
      </p>

      <p>
        <strong>Estado:</strong> {estado}
      </p>

      <div className="btns">

        <button
          className="BotonVerDetalle"
          onClick={() => onVerDetalle(proyecto)}>
          Ver detalle
        </button>

        <button
          className="BotonEliminar"
          onClick={() => onEliminar(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProyectoCard;