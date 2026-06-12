import React from 'react';
import { Alert } from 'react-bootstrap';

function RegistroActividad({ ultimaModificacion }) {
  if (!ultimaModificacion) return null;

  const fecha = ultimaModificacion.toLocaleDateString();
  const hora = ultimaModificacion.toLocaleTimeString('es-AR', {
    hour12: false,
  });

  return (
    <Alert variant="info" className="registro-actividad">
      Última actualización de la lista: {fecha} a las {hora}
    </Alert>
  );
}

export default RegistroActividad;
