import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

const modeloPuesto = {
    id: 0,
    descripcion: "",
}

const ModalPuestos = ({ mostrarModal, setMostrarModal, guardarPuesto, editar, setEditar, editarPuesto }) => {

    const [puesto, setPuesto] = useState(modeloPuesto);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setPuesto(
            {
                ...puesto,
                [e.target.name]: e.target.value
            }
        )
    }

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