import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarPrueba from "../components/NavbarPrueba";
import TablaTSpa from "../components/GTratamientoSpa/TablaTSpa";
import ModalTSpa from "../components/GTratamientoSpa/ModalTSpa";

const GestionTSpa = () => {

    const [inventario, setTSpa] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarTSpa = async () => {

        const response = await fetch("http://localhost:49146/api/tratamientos_spa")

        if (response.ok) {
            const data = await response.json();
            setTSpa(data)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarTSpa()
    }, [])

    //Metodo POST
    const guardarTSpa = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/tratamientos_spa", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarTSpa();
        }
    }

    //Metodo PUT
    const editarTSpa = async (puesto) => {

        const response = await fetch("http://localhost:49146/api/tratamientos_spa", { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarTSpa();
        }
    }

    //Metodo DELETE
    const eliminarTSpa = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("http://localhost:49146/api/tratamientos_spa/" + id, { 
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (response.ok) {
            mostrarTSpa();
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
                                <h5>Gestión de Tratamiento de Spa</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar puesto</Button>
                                <hr />
                                <TablaTSpa
                                    data={inventario}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarTSpa={eliminarTSpa}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalTSpa
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarTSpa={guardarTSpa}
                    editar={editar}
                    setEditar={setEditar}
                    editarTSpa={editarTSpa}
                />
            </Container>
        </>
    )
}

export default GestionTSpa