import { Button, Table } from "react-bootstrap";

const TablaPuestos = ({ data, setEditar, mostrarModal, setMostrarModal }) => {

    const enviarDatos = (puesto) => {
        setEditar(puesto)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Descripción</th>
                    {/* <th>Puestos</th> */}
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
                                {/* <td>{item.puestos}</td> */}
                                <td>
                                    <Button
                                     variant="primary"
                                      size="sm"
                                       className="me-2"
                                       onClick={() => enviarDatos(item)}
                                       >Editar</Button>
                                    <Button variant="danger" size="sm">Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaPuestos