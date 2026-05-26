import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <Nav />
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
