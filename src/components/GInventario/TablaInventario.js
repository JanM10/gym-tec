import { Button, Table } from "react-bootstrap";

const TablaInventario = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarInventario }) => {

    const enviarDatos = (puesto) => {
        setEditar(puesto)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Marca</th>
                    <th>Numero Seire</th>
                    <th>Costo</th>
                    <th>Asignacion</th>
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
                            <tr key={item.id}>
                                <td>{item.tipo}</td>
                                <td>{item.marca}</td>
                                <td>{item.numero_serie}</td>
                                <td>{item.costo}</td>
                                <td>{item.asignacion}</td>
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
                                      onClick={() => eliminarInventario(item.id)}
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