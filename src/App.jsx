import './css/style.css';
import Header from './components/Header';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PerfilUsuario from './components/PerfilUsuario';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <nav style={{ textAlign: 'center', margin: '20px' }}>
          <NavLink to='/'></NavLink>
          <NavLink to='/dashboard' style={{ color: 'white', margin: '0 20px' }}>Dashboard</NavLink>
          <NavLink to='/proyectos' style={{ color: 'white', margin: '0 20px' }}>Proyectos</NavLink>
          {/* <NavLink to="proyectos/:id" style={{ color: 'white' }}>Proyectos</NavLink> */}
          <NavLink to='/perfil' style={{ color: 'white', margin: '0 20px' }}>Perfil</NavLink>
        </nav>
        <main>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/proyectos' element={<ListaProyectos />} />
          <Route path='/proyectos/:id' element={<ListaProyectos />} />
          <Route path='/perfil' element={<PerfilUsuario/>} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
