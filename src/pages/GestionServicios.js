import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const GestionServicios = () => {
    const [servicios, setServicios] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [servicioId, setServicioId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const agregarServicio = () => {
        if (!descripcion) {
            alert('Debes completar la descripción del servicio');
            return;
        }
        const nuevoServicio = { id: servicios.length + 1, descripcion };
        setServicios([...servicios, nuevoServicio]);
        setDescripcion('');
    };

    const eliminarServicio = (id) => {
        const serviciosActualizados = servicios.filter(servicio => servicio.id !== id);
        setServicios(serviciosActualizados);
    };

    const editarServicio = () => {
        if (!descripcion) {
            alert('Debes completar la descripción del servicio');
            return;
        }
        const serviciosActualizados = servicios.map(servicio => {
            if (servicio.id === servicioId) {
                return { ...servicio, descripcion };
            }
            return servicio;
        });
        setServicios(serviciosActualizados);
        setDescripcion('');
        setServicioId(null);
        setShowModal(false);
    };

    const handleEditar = (id) => {
        const servicioEncontrado = servicios.find(servicio => servicio.id === id);
        setDescripcion(servicioEncontrado.descripcion);
        setServicioId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setDescripcion('');
        setServicioId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Servicios</h2>
            <div className="row mb-3">
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
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((servicio, index) => (
                        <tr key={index}>
                            <td>{servicio.id}</td>
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
                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control type="text" maxLength={50} value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Cancelar</Button>
                    <Button variant="primary" onClick={editarServicio}>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GestionServicios;
