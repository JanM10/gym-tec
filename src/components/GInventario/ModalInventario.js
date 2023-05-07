import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloInventario = {
    serie: 0,
    id_equipo: 0,
    marca: "",
    costo: "",
    id_sucursal: 0,
}

/*

ARREGLAR EL CODIGO YA QUE NO FUNCIONA 

*/

const ModalInventario = ({ mostrarModal, setMostrarModal, guardarInventario, editar, setEditar, editarInventario }) => {

    const [inventario, setInventario] = useState(modeloInventario);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        setInventario(
            {
                ...inventario,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (inventario.serie == 0) {    
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
                {inventario.serie == 0 ? "Nuevo inventario" : "Editar inventario"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Numero de serie</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Numero de serie"
                            name="serie"
                            onChange={(e) => actualizarDato(e)} value={inventario.serie}
                        />
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tipo"
                            name="id_equipo"
                            onChange={(e) => actualizarDato(e)} value={inventario.id_equipo}
                        />
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Marca"
                            name="marca"
                            onChange={(e) => actualizarDato(e)} value={inventario.marca}
                        />
                        <Form.Label>Costo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Costo"
                            name="costo"
                            onChange={(e) => actualizarDato(e)} value={inventario.costo}
                        />
                        <Form.Label>Sucursal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Sucursal"
                            name="id_sucursal"
                            onChange={(e) => actualizarDato(e)} value={inventario.id_sucursal}
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