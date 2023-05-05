import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import '../styles/Modal.css';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Sucursales.css";

const SucursalesAPI = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre_sucursal, setNombre_sucursal] = useState('')
    const [provincia, setProvincia] = useState('')
    const [canton, setCanton] = useState('')
    const [distrito, setDistrito] = useState('')
    const [fecha_apertura, setFecha_apertura] = useState('')
    const [horario_atencion, setHorario_atencion] = useState('')
    const [empleado_admin, setEmpleado_admin] = useState('')
    const [capacidad_maxima, setCapacidad_maxima] = useState('')

    const [telefono1, setTelefono1] = useState('')
    const [telefono2, setTelefono2] = useState('')
    const [estado_tienda, setEstado_tienda] = useState('')
    const [estado_spa, setEstado_spa] = useState('')

    const [editId, setEditId] = useState('')
    const [editNombre_sucursal, setEditNombre_sucursal] = useState('')
    const [editProvincia, setEditProvincia] = useState('')
    const [editCanton, setEditCanton] = useState('')
    const [editDistrito, setEditDistrito] = useState('')
    const [editFecha_apertura, setEditFecha_apertura] = useState('')
    const [editHorario_atencion, setEditHorario_atencion] = useState('') //no esta
    const [editEmpleado_admin, setEditEmpleado_admin] = useState('') //no esta
    const [editCapacidad_maxima, setEditCapacidad_maxima] = useState('')
    const [editTelefono1, setEditTelefono1] = useState('')
    const [editTelefono2, setEditTelefono2] = useState('')
    const [editEstado_tienda, setEditEstado_tienda] = useState('')
    const [editEstado_spa, setEditEstado_spa] = useState('')

    const empdata = [
        {
            id: 1,
            nombre_sucursal: "Teodora",
            provincia: "guanacaste",
            canton: "no se",
            distrito: "federal",
            fecha_apertura: "8/4/2022",
            horario_atencion: "3:10 PM",
            empleado_admin: "Teodora Drache",
            capacidad_maxima: 10,
            telefono1: "6833790568",
            telefono2: "8515161829"
        },
        {
            id: 2,
            nombre_sucursal: "Loraine",
            provincia: "guanacaste",
            canton: "no se",
            distrito: "federal",
            fecha_apertura: "10/14/2022",
            horario_atencion: "6:14 PM",
            empleado_admin: "Loraine Woodcraft",
            capacidad_maxima: 73,
            telefono1: "3041291715",
            telefono2: "9217065666"
        },
        {
            id: 3,
            nombre_sucursal: "Ramona",
            provincia: "guanacaste",
            canton: "no se",
            distrito: "federal",
            fecha_apertura: "12/31/2022",
            horario_atencion: "8:31 PM",
            empleado_admin: "Ramona Troppmann",
            capacidad_maxima: 94,
            telefono1: "5344251625",
            telefono2: "5811840219"
        }
    ]

    // URL del api
    const url = "http://localhost:49146/api/sucursal";

    const [data, setData] = useState([]);

    useEffect(() => {
        dataGET();
    }, []);

    // Metodo GET
    const dataGET = () => {
        axios.get(url)
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Metodo POST
    const dataPOST = () => {
        const datos = {
            "nombre": nombre_sucursal,
            "fecha_apertura": fecha_apertura,
            "capacidad": capacidad_maxima,
            "provincia": provincia,
            "canton": canton,
            "distrito": distrito,
            "estado_tienda": estado_tienda,
            "estado_spa": estado_spa,
        }

        axios.post(url, datos)
            .then((result) => {
                dataGET();
                //clear();
                alert("Se ha agregado una sucursal");
            })
    }

    const clear = () => {
        setNombre_sucursal('');
        setProvincia('');
        setCanton('');
        setDistrito('');
        setFecha_apertura('');
        setHorario_atencion('');
        setEmpleado_admin('');
        setCapacidad_maxima('');
        setTelefono1('');
        setTelefono2('');
        setEstado_tienda('');
        setEstado_spa('');

        setEditNombre_sucursal('');
        setEditProvincia('');
        setEditCanton('');
        setEditDistrito('');
        setEditFecha_apertura('');
        setEditHorario_atencion('');
        setEditEmpleado_admin('');
        setEditCapacidad_maxima('');
        setEditTelefono1('');
        setEditTelefono2('');
        setEditEstado_tienda('');
        setEditEstado_spa('');
        setEditId('');
    }

    const handleEdit = (id) => {
        //alert(id);
        handleShow();
    }

    const handleDelete = (id) => {
        if (window.confirm("Esta seguro que quiere borrar este dato?") == true) {
            alert(id);
        }
    }

    const handleUpdate = () => {
        const url = `http://localhost:49146/api/sucursal/${editId}`;
        const datos = {
            "id" :editId,
            "nombre": editNombre_sucursal,
            "fecha_apertura": editFecha_apertura,
            "capacidad": editCapacidad_maxima,
            "provincia": editProvincia,
            "canton": editCanton,
            "distrito": editDistrito,
            "estado_tienda": editEstado_tienda,
            "estado_spa": editEstado_spa,
        }

    }


    const [modalOpen, setModalOpen] = useState(false);



    return (
        <Fragment>
            <ToastContainer />
            <Container>
                <form>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre_sucursal"
                                name="nombre"
                                value={nombre_sucursal}
                                onChange={(e) => setNombre_sucursal(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Provincia"
                                value={provincia}
                                onChange={(e) => setProvincia(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Canton"
                                value={canton}
                                onChange={(e) => setCanton(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Distrito"
                                value={distrito}
                                onChange={(e) => setDistrito(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="fecha_apertura"
                                value={fecha_apertura}
                                onChange={(e) => setFecha_apertura(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Capacidad"
                                value={capacidad_maxima}
                                onChange={(e) => setCapacidad_maxima(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Estado Tienda"
                                value={estado_tienda}
                                onChange={(e) => setEstado_tienda(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Estado Spa"
                                value={estado_spa}
                                onChange={(e) => setEstado_spa(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <button
                                className="btn btn-primary"
                                onClick={() => dataPOST()}
                            >Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>

            <div className="general">
                <Table striped bordered hover className="tabla">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre Sucursal</th>
                            <th>Provincia</th>
                            <th>Canton</th>
                            <th>Distrito</th>
                            <th>Fecha de apertura</th>
                            <th>Horario Atencion</th>
                            <th>Administrador </th>
                            <th>Capacidad</th>
                            <th>Telefono1</th>
                            <th>Telefono2</th>
                            <th>ETienda</th>
                            <th>ESpa</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ? data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.provincia}</td>
                                        <td>{item.canton}</td>
                                        <td>{item.distrito}</td>
                                        <td>{item.fecha_apertura}</td>
                                        <td>{item.horario_atencion}</td> {/* No esta */}
                                        <td>{item.empleado_admin}</td> {/* No esta */}
                                        <td>{item.capacidad}</td>
                                        <td>{item.telefono1}</td> {/* No esta */}
                                        <td>{item.telefono2}</td> {/* No esta */}
                                        <td>{item.estado_tienda}</td>
                                        <td>{item.estado_spa}</td>
                                        <td colSpan={2}>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleEdit(item.id)}
                                            >Editar</button> &nbsp;
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(item.id)}
                                            >Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })
                                :
                                'Loading...'
                        }
                    </tbody>
                </Table>

                <button onClick={handleShow} className='button-27'>Agregar un registro</button>
            </div>


            


            {/*<Modal show={show} onHide={handleClose}>
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
                                value={editNombre_sucursal}
                                onChange={(e) => setEditNombre_sucursal(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                value={editProvincia}
                                onChange={(e) => setEditProvincia(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Canton</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Canton"
                                value={editCanton}
                                onChange={(e) => setEditCanton(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Distrito</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Distrito"
                                value={editDistrito}
                                onChange={(e) => setEditDistrito(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha de apertura</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Fecha de apertura"
                                value={editFecha_apertura}
                                onChange={(e) => setEditFecha_apertura(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Horario Atencion</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Horario Atencion"
                                value={editHorario_atencion}
                                onChange={(e) => setEditHorario_atencion(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Administrador</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Administrador"
                                value={editEmpleado_admin}
                                onChange={(e) => setEditEmpleado_admin(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Capacidad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Capacidad"
                                value={editCapacidad_maxima}
                                onChange={(e) => setEditCapacidad_maxima(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono1"
                                value={editTelefono1}
                                onChange={(e) => setEditTelefono1(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono2"
                                value={editTelefono2}
                                onChange={(e) => setEditTelefono2(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Modal> */}

        </Fragment>
    )
}

export default SucursalesAPI;