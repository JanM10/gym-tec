import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GestionProductos = () => {
    const [productos, setProductos] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [productoId, setProductoId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    //Metodo GET
    const mostrarProducto = async () => {
        const response = await fetch("http://localhost:49146/api/productos")

        if (response.ok) {
            const productos = await response.json();
            setProductos(productos)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarProducto()
    }, [])

    // Metodo POST
    const agregarProducto = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de el producto');
            return;
        }
        fetch('http://localhost:49146/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ descripcion: descripcion, id_sucursal:1 })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoProducto = { id: data.id, descripcion: data.descripcion };
                setProductos([...productos, nuevoProducto]);
                mostrarProducto();
                setDescripcion('');
            })
            .catch(error => console.error(error));
    };

    // Metodo DELETE
    const eliminarProducto = (id) => {

        var respuesta = window.confirm("¿Está seguro que desea eliminar el dato?")

        if (!respuesta) {
            return;
        }

        fetch(`http://localhost:49146/api/productos/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    const productosActualizados = productos.filter(producto => producto.id !== id);
                    setProductos(productosActualizados);
                    toast.success('Producto eliminada correctamente');
                } else {
                    console.log("Hubo un error");
                }
            })
            .catch(error => console.error(error));
    };

    //Metodo PUT
    const editarProducto = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de el producto');
            return;
        }

        const productoActualizado = { id: productoId, descripcion, id_sucursal:1 };

        fetch('http://localhost:49146/api/productos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoActualizado)
        })
            .then(response => response.json())
            .then(data => {
                const productosActualizados = productos.map(producto => {
                    if (producto.id === data.id) {
                        return data;
                    }
                    return producto;
                });
                setProductos(productosActualizados);
                mostrarProducto();
                setDescripcion('');
                setProductoId(null);
                setShowModal(false);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al actualizar el producto');
            });
    };

    const handleEditar = (id) => {
        const productoEncontrado = productos.find(producto => producto.id === id);
        setDescripcion(productoEncontrado.descripcion);
        setProductoId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setDescripcion('');
        setProductoId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Productos</h2>
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
                    {productoId === null ? (
                        <Button variant="primary" onClick={agregarProducto}>Agregar Productos</Button>
                    ) : (
                        <Button variant="primary" onClick={() => setShowModal(true)}>Editar Producto</Button>
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
                    {productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.id}</td>
                            <td>{producto.descripcion}</td>
                            <td>
                                <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>
                                <Button variant="primary" onClick={() => handleEditar(producto.id)}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
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
                    <Button variant="primary" onClick={editarProducto}>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GestionProductos;
