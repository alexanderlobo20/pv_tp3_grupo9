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
        'A lo largo de la asignatura de Inglés, se trabaja el desarrollo progresivo de habilidades de comprensión lectora, escritura académica y comunicación oral en contextos formales. Se hace énfasis en la construcción de vocabulario técnico y general, así como en la correcta aplicación de estructuras gramaticales que permitan la producción de textos coherentes y bien organizados. El objetivo principal es que el estudiante pueda desenvolverse en situaciones comunicativas básicas y académicas, además de comprender textos de complejidad media relacionados con su área de estudio.',
      recursos: {
        pdf: 'https://drive.google.com/file/d/ingles-apuntes-2024',
        drive: 'https://drive.google.com/drive/folders/ingles-material',
        github: 'https://github.com/estudio/ingles-practica',
      },
      equipo: [
        { nombre: 'Lobo Alexander Emanuel', rol: 'Desarrolador' },
        { nombre: 'Villar Florencia Lucia', rol: 'Desarrolador' },
        { nombre: 'Baca Fernando Ezequiel', rol: 'Diseñador' },
      ],
    },
    {
      id: 3,
      titulo: 'Programación Estructurada',
      categoria: 'Programación',
      estado: 'Finalizado',
      descripcion:
        'La asignatura de Programación Estructurada se centra en el desarrollo de algoritmos utilizando estructuras de control como condicionales, bucles y funciones, promoviendo una lógica de programación clara y ordenada. Se trabaja con la descomposición de problemas en subproblemas más simples, fomentando el pensamiento algorítmico y la correcta gestión de la memoria y datos. El objetivo final es que el estudiante sea capaz de construir soluciones eficientes y mantenibles aplicando buenas prácticas de programación en lenguajes estructurados.',
      recursos: {
        pdf: 'https://drive.google.com/file/d/prog-estructurada-guide',
        drive: 'https://drive.google.com/drive/folders/prog-estructurada',
        github:
          'https://github.com/estudio/programacion-estructurada-ejercicios',
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
        'En la materia de Álgebra se abordan conceptos fundamentales relacionados con expresiones algebraicas, ecuaciones, sistemas de ecuaciones y funciones matemáticas. Se enfatiza el desarrollo del razonamiento lógico y abstracto mediante la resolución de problemas que implican operaciones con variables y estructuras matemáticas complejas. El objetivo principal es fortalecer la capacidad analítica del estudiante para modelar y resolver situaciones mediante herramientas algebraicas aplicables en contextos científicos y tecnológicos.',
      recursos: {
        pdf: 'https://drive.google.com/file/d/algebra-teoria-basica',
        drive: 'https://drive.google.com/drive/folders/algebra-ejercicios',
        github: 'https://github.com/estudio/algebra-practica',
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
        'La asignatura de Base de Datos se enfoca en el diseño, implementación y gestión de sistemas de almacenamiento de información estructurada. Se estudian modelos relacionales, normalización de datos y lenguaje SQL para la manipulación eficiente de información. El objetivo es que el estudiante pueda diseñar bases de datos optimizadas, asegurando la integridad, consistencia y acceso eficiente a los datos dentro de sistemas informáticos modernos.',
      recursos: {
        pdf: 'https://drive.google.com/file/d/bd-sql-apuntes',
        drive: 'https://drive.google.com/drive/folders/base-de-datos-material',
        github: 'https://github.com/estudio/base-de-datos-sql-practica',
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
    proyectos.unshift(nuevoProyecto);
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

  const obtenerProyectoId = (id) => {
    return proyectos.find((proyecto) => proyecto.id === id);
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
    obtenerProyectoId,
  };
})();

export default proyectoService;
