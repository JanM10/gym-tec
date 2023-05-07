import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Col, Row } from 'react-bootstrap';


const GeneracionPlanilla = () => {
    const [planillas, setPlanillas] = useState([]);
    const [sucursal, setSucursal] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [horasClases, setHorasClases] = useState('');
    const [monto, setMonto] = useState('');
    const [planillaId, setPlanillaId] = useState(null);
    const [tipoPlanilla, setTipoPlanilla] = useState('Pago mensual');
    const [showModal, setShowModal] = useState(false);

    const agregarPlanilla = () => {
        if (!sucursal || !cedula || !nombre || !horasClases || !monto) {
            alert('Debes completar todos los campos');
            return;
        }
        const nuevaPlanilla = {
            id: planillas.length + 1,
            sucursal,
            cedula,
            nombre,
            horasClases,
            monto,
            tipo: tipoPlanilla,
        };
        setPlanillas([...planillas, nuevaPlanilla]);
        setSucursal('');
        setCedula('');
        setNombre('');
        setHorasClases('');
        setMonto('');
        setTipoPlanilla('Pago mensual');
    };

    const eliminarPlanilla = (id) => {
        const planillasActualizadas = planillas.filter((planilla) => planilla.id !== id);
        setPlanillas(planillasActualizadas);
    };

    const editarPlanilla = () => {
        if (!sucursal || !cedula || !nombre || !horasClases || !monto) {
            alert('Debes completar todos los campos');
            return;
        }
        const planillasActualizadas = planillas.map((planilla) => {
            if (planilla.id === planillaId) {
                return {
                    ...planilla,
                    sucursal,
                    cedula,
                    nombre,
                    horasClases,
                    monto,
                    tipo: tipoPlanilla,
                };
            }
            return planilla;
        });
        setPlanillas(planillasActualizadas);
        setSucursal('');
        setCedula('');
        setNombre('');
        setHorasClases('');
        setMonto('');
        setTipoPlanilla('Pago mensual');
        setPlanillaId(null);
        setShowModal(false);
    };

    const handleEditar = (id) => {
        const planillaEncontrada = planillas.find((planilla) => planilla.id === id);
        setSucursal(planillaEncontrada.sucursal);
        setCedula(planillaEncontrada.cedula);
        setNombre(planillaEncontrada.nombre);
        setHorasClases(planillaEncontrada.horasClases);
        setMonto(planillaEncontrada.monto);
        setTipoPlanilla(planillaEncontrada.tipo);
        setPlanillaId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSucursal('');
        setCedula('');
        setNombre('');
        setHorasClases('');
        setMonto('');
        setTipoPlanilla('Pago mensual');
        setPlanillaId(null);
    };

    return (
        <div>
            <h1>Generación de Planilla</h1>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="sucursal">
                            <Form.Label>Sucursal:</Form.Label>
                            <Form.Control size="sm" type="text" value={sucursal} onChange={(e) => setSucursal(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="cedula">
                            <Form.Label>Cédula:</Form.Label>
                            <Form.Control size="sm" type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control size="sm" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="horasClases">
                            <Form.Label>Horas de Clases:</Form.Label>
                            <Form.Control size="sm" type="number" value={horasClases} onChange={(e) => setHorasClases(e.target.value)} min={0}/>
                        </Form.Group>

                        <Form.Group controlId="monto">
                            <Form.Label>Monto:</Form.Label>
                            <Form.Control size="sm" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} min={0}/>
                        </Form.Group>

                        <Form.Group controlId="tipoPlanilla" style={{ marginBottom: "60px" }}>
                            <Form.Label>Tipo de Planilla:</Form.Label>
                            <Form.Control size="sm" as="select" value={tipoPlanilla} onChange={(e) => setTipoPlanilla(e.target.value)}>
                                <option>Pago mensual</option>
                                <option>Pago quincenal</option>
                                <option>Pago semanal</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" onClick={agregarPlanilla}>Agregar Planilla</Button>
                    </Form>
                </Col>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sucursal</th>
                                <th>Cédula</th>
                                <th>Nombre</th>
                                <th>Horas de Clases</th>
                                <th>Monto</th>
                                <th>Tipo de Planilla</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planillas.map((planilla) => (
                                <tr key={planilla.id}>
                                    <td>{planilla.id}</td>
                                    <td>{planilla.sucursal}</td>
                                    <td>{planilla.cedula}</td>
                                    <td>{planilla.nombre}</td>
                                    <td>{planilla.horasClases}</td>
                                    <td>{planilla.monto}</td>
                                    <td>{planilla.tipo}</td>
                                    <td>
                                        <Button variant="info" onClick={() => handleEditar(planilla.id)}>Editar</Button>{' '}
                                        <Button variant="danger" onClick={() => eliminarPlanilla(planilla.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>EditarPlanilla</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="sucursal">
                            <Form.Label>Sucursal:</Form.Label>
                            <Form.Control size="sm" type="text" value={sucursal} onChange={(e) => setSucursal(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="cedula">
                            <Form.Label>Cédula:</Form.Label>
                            <Form.Control size="sm" type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control size="sm" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="horasClases">
                            <Form.Label>Horas de Clases:</Form.Label>
                            <Form.Control size="sm" type="number" value={horasClases} onChange={(e) => setHorasClases(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="monto">
                            <Form.Label>Monto:</Form.Label>
                            <Form.Control size="sm" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="tipoPlanilla">
                            <Form.Label>Tipo de Planilla:</Form.Label>
                            <Form.Control size="sm" as="select" value={tipoPlanilla} onChange={(e) => setTipoPlanilla(e.target.value)}>
                                <option>Pago mensual</option>
                                <option>Pago quincenal</option>
                                <option>Pago semanal</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={editarPlanilla}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

      
};

export default GeneracionPlanilla;