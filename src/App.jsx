import './css/style.css';
import Header from './components/Header';
import ListaProyectos from './views/ListaProyectos';
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import DetalleProyecto from './views/DetalleProyecto';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { UsuarioProvider } from './context/UsuarioContext';

function App() {
  return (
    <UsuarioProvider>
      <Header />
      <main>
        <Container>
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
        </Container>
      </main>
      <Footer />
    </UsuarioProvider>
  );
}

export default App;
