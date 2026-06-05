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

const { titulo, categoria, estado, descripcion, recursos, equipo } = formulario;
  function handleChange(e) {
    const { name, value } = e.target;
    setFormulario((PForm) => ({
      ...PForm,
      [name]: value,
    }));
  }
const validarProyecto = () => {
    if (!titulo.trim()) return 'El título es obligatorio';
    if (!categoria.trim()) return 'La categoría es obligatoria';
    if (!estado.trim()) return 'El estado es obligatorio';
    if (!descripcion.trim()) return 'La descripción es obligatoria';
    if (!equipo.length)
        return 'Debe haber al menos un integrante';
    if (equipo.some((miembro) => !miembro.nombre.trim()))
        return 'Todos los integrantes deben tener nombre';

    return null;
};
const handleSubmit = (e) => {
    e.preventDefault();
    const error = validarProyecto();
if (error) {
    setMensaje(error);
    return;
}
    agregarProyecto(formulario);
    setMensaje('');
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
};


return (
    <form className='formulario' onSubmit={handleSubmit}>
        {mensaje && <p className='mensaje-error'>{mensaje}</p>}
        <input
          type='text'
          placeholder='Título'
          value={titulo}
          name='titulo'
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Categoría'
          value={categoria}
          name='categoria'
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Estado'
          value={estado}
          name='estado'
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Descripción'
          value={descripcion}
          name='descripcion'
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Integrantes (,)'
          value={equipo.map((miembro) => miembro.nombre).join(',')}
          onChange={(e) =>
              setFormulario({
                  ...formulario,
                  equipo: e.target.value.split(',').map((nombre) => ({
                      nombre: nombre.trim(),
                      rol: 'Desarrollador',
                  })),
              })
          }
        />

        <input
          type='text'
          placeholder='PDF'
          value={recursos.pdf}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              recursos: {
                ...formulario.recursos,
                pdf: e.target.value
              }
            })
          }
        />

        <input
          type='text'
          placeholder='Drive'
          value={recursos.drive}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              recursos: {
                ...formulario.recursos,
                drive: e.target.value
              }
            })
          }
        />

        <input
          type='text'
          placeholder='GitHub'
          value={recursos.github}
          onChange={(e) =>
            setFormulario({
              ...formulario,
              recursos: {
                ...formulario.recursos,
                github: e.target.value
              }
            })
          }
        />
        <button
          type='submit'
          className='BotonGuardar'
        >
          Guardar Proyecto
        </button>
        
    </form>
);

}

export default FormularioProyecto;
