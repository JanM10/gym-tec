import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaSucursales = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarSucursal }) => {

    const enviarDatos = (sucursales) => {
        setEditar(sucursales)
        setMostrarModal(!mostrarModal)
    }

    return (
        <>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Canton</th>
                        <th>Distrito</th>
                        <th>Fecha apertura</th>
                        <th>Emp Admin</th>
                        <th>Capacidad</th>
                        <th>Telefono1</th>
                        <th>Telefono2</th>
                        <th>Act Spa</th>
                        <th>Act Tienda</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length < 1) ? (
                            <tr>
                                <td colSpan="13">Sin registros</td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.provincia}</td>
                                    <td>{item.canton}</td>
                                    <td>{item.distrito}</td>
                                    <td>{item.fecha_apertura}</td>
                                    <td>{item.horario}</td>
                                    {/* <td>{item.emp_admin}</td> */}
                                    <td>{item.capacidad}</td>
                                    {/* <td>{item.telefono1}</td> */}
                                    {/* <td>{item.telefono2}</td> */}
                                    <td>{item.estado_spa}</td>
                                    <td>{item.estado_tienda}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => enviarDatos(item)}
                                        >Editar</Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => eliminarSucursal(item.id)}
                                        >Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TablaSucursales