import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarPrueba from "../components/NavbarPrueba";
import TablaInventario from "../components/GInventario/TablaInventario";
import ModalInventario from "../components/GInventario/ModalInventario";

const GestionInventario = () => {

    const [inventario, setInventario] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarInventario = async () => {

        const response = await fetch("") //CAMBIAR LA URL

        if (response.ok) {
            const data = await response.json();
            setInventario(data)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarInventario()
    }, [])

    //Metodo POST
    const guardarInventario = async (puesto) => {

        const response = await fetch("", { //CAMBIAR LA URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarInventario();
        }
    }

    //Metodo PUT
    const editarInventario = async (puesto) => {

        const response = await fetch("", { //CAMBIAR LA URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarInventario();
        }
    }

    //Metodo DELETE
    const eliminarInventario = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("" + id, { //CAMBIAR LA URL
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (response.ok) {
            mostrarInventario();
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
                                <h5>Gestión de inventario</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar puesto</Button>
                                <hr />
                                <TablaInventario
                                    data={inventario}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarInventario={eliminarInventario}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalInventario
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarInventario={guardarInventario}
                    editar={editar}
                    setEditar={setEditar}
                    editarInventario={editarInventario}
                />
            </Container>
        </>
    )
}

export default GestionInventario