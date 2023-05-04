import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalPrueba = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Sucursales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre Sucursal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de la sucursal"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Canton</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Canton"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Distrito</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Distrito"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha de apertura</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Fecha de apertura"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Horario Atencion</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Horario Atencion"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Administrador</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Administrador"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Capacidad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Capacidad"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono1"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono2"
                                
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPrueba