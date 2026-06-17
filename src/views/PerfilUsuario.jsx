import React, { useContext, useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, TextField } from '@mui/material';
import { UsuarioContext } from '../context/UsuarioContext';

function PerfilUsuario() {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [form, setForm] = useState(usuario);

  useEffect(() => {
    setForm(usuario);
  }, [usuario]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCambios = () => {
    actualizarPerfil(form);
    setModoEdicion(false);
  };

  const inputStyle = {
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00b3ff',
    },
     '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0056b3',
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }} className="perfil">

      <Paper className="perfil-card" elevation={4} sx={{ p: 3, fontFamily: 'Century Gothic, Tahoma, Geneva, Verdana, sans-serif' }}>

        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            mb: 4,
            fontSize: '2rem',
            fontFamily:
              'Century Gothic, Tahoma, Geneva, Verdana, sans-serif',
          }}
        >
          <i className="bi bi-person-rolodex"></i> Perfil de Usuario
        </Typography>

        {!modoEdicion && (
          <>
            <Typography sx={{ color: '#fff' }}>
              <i className="bi bi-person-circle"></i>{' '}
              <strong>Nombre:</strong> {usuario.nombre}
            </Typography>

            <Typography sx={{ color: '#fff' }}>
              <i className="bi bi-envelope"></i>{' '}
              <strong>DNI:</strong> {usuario.dni}
            </Typography>

            <Typography sx={{ color: '#fff' }}>
              <i className="bi bi-shield"></i>{' '}
              <strong>Rol:</strong> {usuario.rol}
            </Typography>

            <Typography sx={{ color: '#fff' }}>
              <i className="bi bi-building"></i>{' '}
              <strong>Institución:</strong> {usuario.institucion}
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => setModoEdicion(true)}
            >
              Editar perfil
            </Button>
          </>
        )}

        {modoEdicion && (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              sx={inputStyle}
            />

            <TextField
              fullWidth
              margin="normal"
              label="DNI"
              name="dni"
              value={form.dni}
              onChange={handleChange}
              sx={inputStyle}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Rol"
              name="rol"
              value={form.rol}
              onChange={handleChange}
              sx={inputStyle}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Institución"
              name="institucion"
              value={form.institucion}
              onChange={handleChange}
              sx={inputStyle}
            />

            <Button
              variant="contained"
              sx={{ mt: 2, mr: 1 }}
              onClick={guardarCambios}
            >
              Guardar
            </Button>

            <Button
              variant="outlined"
              sx={{ mt: 2, color: '#fff', borderColor: '#fff' }}
              onClick={() => setModoEdicion(false)}
            >
              Cancelar
            </Button>
          </>
        )}

      </Paper>
    </Container>
  );
}

export default PerfilUsuario;
