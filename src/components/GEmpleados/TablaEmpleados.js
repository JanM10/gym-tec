import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaEmpleados = ({ dataEmpleado, dataPuesto, dataSucursal, dataPlanilla, setEditar, mostrarModal, setMostrarModal, eliminarEmpleados }) => {

    const enviarDatos = (empleados) => {
        setEditar(empleados)
        setMostrarModal(!mostrarModal)
    }

    return (
        <>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido1</th>
                        <th>Apellido2</th>
                        <th>Provincia</th>
                        <th>Canton</th>
                        <th>Distrito</th>
                        <th>Puesto</th>
                        <th>Sucursal</th>
                        <th>Tipo de planilla</th>
                        <th>Salario</th>
                        <th>Correo</th>
                        <th>Password</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (dataEmpleado.length < 1) ? (
                            <tr>
                                <td colSpan="14">Sin registros</td>
                            </tr>
                        ) : (
                            dataEmpleado.map((item) => (
                                <tr key={item.cedula}>
                                    <td>{item.cedula}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido1}</td>
                                    <td>{item.apellido2}</td>
                                    <td>{item.provincia}</td>
                                    <td>{item.canton}</td>
                                    <td>{item.distrito}</td>
                                    <td>{dataPuesto[item.id_sucursal]}</td> {/* id */}
                                    <td>{dataSucursal[item.id_sucursal]}</td> {/* nombre */}
                                    <td>{dataPlanilla[item.id_planilla]}</td> {/* descripcion */}
                                    <td>{item.salario}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.password}</td>
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
                                            onClick={() => eliminarEmpleados(item.cedula)}
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

export default TablaEmpleados