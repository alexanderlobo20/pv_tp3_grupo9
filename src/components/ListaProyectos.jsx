import React, { useState } from "react";
import proyectoService from "../services/proyectoService.js";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState( proyectoService.obtenerProyectos() );
  const [busqueda, setBusqueda] = useState("");
  const [nuevoProyecto, setNuevoProyecto] = useState({ titulo: "", categoria: "", estado: ""});
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  let proyectosFiltrados = proyectos;
  let formulario = null;

  if (busqueda !== "") { proyectosFiltrados = proyectoService.buscarProyecto(busqueda); }

  if (mostrarFormulario === true) {
    formulario = (
      <div className="formulario">
        <input  type="text" placeholder="Título"
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              titulo: e.target.value
            })
          }
        />

        <input type="text" placeholder="Categoría"
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              categoria: e.target.value
            })
          }
        />

        <input type="text" placeholder="Estado"
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              estado: e.target.value
            })
          }
        />

        <button className="BotonGuardar"
            onClick={() => {
              proyectoService.agregarProyecto({
              id: proyectos.length + 1,
              titulo: nuevoProyecto.titulo,
              categoria: nuevoProyecto.categoria,
              estado: nuevoProyecto.estado
            });

            setProyectos(
              proyectoService.obtenerProyectos()
            );

            setMostrarFormulario(false);

            setNuevoProyecto({
              titulo: "",
              categoria: "",
              estado: ""
            });

          }}
          > Guardar </button>
      </div>
    );
  }

  return (
    <section className="proyectos">
      <h2 className="proyectos-titulo">
        Proyectos
      </h2>

      <input
        className="busqueda"
        type="text"
        placeholder="Buscar proyecto"
        onChange={(e) => setBusqueda(e.target.value) } />
        
         <button className="Boton-Agregar" onClick={() => setMostrarFormulario(!mostrarFormulario) }>
           Agregar Proyecto
        </button>

      {formulario}

      <div className="proyectos-lista">
        {proyectosFiltrados.map((proyecto) => (
          <div className="proyecto" key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.categoria}</p>
            <p>{proyecto.estado}</p>
            <button className="BotonEliminar"
              onClick={() => {
                proyectoService.eliminarProyecto( proyecto.id );
                setProyectos( proyectoService.obtenerProyectos() );
              }}
            >Eliminar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaProyectos;
