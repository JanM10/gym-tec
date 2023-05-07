import { Button, Table } from "react-bootstrap";

const TablaTSpa = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarTSpa }) => {

    const enviarDatos = (TSpa) => {
        setEditar(TSpa)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tratamiento</th>
                    <th>Sucursal Asociada</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.id_sucursal}</td>
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
                                      onClick={() => eliminarTSpa(item.id)}
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

export default TablaTSpa