import './css/style.css';
import Header from './components/Header';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import PerfilUsuario from './components/PerfilUsuario';
import DetalleProyecto from './components/DetalleProyecto';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Dashboard />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/proyectos'
            element={<ListaProyectos />}
          />
          <Route
            path='/proyectos/:id'
            element={<DetalleProyecto />}
          />
          <Route
            path='/perfil'
            element={<PerfilUsuario />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
