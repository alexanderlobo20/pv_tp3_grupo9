const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: 'Programación Visual',
      categoria: 'Programación',
      estado: 'En Progreso',
      descripcion:
        'A lo largo de la cursada, se hace especial énfasis en la jerarquía visual, la teoría del color aplicada a interfaces digitales y la optimización de activos. El objetivo final es la creación de un sistema de diseño consistente que permita a los usuarios interactuar con la plataforma de manera intuitiva, sentando las bases técnicas necesarias para la posterior integración con frameworks de JavaScript y el consumo de APIs.',
      recursos: {
        pdf: 'https://www.dropbox.com/s/2i7m0s8d8m1c0m3/Proyecto%20Visual.pdf?dl=0',
        drive: 'https://drive.google.com/file/d/1-0-1',
        github: 'https://github.com/PV2026/Proyecto-Visual',
      },
      equipo: [
        { nombre: 'Lobo Alexander Emanuel', rol: 'Desarrolador' },
        { nombre: 'Villar Florencia Lucia', rol: 'Desarrolador' },
        { nombre: 'Baca Fernando Ezequiel', rol: 'Diseñador' },
      ],
    },
    {
      id: 2,
      titulo: 'Inglés',
      categoria: 'Idiomas',
      estado: 'Pendiente',
      descripcion:
        'Este proyecto se centra en la aplicación práctica de los fundamentos de diseño de interfaces y la arquitectura de información para la web. Los estudiantes deben demostrar el dominio de HTML5 semántico para estructurar contenidos accesibles y CSS3 para la implementación de layouts responsivos, utilizando técnicas modernas como Flexbox y CSS Grid para garantizar una experiencia de usuario óptima en diversos dispositivos.',
      recursos: {
        pdf: 'https://www.dropbox.com/s/2i7m0s8d8m1c0m3/Proyecto%20Visual.pdf?dl=0',
        drive: 'https://drive.google.com/file/d/1-0-1',
        github: 'https://github.com/jorge-lopez/Proyecto-Visual',
      },
    },
    {
      id: 3,
      titulo: 'Programación Estructurada',
      categoria: 'Programación',
      estado: 'Finalizado',
      descripcion:
        'Este proyecto se centra en la aplicación práctica de los fundamentos de diseño de interfaces y la arquitectura de información para la web. Los estudiantes deben demostrar el dominio de HTML5 semántico para estructurar contenidos accesibles y CSS3 para la implementación de layouts responsivos, utilizando técnicas modernas como Flexbox y CSS Grid para garantizar una experiencia de usuario óptima en diversos dispositivos.',
      recursos: {
        pdf: 'https://www.dropbox.com/s/2i7m0s8d8m1c0m3/Proyecto%20Visual.pdf?dl=0',
        drive: 'https://drive.google.com/file/d/1-0-1',
        github: 'https://github.com/jorge-lopez/Proyecto-Visual',
      },
      equipo: [
        { nombre: 'Lobo Alexander Emanuel', rol: 'Desarrolador' },
        { nombre: 'Villar Florencia Lucia', rol: 'Desarrolador' },
        { nombre: 'Baca Fernando Ezequiel', rol: 'Diseñador' },
      ],
    },
    {
      id: 4,
      titulo: 'Álgebra',
      categoria: 'Matemáticas',
      estado: 'En Progreso',
      descripcion:
        'Este proyecto se centra en la aplicación práctica de los fundamentos de diseño de interfaces y la arquitectura de información para la web. Los estudiantes deben demostrar el dominio de HTML5 semántico para estructurar contenidos accesibles y CSS3 para la implementación de layouts responsivos, utilizando técnicas modernas como Flexbox y CSS Grid para garantizar una experiencia de usuario óptima en diversos dispositivos.',
      recursos: {
        pdf: 'https://www.dropbox.com/s/2i7m0s8d8m1c0m3/Proyecto%20Visual.pdf?dl=0',
        drive: 'https://drive.google.com/file/d/1-0-1',
        github: 'https://github.com/jorge-lopez/Proyecto-Visual',
      },
      equipo: [
        { nombre: 'Lobo Alexander Emanuel', rol: 'Desarrolador' },
        { nombre: 'Villar Florencia Lucia', rol: 'Desarrolador' },
        { nombre: 'Baca Fernando Ezequiel', rol: 'Diseñador' },
      ],
    },
    {
      id: 5,
      titulo: 'Base de Datos',
      categoria: 'Base de Datos',
      estado: 'Finalizado',
      descripcion:
        'Este proyecto se centra en la aplicación práctica de los fundamentos de diseño de interfaces y la arquitectura de información para la web. Los estudiantes deben demostrar el dominio de HTML5 semántico para estructurar contenidos accesibles y CSS3 para la implementación de layouts responsivos, utilizando técnicas modernas como Flexbox y CSS Grid para garantizar una experiencia de usuario óptima en diversos dispositivos.',
      recursos: {
        pdf: 'https://www.dropbox.com/s/2i7m0s8d8m1c0m3/Proyecto%20Visual.pdf?dl=0',
        drive: 'https://drive.google.com/file/d/1-0-1',
        github: 'https://github.com/jorge-lopez/Proyecto-Visual',
      },
      equipo: [
        { nombre: 'Lobo Alexander Emanuel', rol: 'Desarrolador' },
        { nombre: 'Villar Florencia Lucia', rol: 'Desarrolador' },
        { nombre: 'Baca Fernando Ezequiel', rol: 'Diseñador' },
      ],
    },
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id);
  };

  const buscarProyecto = (texto) => {
    const textoMinuscula = texto.toLowerCase();
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(textoMinuscula),
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  };
})();

export default proyectoService;
