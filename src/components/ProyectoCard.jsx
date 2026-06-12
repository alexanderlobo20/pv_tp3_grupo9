import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card className="proyecto-card">
      <Card.Body className="proyecto-card-body">

        <Card.Title className="proyecto-titulo">
          {titulo}
        </Card.Title>

        <Card.Text className="proyecto-texto">
          <strong>Categoría:</strong> {categoria}
        </Card.Text>

        <Card.Text className="proyecto-texto">
          <strong>Estado:</strong> {estado}
        </Card.Text>

        <div className="proyecto-botones">
          <Link to={`/proyectos/${id}`} className="btn-ver">
            Ver detalle
          </Link>

          <Button
            className="btn-eliminar"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
}

export default ProyectoCard;
