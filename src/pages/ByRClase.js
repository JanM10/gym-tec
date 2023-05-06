import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

let datosSemana1 = [
    "Yoga", "Indoor Cycling", "Yoga", "Pilates", "Boxeo", "Karate", "Vacío"
]

let datosSemana2 = [
    "Pilates", "Boxeo", "Boxeo", "Yoga", "Karate", "Indoor Cycling", "Natación"
]

const datosFalsos = [
    { fecha: '2023-01-03', valor: 'Tarea 1' },
    { fecha: '2023-01-04', valor: 'Tarea 2' },
    { fecha: '2023-01-05', valor: 'Tarea 3' },
    { fecha: '2023-01-06', valor: 'Tarea 4' },
    { fecha: '2023-01-07', valor: 'Tarea 5' },
    { fecha: '2023-01-08', valor: 'Tarea 6' },
    { fecha: '2023-01-09', valor: 'Tarea 7' },
    { fecha: '2023-01-10', valor: 'Tarea 8' },
    { fecha: '2023-01-17', valor: 'Tarea 9' },
    { fecha: '2023-01-18', valor: 'Tarea 10' },
    { fecha: '2023-01-19', valor: 'Tarea 11' },
    { fecha: '2023-01-20', valor: 'Tarea 12' },
    { fecha: '2023-01-21', valor: 'Tarea 13' },
    { fecha: '2023-01-22', valor: 'Tarea 14' },
    { fecha: '2023-01-23', valor: 'Tarea 15' },
    { fecha: '2023-01-24', valor: 'Tarea 16' },
    { fecha: '2023-01-31', valor: 'Tarea 17' },
    { fecha: '2023-02-01', valor: 'Tarea 18' },
    { fecha: '2023-05-02', valor: 'Tarea 19' },
    { fecha: '2023-05-03', valor: 'Tarea 20' },
    { fecha: '2023-05-04', valor: 'Tarea 21' },
    { fecha: '2023-05-05', valor: 'Tarea 22' },
    { fecha: '2023-05-06', valor: 'Tarea 23' },
    { fecha: '2023-05-07', valor: 'Tarea 24' },
    { fecha: '2023-05-14', valor: 'Tarea 25' },
    { fecha: '2023-05-15', valor: 'Tarea 26' },
    { fecha: '2023-05-16', valor: 'Tarea 27' },
    { fecha: '2023-05-17', valor: 'Tarea 28' },
    { fecha: '2023-05-18', valor: 'Tarea 29' },
    { fecha: '2023-05-19', valor: 'Tarea 30' },
    { fecha: '2023-05-20', valor: 'Tarea 31' },
    { fecha: '2023-05-21', valor: 'Tarea 32' },
];


const Calendario = () => {
    const [semanaOrigen, setSemanaOrigen] = useState(null);
    const [semanaDestino, setSemanaDestino] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [datos, setDatos] = useState([]);

    // Función para cargar los datos del calendario desde la base de datos
    const cargarDatos = async () => {
        // Aquí debes implementar la lógica para obtener los datos desde tu tabla de SQL
        // Puedes utilizar librerías como Axios o Fetch para realizar la consulta a la base de datos
        // Una vez obtenidos los datos, debes guardarlos en el estado "datos"
        setDatos(datosFalsos)
    };
  

    // Función para copiar el contenido de la semana origen a la semana destino
    const copiarSemana = (semanaOrigen, semanaDestino) => {
        //console.log(semanaOrigen)
        //console.log(semanaDestino);
        if (semanaOrigen==="semana1" && semanaDestino==="semana2"){
            datosSemana2=datosSemana1;
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
        return <td>{valor}</td>;
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
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Semana 1</td>
                        {renderCelda(datosSemana1[0])}
                        {renderCelda(datosSemana1[1])}
                        {renderCelda(datosSemana1[2])}
                        {renderCelda(datosSemana1[3])}
                        {renderCelda(datosSemana1[4])}
                        {renderCelda(datosSemana1[5])}
                        {renderCelda(datosSemana1[6])}
                        <td>
                            <Button variant="secondary" onClick={() => mostrarModal('semana1')}>
                                Copiar
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Semana 2</td>
                        {renderCelda(datosSemana2[0])}
                        {renderCelda(datosSemana2[1])}
                        {renderCelda(datosSemana2[2])}
                        {renderCelda(datosSemana2[3])}
                        {renderCelda(datosSemana2[4])}
                        {renderCelda(datosSemana2[5])}
                        {renderCelda(datosSemana2[6])}
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
                    <Button variant="primary" onClick={() => copiarSemana(semanaOrigen,semanaDestino)} disabled={!semanaOrigen || !semanaDestino}>
                        Copiar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Calendario;