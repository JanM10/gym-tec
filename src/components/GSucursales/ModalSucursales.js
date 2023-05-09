import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloSucursal = {
    id: 0,
    nombre: "",
    provincia: "",
    canton: "",
    distrito: "",
    fecha_apertura: "",
    horario: "",
    //Empleado admin
    capacidad: "",
    //Numeros de telefono
    estado_spa: "",
    estado_tienda: "",
}

const ModalSucursales = ({ mostrarModal, setMostrarModal, guardarSucursal, editar, setEditar, editarSucursal }) => {

    const [sucursales, setSucursales] = useState(modeloSucursal);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setSucursales(
            {
                ...sucursales,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (sucursales.id == 0) {
            guardarSucursal(sucursales)
        } else {
            editarSucursal(sucursales)
        }
        setSucursales(modeloSucursal);
    }

    useEffect(() => {
        if (editar != null) {
            setSucursales(editar)
        } else {
            setSucursales(modeloSucursal)
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
                {sucursales.id == 0 ? "Nuevo Sucursales" : "Editar Sucursales"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Nombre Sucursal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre Sucursal"
                            name="nombre"
                            onChange={(e) => actualizarDato(e)} value={sucursales.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Provincia"
                            name="provincia"
                            onChange={(e) => actualizarDato(e)} value={sucursales.provincia} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Canton</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Canton"
                            name="canton"
                            onChange={(e) => actualizarDato(e)} value={sucursales.canton} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Distrito</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Distrito"
                            name="distrito"
                            onChange={(e) => actualizarDato(e)} value={sucursales.distrito} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Fecha de apertura</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Fecha de apertura"
                            name="fecha_apertura"
                            onChange={(e) => actualizarDato(e)} value={sucursales.fecha_apertura} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Horario de atención</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Horario de atención"
                            name="horario"
                            onChange={(e) => actualizarDato(e)} value={sucursales.horario} />
                    </FormGroup>
                    {/*
                    <FormGroup>
                        <Form.Label>Empleado Admin</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Empleado Admin"
                            name="horario"
                            onChange={(e) => actualizarDato(e)} value={sucursales.emp_admin} />
                    </FormGroup>
                    SE PUEDE CAMBIAR POR UN SELECT DONDE SALGAN LAS CEDULAS DE LOS EMPLEADOS
                     */}
                    <FormGroup>
                        <Form.Label>Capacidad Máxima</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Capacidad Máxima"
                            name="capacidad"
                            onChange={(e) => actualizarDato(e)} value={sucursales.capacidad} />
                    </FormGroup>
                    {/*
                    <FormGroup>
                        <Form.Label>Primer Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primer Telefono"
                            name="telefono1"
                            onChange={(e) => actualizarDato(e)} value={sucursales.telefono1} />
                    </FormGroup>
                    */}
                    {/*
                    <FormGroup>
                        <Form.Label>Segundo Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Segundo Telefono"
                            name="telefono2"
                            onChange={(e) => actualizarDato(e)} value={sucursales.telefono2} />
                    </FormGroup>
                    */}
                    <FormGroup>
                        <Form.Label>Activación Spa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Capacidad Máxima"
                            name="capacidad"
                            onChange={(e) => actualizarDato(e)} value={sucursales.capacidad} />
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

export default ModalSucursales