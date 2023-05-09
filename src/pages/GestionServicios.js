import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GestionServicios = () => {
    const [servicios, setServicios] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [id_sucursal, setId_sucursal] = useState('');
    const [servicioId, setServicioId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    //Metodo GET
    const mostrarServicio = async () => {
        const response = await fetch("http://localhost:49146/api/servicios")

        if (response.ok) {
            const servicios = await response.json();
            setServicios(servicios)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarServicio()
    }, [])

    // Metodo POST
    const agregarServicio = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de el servicio');
            return;
        }
        fetch('http://localhost:49146/api/servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ descripcion: descripcion, id_sucursal: 1 })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoServicio = { id: data.id, descripcion: data.descripcion };
                setServicios([...servicios, nuevoServicio]);
                mostrarServicio();
                setDescripcion('');
            })
            .catch(error => console.error(error));
    };

    // Metodo DELETE
    const eliminarServicio = (id) => {

        var respuesta = window.confirm("¿Está seguro que desea eliminar el dato?")

        if (!respuesta) {
            return;
        }

        fetch(`http://localhost:49146/api/servicios/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    const serviciosActualizados = servicios.filter(servicio => servicio.id !== id);
                    setServicios(serviciosActualizados);
                    toast.success('Servicio eliminada correctamente');
                } else {
                    console.log("Hubo un error");
                }
            })
            .catch(error => console.error(error));
    };

    // Metodo PUT
    const editarServicio = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de el servicio');
            return;
        }

        const servicioActualizado = { id: servicioId, descripcion, id_sucursal: 1 };

        fetch('http://localhost:49146/api/servicios', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicioActualizado)
        })
            .then(response => response.json())
            .then(data => {
                const serviciosActualizados = servicios.map(servicio => {
                    if (servicio.id === data.id) {
                        return data;
                    }
                    return servicio;
                });
                setServicios(serviciosActualizados);
                mostrarServicio();
                setDescripcion('');
                setServicioId(null);
                setShowModal(false);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al actualizar el servicio');
            });
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
