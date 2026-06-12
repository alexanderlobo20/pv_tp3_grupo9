import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, Card } from "react-bootstrap";

function FormularioProyecto({ agregarProyecto }) {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "",
    descripcion: "",
    recursos: {
      pdf: "",
      drive: "",
      github: "",
    },
    equipo: [],
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecursos = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      recursos: { ...prev.recursos, [name]: value },
    }));
  };

  const agregarIntegrante = () => {
    setFormulario((prev) => ({
      ...prev,
      equipo: [...prev.equipo, { nombre: "", rol: "" }],
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
      return { ...prev, equipo: copia };
    });
  };

  const validar = () => {
    if (!formulario.titulo.trim()) return "El título es obligatorio";
    if (!formulario.categoria.trim()) return "La categoría es obligatoria";
    if (!formulario.estado.trim()) return "El estado es obligatorio";
    if (!formulario.descripcion.trim()) return "La descripción es obligatoria";

    if (formulario.equipo.length === 0)
      return "Debes agregar al menos 1 integrante";

    const sinNombre = formulario.equipo.find(
      (m) => !m.nombre || !m.nombre.trim()
    );
    if (sinNombre) return "Todos los integrantes deben tener nombre";

    const sinRol = formulario.equipo.find(
      (m) => !m.rol || !m.rol.trim()
    );
    if (sinRol) return "Todos los integrantes deben tener rol";

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
      titulo: "",
      categoria: "",
      estado: "",
      descripcion: "",
      recursos: { pdf: "", drive: "", github: "" },
      equipo: [],
    });

    setMensaje("");
  };

  const campoInvalido = (campo) => {
    if (!mensaje) return false;
    if (mensaje.toLowerCase().includes(campo)) return true;
    return false;
  };

  return (
    <Card className="shadow-lg border-0 rounded-4">
      <Card.Body className="p-4">

        <h4 className="mb-4 text-center fw-bold">
          Nuevo Proyecto
        </h4>

        {mensaje && (
          <Alert variant="danger" className="text-center fw-semibold">
            {mensaje}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control
                  name="titulo"
                  value={formulario.titulo}
                  onChange={handleChange}
                  isInvalid={campoInvalido("título")}
                />
                <Form.Control.Feedback type="invalid">
                  Completa este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  name="categoria"
                  value={formulario.categoria}
                  onChange={handleChange}
                  isInvalid={campoInvalido("categoría")}
                />
                <Form.Control.Feedback type="invalid">
                  Completa este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              name="estado"
              value={formulario.estado}
              onChange={handleChange}
              isInvalid={campoInvalido("estado")}
            />
            <Form.Control.Feedback type="invalid">
              Completa este campo
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={formulario.descripcion}
              onChange={handleChange}
              isInvalid={campoInvalido("descripción")}
            />
            <Form.Control.Feedback type="invalid">
              Completa este campo
            </Form.Control.Feedback>
          </Form.Group>

          <hr />

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Integrantes</h5>

              <Button
                type="button"
                variant="outline-primary"
                size="sm"
                onClick={agregarIntegrante}
              >
                + Agregar
              </Button>
            </div>

            {formulario.equipo.length === 0 && (
              <Alert variant="secondary" className="py-2">
                Aún no hay integrantes agregados
              </Alert>
            )}

            {formulario.equipo.map((miembro, index) => (
              <Card key={index} className="mb-2 border-0 shadow-sm">
                <Card.Body className="py-2">

                  <Row className="align-items-center g-2">

                    <Col md={5}>
                      <Form.Control
                        size="sm"
                        placeholder="Nombre"
                        value={miembro.nombre}
                        onChange={(e) =>
                          actualizarIntegrante(index, "nombre", e.target.value)
                        }
                        isInvalid={
                          mensaje?.includes("nombre") &&
                          (!miembro.nombre || !miembro.nombre.trim())
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Campo obligatorio
                      </Form.Control.Feedback>
                    </Col>

                    <Col md={5}>
                      <Form.Control
                        size="sm"
                        placeholder="Rol"
                        value={miembro.rol}
                        onChange={(e) =>
                          actualizarIntegrante(index, "rol", e.target.value)
                        }
                        isInvalid={
                          mensaje?.includes("rol") &&
                          (!miembro.rol || !miembro.rol.trim())
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Campo obligatorio
                      </Form.Control.Feedback>
                    </Col>

                    <Col md={2} className="text-end">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => eliminarIntegrante(index)}
                      >
                        Eliminar
                      </Button>
                    </Col>

                  </Row>

                </Card.Body>
              </Card>
            ))}
          </div>

          <hr />

          <h6 className="mb-3">Recursos</h6>

          <Row className="mb-2">
            <Col>
              <Form.Control
                placeholder="PDF"
                name="pdf"
                value={formulario.recursos.pdf}
                onChange={handleRecursos}
              />
            </Col>

            <Col>
              <Form.Control
                placeholder="Drive"
                name="drive"
                value={formulario.recursos.drive}
                onChange={handleRecursos}
              />
            </Col>

            <Col>
              <Form.Control
                placeholder="GitHub"
                name="github"
                value={formulario.recursos.github}
                onChange={handleRecursos}
              />
            </Col>
          </Row>

          <div className="d-grid mt-4">
            <Button type="submit" variant="primary" size="lg">
              Guardar Proyecto
            </Button>
          </div>

        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioProyecto;
