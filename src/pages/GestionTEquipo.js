import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavbarPrueba from "../components/NavbarPrueba";
import ModalEquipo from "../components/GTipoEquipo/ModalEquipo";
import TablaEquipo from "../components/GTipoEquipo/TablaEquipo";

const GestionTEquipo = () => {

    const [equipos, setEquipo] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarEquipo = async () => {

        const response = await fetch("http://localhost:49146/api/equipo")

        if (response.ok) {
            const data = await response.json();
            setEquipo(data)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarEquipo()
    }, [])

    //Metodo POST
    const guardarEquipo = async (equipo) => {

        const response = await fetch("http://localhost:49146/api/equipo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(equipo)
        })
        toast.success("Dato añadido con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEquipo();
        }
    }

    //Metodo PUT
    const editarEquipo = async (equipo) => {

        const response = await fetch("http://localhost:49146/api/equipo", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(equipo)
        })
        toast.success("Dato editado con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEquipo();
        }
    }

    //Metodo DELETE
    const eliminarEquipo = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("http://localhost:49146/api/equipo/" + id, {
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (response.ok) {
            mostrarEquipo();
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
                                <h5>Gestión de equipos</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar equipo</Button>
                                <hr />
                                <TablaEquipo
                                    data={equipos}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarEquipo={eliminarEquipo}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalEquipo
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarEquipo={guardarEquipo}
                    editar={editar}
                    setEditar={setEditar}
                    editarEquipo={editarEquipo}
                />
            </Container>
        </>
    )
}

export default GestionTEquipo;