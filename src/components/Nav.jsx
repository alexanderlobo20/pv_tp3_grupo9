function Nav() {
  return (
    <nav>
      <a
        href='/'
        className='active'
      >
        Dashboard Principal
      </a>
      <a href='/'>Explorador de Proyectos</a>
      <div className='submenu'>
        <button className='submenu-boton'>Detalle de Proyecto</button>
        <div className='submenu-contenido'>
          <a href='/'>Programación Visual</a>
          <a href='/'>Inglés</a>
        </div>
      </div>
      <a href='/'>Perfil de Usuario</a>
    </nav>
  );
}

export default Nav;
