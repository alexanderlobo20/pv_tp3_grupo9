import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

const usuarioDefault = {
  nombre: 'Florencia Villar',
  dni: '12345678',
  rol: 'Alumno',
  institucion: 'Ingeniería',
};

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem('usuario');
    return guardado ? JSON.parse(guardado) : usuarioDefault;
  });

  const actualizarPerfil = (datos) => {
    setUsuario((prev) => ({
      ...prev,
      ...datos,
    }));
  };

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
}
