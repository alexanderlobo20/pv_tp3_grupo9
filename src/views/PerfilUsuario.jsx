import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

function PerfilUsuario() {
  return (
    <Container maxWidth="md"sx={{mt: 4, mb: 4}}  className="perfil">

    <Paper className="perfil-card" elevation={4}>
      <Typography variant="h2"
      sx={{color: '#fff',mb: 4,fontSize: '2rem', fontFamily: 'Century Gothic, Tahoma, Geneva, Verdana, sans-serif',}}><i className="bi bi-person-rolodex"></i>Perfil de Usuario</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-person-circle"></i> <strong>Nombre:</strong> Florencio Villar</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-envelope"></i> <strong>Email:</strong> florenciavillar123@example.com</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-shield"></i> <strong>Rol:</strong> Alumno</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-building"></i> <strong>Facultad:</strong> Ingeniería</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-geo-alt"></i> <strong>Ubicación:</strong> Jujuy, Argentina</Typography>
      <Typography variant="body1" className="texto"><i className="bi bi-calendar"></i> <strong>Fecha de registro:</strong> 15/03/2025</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-people"></i> <strong>Carrera:</strong> Programador</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-graph-up"></i> <strong>Progreso:</strong> 80% de los proyectos completados</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-chat-dots"></i> <strong>Comentarios:</strong> 15 comentarios en proyectos</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-star"></i> <strong>Calificación:</strong> 3.5/5</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-clock-history"></i> <strong>Actividad reciente:</strong> Último acceso hace 2 horas</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-file-earmark-text"></i> <strong>Documentos subidos:</strong> 10</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-folder"></i> <strong>Proyectos creados:</strong> 3</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-folder"></i> <strong>Proyectos asignados:</strong> 5</Typography>
       <Typography variant="body1" className="texto"><i className="bi bi-clock"></i> <strong>Último acceso:</strong> 01/06/2026</Typography>
    </Paper>
    </Container>
  );
}

export default PerfilUsuario;
