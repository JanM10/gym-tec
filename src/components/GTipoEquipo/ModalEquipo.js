import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloEquipo = {
    id: 0,
    descripcion: "",
}

const ModalEquipo = ({ mostrarModal, setMostrarModal, guardarEquipo, editar, setEditar, editarEquipo }) => {

    const [equipo, setEquipo] = useState(modeloEquipo);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setEquipo(
            {
                ...equipo,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (equipo.id == 0) {
            guardarEquipo(equipo)
        } else {
            editarEquipo(equipo)
        }

        setEquipo(modeloEquipo);
    }

    useEffect(() => {
        if (editar != null) {
            setEquipo(editar)
        } else {
            setEquipo(modeloEquipo)
        }
    }, [editar])

    // Se cierra el modal
    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal show={mostrarModal} >
            <ModalHeader>
                {equipo.id == 0 ? "Nuevo equipo" : "Editar equipo"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion"
                            name="descripcion"
                            onChange={(e) => actualizarDato(e)} value={equipo.descripcion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button variant="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalEquipo