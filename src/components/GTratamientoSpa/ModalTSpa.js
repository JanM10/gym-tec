import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloTSpa = {
    id: 0,
    tratamiento: "",
}

const ModalTSpa = ({ mostrarModal, setMostrarModal, guardarTSpa, editar, setEditar, editarTSpa }) => {

    const [TSpa, setTSpa] = useState(modeloTSpa);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setTSpa(
            {
                ...TSpa,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (TSpa.id == 0) {
            guardarTSpa(TSpa)
        } else {
            editarTSpa(TSpa)
        }

        setTSpa(modeloTSpa);
    }

    useEffect(() => {
        if (editar != null) {
            setTSpa(editar)
        } else {
            setTSpa(modeloTSpa)
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
                {TSpa.id == 0 ? "Nuevo TSpa" : "Editar TSpa"} 
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Tratamiento</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tratamiento"
                            name="tratamiento"
                            onChange={(e) => actualizarDato(e)} value={TSpa.tratamiento} />
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

export default ModalTSpa