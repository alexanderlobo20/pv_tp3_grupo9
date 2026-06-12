import React from 'react';
import {Container, Typography, Box, Card, CardContent} from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="xl" className="dashboard">

      <Typography variant="h3" className="dashboard-titulo"><i className="bi bi-speedometer2"></i>Información Académica</Typography>

      <Typography variant="body1" align="center"
        sx={{
          color: '#fff',
          mb: 4,
          fontSize: '1.1rem',
          fontFamily: 'Century Gothic, Tahoma, Geneva, Verdana, sans-serif',
        }}> Consulta el estado de proyectos, actividades, recursos y mensajes del sistema. </Typography>

      <Box className="dashboard-contenido">

        <Card className="Resumen">
          <CardContent>
            <h2><i className="bi bi-collection"></i>Resumen de Proyectos</h2>
            <p><i className="bi bi-ui-checks"></i><strong>Total de Proyectos:</strong> 5</p>
            <p><i className="bi bi-bookmark-plus-fill"></i><strong>Proyectos Activos:</strong> 3</p>
            <p><i className="bi bi-bookmark-check-fill"></i><strong>Proyectos Completados:</strong> 2</p>
            <p><i className="bi bi-bookmark-x-fill"></i><strong>Proyectos Vencidos:</strong> 2</p>
          </CardContent>
        </Card>

        <Card className="Mensajes">
          <CardContent><h2><i className="bi bi-wechat"></i>Mensajes Recientes</h2>
            <ul>
              <li><i className="bi bi-bell-fill"></i><strong>Mensaje 1:</strong> El profesor comentó tu proyecto.</li>
              <li><i className="bi bi-bell-slash-fill"></i><strong> Mensaje 2:</strong> Suspensión de clases.</li>
              <li><i className="bi bi-bell-fill"></i><strong> Mensaje 3:</strong> Se publicó una nueva guía.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="Cronograma">
          <CardContent>
            <h2><i className="bi bi-calendar4-range"></i>Cronograma de Actividades</h2>
            <p><i className="bi bi-hourglass"></i><strong>Actividad 1:</strong> Presentación del Trabajo Práctico N°6 - 05/06/2026</p>
            <p><i className="bi bi-hourglass-bottom"></i><strong>Actividad 2:</strong> Taller Evaluativo - 12/06/2026</p>
            <p><i className="bi bi-hourglass-split"></i><strong>Actividad 3:</strong> Examen de Base de Datos - 22/06/2026</p>
            <p><i className="bi bi-hourglass-top"></i><strong>Actividad 4:</strong> Defensa de Proyecto - 30/06/2026</p>
          </CardContent>
        </Card>

        <Card className="Recursos">
          <CardContent>
            <h2><i className="bi bi-laptop"></i>Recursos Frecuentes</h2>
            <ul>
              <li><i className="bi bi-box-arrow-in-up-right"></i><a href="#">UNIT 5 - Present Perfect</a></li>
              <li><i className="bi bi-box-arrow-in-up-right"></i><a href="#">Teoría de Sucesiones e Inducción</a></li>
              <li><i className="bi bi-box-arrow-in-up-right"></i><a href="#">Navegación con React</a></li>
              </ul>
          </CardContent>
        </Card>

      </Box>
    </Container>
  );
}

export default Dashboard;
