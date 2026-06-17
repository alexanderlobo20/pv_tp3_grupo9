import { useContext } from 'react';
import Nav from './Nav';
import { UsuarioContext } from '../context/UsuarioContext';
import { Box, Typography } from '@mui/material';

function Header() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <header className='header'>
        <Nav />
        <Box
          sx={{
            textAlign: 'right',
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.1)',
            p: 1,
            borderRadius: 2,
          }}
        >
          <Typography
            variant='body2'
            sx={{ fontWeight: 'bold', color: '#ffd166' }}
          >
            {usuario.nombre}
          </Typography>
          <Typography
            variant='caption'
            display='block'
            sx={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {usuario.rol}
          </Typography>
        </Box>
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
