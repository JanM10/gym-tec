import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

let datosSemana1 = [
    { clase: "Yoga", fecha: "2023-05-01" },
    { clase: "Indoor Cycling", fecha: "2023-05-02" },
    { clase: "Yoga", fecha: "2023-05-03" },
    { clase: "Pilates", fecha: "2023-05-04" },
    { clase: "Boxeo", fecha: "2023-05-05" },
    { clase: "Karate", fecha: "2023-05-06" },
    { clase: "Vacío", fecha: "2023-05-07" }
];

let datosSemana2 = [
    { clase: "Pilates", fecha: "2023-05-08" },
    { clase: "Boxeo", fecha: "2023-05-09" },
    { clase: "Boxeo", fecha: "2023-05-10" },
    { clase: "Yoga", fecha: "2023-05-11" },
    { clase: "Karate", fecha: "2023-05-12" },
    { clase: "Indoor Cycling", fecha: "2023-05-13" },
    { clase: "Natación", fecha: "2023-05-14" }
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
        //setDatos(datosFalsos)
    };


    // Función para copiar el contenido de la semana origen a la semana destino
    const copiarSemana = (semanaOrigen, semanaDestino) => {
        //console.log(semanaOrigen)
        //console.log(semanaDestino);
        if (semanaOrigen === "semana1" && semanaDestino === "semana2") {
            datosSemana2 = datosSemana1;
            for (let i = 0; i < datosSemana2.length; i++) {
                let fecha = new Date(datosSemana2[i].fecha);
                fecha.setDate(fecha.getDate() + 7);
                datosSemana2[i].fecha = fecha.toISOString().slice(0, 10);
            }
        } else if (semanaOrigen === "semana2" && semanaDestino === "semana1") {
            datosSemana1 = datosSemana2;
            for (let i = 0; i < datosSemana2.length; i++) {
                let fecha = new Date(datosSemana2[i].fecha);
                fecha.setDate(fecha.getDate() - 7);
                datosSemana2[i].fecha = fecha.toISOString().slice(0, 10);
            }
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
        return <td>{"Clase: " + valor.clase}<br/>{"Fecha: " + valor.fecha}</td>
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
                    <Button variant="primary" onClick={() => copiarSemana(semanaOrigen, semanaDestino)} disabled={!semanaOrigen || !semanaDestino}>
                        Copiar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Calendario;