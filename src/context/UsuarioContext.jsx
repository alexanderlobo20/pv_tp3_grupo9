import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState({
    nombre: 'Florencia Villar',
    dni: '12345678',
    rol: 'Alumno',
    institucion: 'Ingeniería',
  });

  const actualizarPerfil = (datos) => {
    setUsuario((prev) => ({
      ...prev,
      ...datos,
    }));
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
}