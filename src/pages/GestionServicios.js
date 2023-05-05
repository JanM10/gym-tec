import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const GestionServicios = () => {
    const [servicios, setServicios] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [servicioId, setServicioId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const agregarServicio = () => {
        if (!titulo || !descripcion) {
          alert('Debes completar todos los campos');
          return;
        }
        const nuevoServicio = { id: servicios.length + 1, titulo, descripcion };
        setServicios([...servicios, nuevoServicio]);
        setTitulo('');
        setDescripcion('');
      };

    const eliminarServicio = (id) => {
        const serviciosActualizados = servicios.filter(servicio => servicio.id !== id);
        setServicios(serviciosActualizados);
    }

    const editarServicio = () => {
        if (!titulo || !descripcion) {
          alert('Debes completar todos los campos');
          return;
        }
        const serviciosActualizados = servicios.map(servicio => {
          if (servicio.id === servicioId) {
            return { ...servicio, titulo, descripcion };
          }
          return servicio;
        });
        setServicios(serviciosActualizados);
        setTitulo('');
        setDescripcion('');
        setServicioId(null);
        setShowModal(false);
      };

    const handleEditar = (id) => {
        const servicioEncontrado = servicios.find(servicio => servicio.id === id);
        setTitulo(servicioEncontrado.titulo);
        setDescripcion(servicioEncontrado.descripcion);
        setServicioId(id);
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
        setTitulo('');
        setDescripcion('');
        setServicioId(null);
    }

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Servicios</h2>
            <div className="row mb-3">
                <div className="col-md-3">
                    <label htmlFor="titulo" className="form-label">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    <textarea
                        id="descripcion"
                        className="form-control"
                        maxLength={50}
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                    <small>{descripcion.length}/50 caracteres</small>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    {servicioId === null ? (
                        <Button variant="primary" onClick={agregarServicio}>Agregar Servicio</Button>
                    ) : (
                        <Button variant="primary" onClick={() => setShowModal(true)}>Editar Servicio</Button>
                    )}
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((servicio, index) => (
                        <tr key={index}>
                            <td>{servicio.id}</td>
                            <td>{servicio.titulo}</td>
                            <td>{servicio.descripcion}</td>
                            <td>
                                <Button variant="danger" onClick={() => eliminarServicio(servicio.id)}>Eliminar</Button>
                                <Button variant="primary" onClick={() => handleEditar(servicio.id)}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formDescripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} maxLength={50} value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                        </Form.Group>
                        <small>{descripcion.length}/50 caracteres</small>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={editarServicio}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default GestionServicios;