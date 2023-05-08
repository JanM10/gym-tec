import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarPrueba from "../components/NavbarPrueba";
import ModalEmpleados from "../components/GEmpleados/ModalEmpleados";
import TablaEmpleados from "../components/GEmpleados/TablaEmpleados";

const GEmpleados = () => {

    const [empleados, setEmpleados] = useState([]);
    const [puestos, setPuestos] = useState({});
    const [sucursales, setSucursales] = useState({});
    const [planilla, setPlanilla] = useState({});

    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarEmpleados = async () => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:49146/api/empleado');
                const data = await response.json();
                setEmpleados(data);
                console.log(data);
                
                //Obtener descripciones de puestos
                const puestoResponse = await fetch('http://localhost:49146/api/puesto');
                const puestosData = await puestoResponse.json();
                const puestosMap = {};
                puestosData.forEach((puestos) => {
                    puestosMap[puestos.id] = puestos.descripcion;
                });
                setPuestos(puestosMap);

                //Obtener descripciones de sucursales
                const sucursalesRespone = await fetch('http://localhost:49146/api/sucursal');
                const sucursalesData = await sucursalesRespone.json();
                const sucursalesMap = {};
                sucursalesData.forEach((sucursales) => {
                    sucursalesMap[sucursales.id] = sucursales.nombre;
                });
                setSucursales(sucursalesMap);

                //Obtener descripciones de planilla
                const planillaRespone = await fetch('http://localhost:49146/api/planilla');
                const planillaData = await planillaRespone.json();
                const planillaMap = {};
                planillaData.forEach((planilla) => {
                    planillaMap[planilla.id] = planilla.descripcion;
                });
                setPlanilla(planillaMap);

                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        mostrarEmpleados()
    }, [])

    //Metodo POST
    const guardarEmpleados = async (puesto) => {

        const datosEmpleados = await fetch("http://localhost:49146/api/empleado", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (datosEmpleados.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEmpleados();
        }
    }

    //Metodo PUT
    const editarEmpleados = async (puesto) => {

        const datosEmpleados = await fetch("http://localhost:49146/api/empleado", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (datosEmpleados.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEmpleados();
        }
    }

    //Metodo DELETE
    const eliminarEmpleados = async (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const datosEmpleados = await fetch("http://localhost:49146/api/empleado/" + id, {
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (datosEmpleados.ok) {
            mostrarEmpleados();
        }
    }

    return (
        <>
            <NavbarPrueba />
            <ToastContainer />
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <h5>Gestión de Empleados</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar puesto</Button>
                                <hr />
                                <TablaEmpleados
                                    dataEmpleado={empleados}
                                    dataPuesto={puestos}
                                    dataSucursal={sucursales}
                                    dataPlanilla={planilla}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarEmpleados={eliminarEmpleados}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalEmpleados
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarEmpleados={guardarEmpleados}
                    editar={editar}
                    setEditar={setEditar}
                    editarEmpleados={editarEmpleados}
                />
            </Container>
        </>
    )
}

export default GEmpleados