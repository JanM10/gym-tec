import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloEmpleados = {
    cedula: 0,
    nombre: "",
    apellido1: "",
    apellido2: "",
    provincia: "",
    canton: "",
    distrito: "",
    id_puesto: "",
    id_sucursal: "",
    id_planilla: "",
    salario: "",
    correo: "",
    password: "",
}

const ModalEmpleados = ({ mostrarModal, setMostrarModal, guardarEmpleados, editar, setEditar, editarEmpleados }) => {

    const [empleados, setEmpleados] = useState(modeloEmpleados);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setEmpleados(
            {
                ...empleados,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (empleados.cedula == 0) {
            guardarEmpleados(empleados)
        } else {
            editarEmpleados(empleados)
        }

        setEmpleados(modeloEmpleados);
    }

    useEffect(() => {
        if (editar != null) {
            setEmpleados(editar)
        } else {
            setEmpleados(modeloEmpleados)
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
                {empleados.cedula == 0 ? "Nuevo empleados" : "Editar empleados"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={(e) => actualizarDato(e)} value={empleados.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Appelido1</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Appelido1"
                            name="apellido1"
                            onChange={(e) => actualizarDato(e)} value={empleados.apellido1} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Apellido2</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido2"
                            name="apellido2"
                            onChange={(e) => actualizarDato(e)} value={empleados.apellido2} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Provincia"
                            name="provincia"
                            onChange={(e) => actualizarDato(e)} value={empleados.provincia} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Canton</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Canton"
                            name="canton"
                            onChange={(e) => actualizarDato(e)} value={empleados.canton} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Distrito</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Distrito"
                            name="distrito"
                            onChange={(e) => actualizarDato(e)} value={empleados.distrito} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Puesto que desempeña</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Puesto que desempeña"
                            name="id_puesto"
                            onChange={(e) => actualizarDato(e)} value={empleados.id_puesto} /> {/*creo que no funciona */}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Sucursal en la que trabaja</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Sucursal en la que trabaja"
                            name="id_sucursal"
                            onChange={(e) => actualizarDato(e)} value={empleados.id_sucursal} /> {/*creo que no funciona */}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Tipo de planilla</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tipo de planilla" 
                            name="id_planilla"
                            onChange={(e) => actualizarDato(e)} value={empleados.id_planilla} /> {/*creo que no funciona */}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Salario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Salario"
                            name="salario"
                            onChange={(e) => actualizarDato(e)} value={empleados.salario} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Correo"
                            name="correo"
                            onChange={(e) => actualizarDato(e)} value={empleados.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => actualizarDato(e)} value={empleados.password} />
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

export default ModalEmpleados