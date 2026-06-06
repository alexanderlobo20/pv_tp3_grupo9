# Trabajo Práctico 3
## ⚛️ React + Vite

---

## Integrantes  
- Alexander Emanuel Lobo — [GitHub] https://github.com/alexanderlobo20  
- Fernando Ezequiel Baca — [GitHub] https://github.com/fernando-eb2406 
- Florencia Lucia Villar — [GitHub] https://github.com/florenciavillar14-19

---
## Descripción del Proyecto
Una aplicación web interactiva y modular para la gestión y control de proyectos académicos o profesionales. El sistema permite listar, filtrar, agregar detalladamente y eliminar proyectos, controlando el flujo de renderizado mediante técnicas avanzadas de React (`useState`, `useEffect`, `useRef`).

## Características Principales

* **Inicialización y Persistencia Lógica:** El sistema arranca con datos base mediante un servicio JavaScript encapsulado (`IIFE`) que garantiza la inmutabilidad de los datos.
* **Formulario Dinámico de Alta:** Permite la inserción de datos estructurados complejos:
    * Información básica (Título, Categoría, Estado, Descripción).
    * Gestión dinámica de arreglos internos para la sección de **Equipo** (añadir/eliminar integrantes con Nombre y Rol en tiempo real).
    * Diccionarios anidados para **Recursos Digitales** (PDF, Google Drive, GitHub).
* **Validación Estricta:** Comprobación del lado del cliente antes del envío (campos requeridos, longitud mínima del equipo y consistencia en los datos de los integrantes).
* **Búsqueda Inteligente:** Filtrado dinámico e insensible a mayúsculas/minúsculas sobre los títulos de los proyectos.
* **Control de Modificaciones No Reactivas:** Uso estratégico de `useRef` para rastrear si los cambios en el estado de los proyectos provienen de una acción directa del usuario o del primer renderizado de la aplicación, actualizando un timestamp en el componente de actividad.
* **Visualización en Detalle:** Apertura modal para revisar de forma exhaustiva toda la metadata de un proyecto seleccionado.

## Tecnologías Utilizadas

* **React 18** (Hooks: `useState`, `useEffect`, `useRef`).
* **Vite** - Servidor de desarrollo y empaquetador de alto rendimiento.
* **JavaScript (ES6+)** - Operadores de propagación (Spread operator `...`), manipulación avanzada de arreglos (`.filter()`, `.map()`, `.push()`) y funciones flecha.
* **CSS3** - Hoja de estilos centralizada (`style.css`) con diseño responsive y layouts basados en Flexbox/Grid.

---