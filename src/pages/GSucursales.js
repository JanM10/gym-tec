import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarPrueba from "../components/NavbarPrueba";
import TablaSucursales from "../components/GSucursales/TablaSucursales";
import ModalSucursales from "../components/GSucursales/ModalSucursales";

const GSucursales = () => {

    const [sucursales, setSucursales] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarSucursales = async () => {

        const response = await fetch("http://localhost:49146/api/sucursal") //Aqui va el URL del api

        if (response.ok) {
            const data = await response.json();
            setSucursales(data)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarSucursales()
    }, [])

    //Metodo POST
    const guardarSucursal = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/sucursal", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarSucursales();
        }
    }

    //Metodo PUT
    const editarSucursal = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/sucursal", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarSucursales();
        }
    }

    //Metodo DELETE
    const eliminarSucursal = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("http://localhost:49146/api/sucursal/" + id, {
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (response.ok) {
            mostrarSucursales();
        }
    }


    return (
        <>
            <NavbarPrueba />
            <ToastContainer />
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <h5>Gestión de Sucursales</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar puesto</Button>
                                <hr />
                                <TablaSucursales
                                    data={sucursales}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarSucursal={eliminarSucursal}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalSucursales
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarSucursal={guardarSucursal}
                    editar={editar}
                    setEditar={setEditar}
                    editarSucursal={editarSucursal}
                />
            </Container>
        </>
    )
}

export default GSucursales