import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net/js/jquery.dataTables';

import '../styles/GestionEqui.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const GestionEquipo = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        $(tableRef.current).DataTable({
            language: {
                search: 'Buscar:',
                previous: 'Anterior',
                next: 'Siguiente',
            },
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <table ref={tableRef} className="display" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345</td>
                                <td>Cinta de corre</td>
                                <td>Cinta para correr y hacer cardio</td>
                            </tr>
                            <tr>
                                <td>13579</td>
                                <td>Bicicletas estacionaria</td>
                                <td>Bicicleta para quemar graga y hacer cardio</td>
                            </tr>
                            <tr>
                                <td>97653</td>
                                <td>Multigimnasios</td>
                                <td>Varios ejercicios</td>
                            </tr>
                            <tr>
                                <td>87304</td>
                                <td>Remos</td>
                                <td>Ejercicio triceps</td>
                            </tr>
                            <tr>
                                <td>87492</td>
                                <td>Pesas</td>
                                <td>Ejercicos espalda y triceps</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default GestionEquipo;
