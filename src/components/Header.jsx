function Header() {
  return (
    <>
      <header>
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
      </header>
      <div className='welcome'>
        <h1>Plataforma de Gestión de Proyectos Educativos</h1>
        <p>
          Administra, supervisa y mejora tus proyectos educativos de forma
          estructurada y organizada.
        </p>
      </div>
    </>
  );
}

export default Header;
