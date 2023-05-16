import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GestionProductos = () => {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [costo, setCosto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [productoId, setProductoId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Método GET
    const mostrarProductos = async () => {
        const response = await fetch("http://localhost:49146/api/productos");

        if (response.ok) {
            const productos = await response.json();
            setProductos(productos);
        } else {
            console.log("Hubo un error");
        }
    };

    useEffect(() => {
        mostrarProductos();
    }, []);

    // Método POST
    const agregarProducto = () => {
        if (!descripcion || !nombre || !codigo || !costo) {
            alert('Debes completar todos los campos');
            return;
        }

        fetch('http://localhost:49146/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                codigo: codigo,
                costo: costo,
                descripcion: descripcion,
                id_sucursal: 1
            })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoProducto = {
                    id: data.id,
                    nombre: data.nombre,
                    codigo: data.codigo,
                    costo: data.costo,
                    descripcion: data.descripcion
                };
                setProductos([...productos, nuevoProducto]);
                mostrarProductos();
                setNombre('');
                setCodigo('');
                setCosto('');
                setDescripcion('');
            })
            .catch(error => console.error(error));
    };

    // Método DELETE
    const eliminarProducto = (id) => {
        var respuesta = window.confirm("¿Está seguro que desea eliminar el dato?");

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
                    toast.success('Producto eliminado correctamente');
                } else {
                    console.log("Hubo un error");
                }
            })
            .catch(error => console.error(error));
    };

    // Método PUT
    const editarProducto = () => {
        if (!descripcion || !nombre || !codigo || !costo) {
            alert('Debes completar todos los campos');
            return;
        }

        const productoActualizado = {
            id: productoId,
            nombre: nombre,
            codigo: codigo,
            costo: costo,
            descripcion: descripcion,
            id_sucursal: 1
        };

        fetch(`http://localhost:49146/api/productos/${productoId}`, {
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
                mostrarProductos();
                setNombre('');
                setCodigo('');
                setCosto('');
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
        setNombre(productoEncontrado.nombre);
        setCodigo(productoEncontrado.codigo);
        setCosto(productoEncontrado.costo);
        setDescripcion(productoEncontrado.descripcion);
        setProductoId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setNombre('');
        setCodigo('');
        setCosto('');
        setDescripcion('');
        setProductoId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Productos</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="codigo">
                        <Form.Label>Código:</Form.Label>
                        <Form.Control type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="costo">
                        <Form.Label>Costo:</Form.Label>
                        <Form.Control type="text" value={costo} onChange={e => setCosto(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="descripcion">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control as="textarea" maxLength={50} value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                        <small>{descripcion.length}/50 caracteres</small>
                    </Form.Group>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    {productoId === null ? (
                        <Button variant="primary" onClick={agregarProducto}>Agregar Producto</Button>
                    ) : (
                        <Button variant="primary" onClick={() => setShowModal(true)}>Editar Producto</Button>
                    )}
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Código</th>
                        <th>Costo</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.codigo}</td>
                            <td>{producto.costo}</td>
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
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="codigo">
                            <Form.Label>Código:</Form.Label>
                            <Form.Control type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="costo">
                            <Form.Label>Costo:</Form.Label>
                            <Form.Control type="text" value={costo} onChange={e => setCosto(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" maxLength={50} value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                            <small>{descripcion.length}/50 caracteres</small>
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