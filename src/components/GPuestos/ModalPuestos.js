import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloPuesto = {
    id: 0,
    descripcion: "",
}

const ModalPuestos = ({ mostrarModal, setMostrarModal, guardarPuesto, editar, setEditar, editarPuesto }) => {

    const [puesto, setPuesto] = useState(modeloPuesto);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setPuesto(
            {
                ...puesto,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (puesto.id == 0) {
            guardarPuesto(puesto)
        } else {
            editarPuesto(puesto)
        }

        setPuesto(modeloPuesto);
    }

    useEffect(() => {
        if (editar != null) {
            setPuesto(editar)
        } else {
            setPuesto(modeloPuesto)
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
                Nuevo Puesto
                {/*{puesto.id == 0 ? "Nuevo puesto" : "Editar puesto"} */}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion"
                            name="descripcion"
                            onChange={(e) => actualizarDato(e)} value={puesto.descripcion} />
                    </FormGroup>
                    {/*<FormGroup>
                    <Label>Puesto</Label>
                    <Input />
                </FormGroup> */}
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button variant="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPuestos