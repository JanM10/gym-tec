import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const GeneracionPlanilla = () => {
    const [empleados, setEmpleados] = useState([]);
    const [sucursales, setSucursales] = useState({});
    const [planillas, setPlanillas] = useState({});

    let valorMonto=0

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:49146/api/empleado');
                const data = await response.json();
                setEmpleados(data);
                console.log(data);
                
                //Obtener descripciones de sucursal y planilla
                const sucursalResponse = await fetch('http://localhost:49146/api/sucursal');
                const sucursalData = await sucursalResponse.json();
                const sucursalMap = {};
                sucursalData.forEach((sucursal) => {
                    sucursalMap[sucursal.id] = sucursal.nombre;
                });
                setSucursales(sucursalMap);

                const planillaResponse = await fetch('http://localhost:49146/api/planilla');
                const planillaData = await planillaResponse.json();
                const planillaMap = {};
                planillaData.forEach((planilla) => {
                    planillaMap[planilla.id] = planilla.descripcion;
                });
                setPlanillas(planillaMap);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleMontoOptionChange = (salario, planilla) => {
        if (planilla=="Mensual"){
            valorMonto=10000
        }
        return valorMonto
    }

    return (
        <div>
            <h1>Generación de Planilla</h1>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sucursal</th>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Horas de Clases</th>
                            <th>Monto</th>
                            <th>Tipo de Planilla</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado) => (
                            <tr key={empleado.id}>
                                <td>{sucursales[empleado.id_sucursal]}</td>
                                <td>{empleado.cedula}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.horas}</td>
                                <td>
                                {() => handleMontoOptionChange(empleado.salario,planillas[empleado.id_planilla])}
                                </td>
                                <td>{planillas[empleado.id_planilla]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default GeneracionPlanilla;
