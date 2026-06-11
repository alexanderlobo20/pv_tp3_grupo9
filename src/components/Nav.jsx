import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ textAlign: 'center', margin: '20px' }}>
      <NavLink
        to='/dashboard'
        style={{ color: 'white', margin: '0 20px' }}
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/proyectos'
        style={{ color: 'white', margin: '0 20px' }}
      >
        Proyectos
      </NavLink>
      <NavLink
        to='/perfil'
        style={{ color: 'white', margin: '0 20px' }}
      >
        Perfil
      </NavLink>
    </nav>
  );
}

export default Nav;
