import React, { useState } from 'react';

function FormularioProyecto({ agregarProyecto }) {
  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: '',
    descripcion: '',
    recursos: {
      pdf: '',
      drive: '',
      github: '',
    },
    equipo: [],
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecursos = (e) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      recursos: {
        ...prev.recursos,
        [name]: value,
      },
    }));
  };

  const agregarIntegrante = () => {
    setFormulario((prev) => ({
      ...prev,
      equipo: [...prev.equipo, { nombre: '', rol: '' }],
    }));
  };

  const eliminarIntegrante = (index) => {
    setFormulario((prev) => ({
      ...prev,
      equipo: prev.equipo.filter((_, i) => i !== index),
    }));
  };

  const actualizarIntegrante = (index, campo, valor) => {
    setFormulario((prev) => {
      const copia = [...prev.equipo];
      copia[index][campo] = valor;

      return {
        ...prev,
        equipo: copia,
      };
    });
  };

  const validar = () => {
    if (!formulario.titulo.trim()) return 'El título es obligatorio';
    if (!formulario.categoria.trim()) return 'La categoría es obligatoria';
    if (!formulario.estado.trim()) return 'El estado es obligatorio';
    if (!formulario.descripcion.trim()) return 'La descripción es obligatoria';

    if (formulario.equipo.length === 0)
        return 'Debes agregar al menos 1 integrante';

    const sinNombre = formulario.equipo.find(m => !m.nombre?.trim());
    if (sinNombre) return 'Todos los integrantes deben tener nombre';

    const sinRol = formulario.equipo.find(m => !m.rol?.trim());
    if (sinRol) return 'Todos los integrantes deben tener rol';

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validar();

    if (error) {
      setMensaje(error);
      return;
    }

    agregarProyecto(formulario);

    setFormulario({
      titulo: '',
      categoria: '',
      estado: '',
      descripcion: '',
      recursos: {
        pdf: '',
        drive: '',
        github: '',
      },
      equipo: [],
    });

    setMensaje('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {mensaje && <div className="mensaje-error">{mensaje}</div>}

      <input
        name="titulo"
        placeholder="Título"
        value={formulario.titulo}
        onChange={handleChange}
      />

      <input
        name="categoria"
        placeholder="Categoría"
        value={formulario.categoria}
        onChange={handleChange}
      />

      <input
        name="estado"
        placeholder="Estado"
        value={formulario.estado}
        onChange={handleChange}
      />

      <input
        name="descripcion"
        placeholder="Descripción"
        value={formulario.descripcion}
        onChange={handleChange}
      />

      <button
        type="button"
        className="boton-agregar-integrante"
        onClick={agregarIntegrante}
      >
        + Agregar integrante
      </button>

      <div className="integrantes-container">
        {formulario.equipo.map((miembro, index) => (
          <div className="integrante-item" key={index}>
            <input
              placeholder="Nombre"
              value={miembro.nombre}
              onChange={(e) =>
                actualizarIntegrante(index, 'nombre', e.target.value)
              }
            />

            <input
              placeholder="Rol"
              value={miembro.rol}
              onChange={(e) =>
                actualizarIntegrante(index, 'rol', e.target.value)
              }
            />

            <button
              type="button"
              className="BotonEliminar"
              onClick={() => eliminarIntegrante(index)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      <input
        name="pdf"
        placeholder="PDF"
        value={formulario.recursos.pdf}
        onChange={handleRecursos}
      />

      <input
        name="drive"
        placeholder="Drive"
        value={formulario.recursos.drive}
        onChange={handleRecursos}
      />

      <input
        name="github"
        placeholder="GitHub"
        value={formulario.recursos.github}
        onChange={handleRecursos}
      />

      <button type="submit" className="BotonGuardar">
        Guardar Proyecto
      </button>
    </form>
  );
}

export default FormularioProyecto;
