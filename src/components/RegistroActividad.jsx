import React from 'react';

function RegistroActividad({ ultimaModificacion }) {
  if (!ultimaModificacion) return null;

  const fecha = ultimaModificacion.toLocaleDateString();
  const hora = ultimaModificacion.toLocaleTimeString('es-AR', {
    hour12: false,
  });

  return (
    <div className='fecha-actualizacion'>
      <p>
        Ultima actualización de la lista: {fecha} a las {hora}
      </p>
    </div>
  );
}

export default RegistroActividad;
