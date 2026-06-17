import { useContext } from 'react';
import Nav from './Nav';
import { UsuarioContext } from '../context/UsuarioContext';

function Header() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <header>
        <Nav />
        <div>
          Usuario: {usuario.nombre}
          <br />
          Rol: {usuario.rol}
        </div>
      </header>
      {
        <div className='welcome'>
          <h1>Plataforma de Gestión de Proyectos Educativos</h1>
          <p>
            Administra, supervisa y mejora tus proyectos educativos de forma
            estructurada y organizada.
          </p>
        </div>
      }
    </>
  );
}

export default Header;
