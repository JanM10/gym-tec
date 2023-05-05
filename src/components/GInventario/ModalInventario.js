import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloInventario = {
    id: 0,
    tipo: "",
    marca: "",
    numero_serie: null,
    costo: null,
    asignacion: null,
}

const ModalInventario = ({ mostrarModal, setMostrarModal, guardarInventario, editar, setEditar, editarInventario }) => {

    const [inventario, setInventario] = useState(modeloInventario);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setInventario(
            {
                ...inventario,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (inventario.id == 0) {
            guardarInventario(inventario)
        } else {
            editarInventario(inventario)
        }

        setInventario(modeloInventario);
    }

    useEffect(() => {
        if (editar != null) {
            setInventario(editar)
        } else {
            setInventario(modeloInventario)
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
                {inventario.id == 0 ? "Nuevo inventario" : "Editar inventario"} 
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tipo"
                            name="tipo"
                            onChange={(e) => actualizarDato(e)} value={inventario.tipo}
                        />
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Marca"
                            name="marca"
                            onChange={(e) => actualizarDato(e)} value={inventario.marca}
                        />
                        <Form.Label>Numero de serie</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Numero de serie"
                            name="numero_serie"
                            onChange={(e) => actualizarDato(e)} value={inventario.numero_serie}
                        />
                        <Form.Label>Costo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Costo"
                            name="costo"
                            onChange={(e) => actualizarDato(e)} value={inventario.costo}
                        />
                        <Form.Label>Asignacion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Asignacion"
                            name="asignacion"
                            onChange={(e) => actualizarDato(e)} value={inventario.asignacion}
                        />
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

export default ModalInventario