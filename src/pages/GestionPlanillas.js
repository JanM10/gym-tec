import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const GestionPlanillas = () => {
    const [planillas, setPlanillas] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [planillaId, setPlanillaId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const agregarPlanilla = () => {
        if (!descripcion) {
            alert('Debes completar la descripción del planilla');
            return;
        }
        const nuevoPlanilla = { id: planillas.length + 1, descripcion };
        setPlanillas([...planillas, nuevoPlanilla]);
        setDescripcion('');
    };

    const eliminarPlanilla = (id) => {
        const planillasActualizados = planillas.filter(planilla => planilla.id !== id);
        setPlanillas(planillasActualizados);
    };

    const editarPlanilla = () => {
        if (!descripcion) {
            alert('Debes completar la descripción del planilla');
            return;
        }
        const planillasActualizados = planillas.map(planilla => {
            if (planilla.id === planillaId) {
                return { ...planilla, descripcion };
            }
            return planilla;
        });
        setPlanillas(planillasActualizados);
        setDescripcion('');
        setPlanillaId(null);
        setShowModal(false);
    };

    const handleEditar = (id) => {
        const planillaEncontrado = planillas.find(planilla => planilla.id === id);
        setDescripcion(planillaEncontrado.descripcion);
        setPlanillaId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setDescripcion('');
        setPlanillaId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Planillas</h2>
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
                    {planillaId === null ? (
                        <Button variant="primary" onClick={agregarPlanilla}>Agregar Planilla</Button>
                    ) : (
                        <Button variant="primary" onClick={() => setShowModal(true)}>Editar Planilla</Button>
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
                    {planillas.map((planilla, index) => (
                        <tr key={index}>
                            <td>{planilla.id}</td>
                            <td>{planilla.descripcion}</td>
                            <td>
                                <Button variant="danger" onClick={() => eliminarPlanilla(planilla.id)}>Eliminar</Button>
                                <Button variant="primary" onClick={() => handleEditar(planilla.id)}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Planilla</Modal.Title>
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
                    <Button variant="primary" onClick={editarPlanilla}>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GestionPlanillas;
