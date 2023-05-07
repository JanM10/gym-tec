import { Button, Table } from "react-bootstrap";

const TablaInventario = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarInventario }) => {

    const enviarDatos = (inventario) => {
        setEditar(inventario)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Numero Serie</th>
                    <th>Tipo de equipo</th>
                    <th>Marca</th>
                    <th>Costo</th>
                    <th>Sucursal</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="5">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.serie}>
                                <td>{item.serie}</td> {/*numero_serie*/}
                                <td>{item.id_equipo}</td> {/*Tipo*/}
                                <td>{item.marca}</td>
                                <td>{item.costo}</td>
                                <td>{item.id_sucursal}</td> {/*asignacion*/}
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
                                        onClick={() => eliminarInventario(item.serie)}
                                    >Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaInventario