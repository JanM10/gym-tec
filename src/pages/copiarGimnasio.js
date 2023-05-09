import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

let datosSemana1 = [  { tratamientos: ["Masaje relajante, Masaje Fuerte"], productos: ["Cosas random"], clases: ["Yoga"]}
];


let datosSemana2 = [  { tratamientos: ["Masaje relajante"], productos: ["Cosas random"], clases: ["Indoor Cycling"]}
];


const CopiarGimnasio = () => {
    const [semanaOrigen, setSemanaOrigen] = useState(null);
    const [semanaDestino, setSemanaDestino] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [datos, setDatos] = useState([]);

    // Función para cargar los datos del calendario desde la base de datos
    const cargarDatos = async () => {
        // Aquí debes implementar la lógica para obtener los datos desde tu tabla de SQL
        // Puedes utilizar librerías como Axios o Fetch para realizar la consulta a la base de datos
        // Una vez obtenidos los datos, debes guardarlos en el estado "datos"
        //setDatos(datosFalsos)
    };


    // Función para copiar el contenido de la semana origen a la semana destino
    const copiarSemana = (semanaOrigen, semanaDestino) => {
        if (semanaOrigen === "semana1" && semanaDestino === "semana2") {
            datosSemana2 = datosSemana1;
        } else if (semanaOrigen === "semana2" && semanaDestino === "semana1") {
            datosSemana1 = datosSemana2;
        }
          
        // Aquí debes implementar la lógica para copiar los datos de la semana origen a la semana destino
        // Puedes utilizar un bucle for para recorrer los días de la semana origen y asignar sus valores a los días correspondientes de la semana destino
        // Una vez realizada la copia, debes actualizar el estado "datos" con los nuevos valores
        setModalAbierto(false); // Cierra el modal luego de realizar la copia
    };


    useEffect(() => {
        cargarDatos(); // Carga los datos del calendario al montar el componente
    }, []);

    // Función para mostrar el modal de copiar semana
    const mostrarModal = (semana) => {
        if (semana) {
            setSemanaOrigen(semana); // Guarda la semana origen en el estado correspondiente
            setSemanaDestino(null); // Reinicia la semana destino
        }
        setModalAbierto(true); // Abre el modal
    };

    // Función para renderizar las celdas del calendario
    const renderCelda = (dia) => {
        // Aquí debes implementar la lógica para obtener el valor correspondiente al día de la semana y la fecha actual desde el estado "datos"
        // Puedes utilizar un bucle for para buscar el valor correspondiente en el array de datos
        const valor = dia; // Define la variable "valor" con el valor correspondiente al día de la semana
        return <td>{valor}</td>
    };

    useEffect(() => {
        cargarDatos();
    }, []);


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Tratamientos Spa</th>
                        <th>Productos</th>
                        <th>Clases</th>
                        {/* <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Semana 1</td>
                        {renderCelda(datosSemana1[0].tratamientos)}
                        {renderCelda(datosSemana1[0].productos)}
                        {renderCelda(datosSemana1[0].clases)}
                        <td>
                            <Button variant="secondary" onClick={() => mostrarModal('semana1')}>
                                Copiar
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Semana 2</td>
                        {renderCelda(datosSemana2[0].tratamientos)}
                        {renderCelda(datosSemana2[0].productos)}
                        {renderCelda(datosSemana2[0].clases)}
                        <td>
                            <Button variant="secondary" onClick={() => mostrarModal('semana2')}>
                                Copiar
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Modal show={modalAbierto} onHide={() => setModalAbierto(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Copiar semana</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Semana origen</Form.Label>
                            <Form.Control as="select" value={semanaOrigen} onChange={(e) => setSemanaOrigen(e.target.value)}>
                                <option value="" disabled>
                                    Seleccione una semana
                                </option>
                                <option value="semana1">Semana 1</option>
                                <option value="semana2">Semana 2</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Semana destino</Form.Label>
                            <Form.Control as="select" value={semanaDestino} onChange={(e) => setSemanaDestino(e.target.value)}>
                                <option value="" disabled>
                                    Seleccione una semana
                                </option>
                                <option value="semana1">Semana 1</option>
                                <option value="semana2">Semana 2</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalAbierto(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => copiarSemana(semanaOrigen, semanaDestino)} disabled={!semanaOrigen || !semanaDestino}>
                        Copiar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CopiarGimnasio;