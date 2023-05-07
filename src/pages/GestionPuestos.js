import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import TablaPuestos from "../components/GPuestos/TablaPuestos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPuestos from "../components/GPuestos/ModalPuestos";
import NavbarPrueba from "../components/NavbarPrueba";

const GestionPuestos = () => {

    const [puestos, setPuestos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarPuestos = async () => {

        const response = await fetch("http://localhost:49146/api/puesto") //Aqui va el URL del api

        if (response.ok) {
            const data = await response.json();
            setPuestos(data)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarPuestos()
    }, [])

    //Metodo POST
    const guardarPuesto = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/puesto", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPuestos();
        }
    }

    //Metodo PUT
    const editarPuesto = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/puesto", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPuestos();
        }
    }

    //Metodo DELETE
    const eliminarPuesto = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("http://localhost:49146/api/puesto/" + id, {
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (response.ok) {
            mostrarPuestos();
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
                                <h5>Gestión de Puestos</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar puesto</Button>
                                <hr />
                                <TablaPuestos
                                    data={puestos}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarPuesto={eliminarPuesto}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ModalPuestos
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarPuesto={guardarPuesto}
                    editar={editar}
                    setEditar={setEditar}
                    editarPuesto={editarPuesto}
                />
            </Container>
        </>
    )
}

export default GestionPuestos