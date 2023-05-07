import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaEquipo = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarEquipo }) => {

    const enviarDatos = (equipo) => {
        setEditar(equipo)
        setMostrarModal(!mostrarModal)
    }

    return (
        <>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length < 1) ? (
                            <tr>
                                <td colSpan="3">Sin registros</td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.descripcion}</td>
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
                                            onClick={() => eliminarEquipo(item.id)}
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

export default TablaEquipo