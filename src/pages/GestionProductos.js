import React from "react";
import DataTable from "react-data-table-component";
import '..//..//node_modules/bootstrap/dist/css/bootstrap.min.css';

const GestionProductos = () => {

    const tablaProductos = [

        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Terapia', Código: '1233', Descripción: 'Masajes', Costos: '5000' },
        { Nombre: 'Proteina', Código: '1233', Descripción: 'Proteina en polvo', Costos: '10000' },
        { Nombre: 'Coca Cola', Código: '2222', Descripción: 'Bebida', Costos: '2500' },
        { Nombre: 'Agua', Código: '111', Descripción: 'Bebida', Costos: '2300' }];

    const columnas = [
        {
            name: 'Nombre',
            selector: 'Nombre',
            sortable: true
        },
        {
            name: 'Código',
            selector: 'Código',
            sortable: true
        },
        {
            name: 'Descripción',
            selector: 'Descripción',
            sortable: true
        },
        {
            name: 'Costo',
            selector: 'Costos',
            sortable: true
        }
    ];
    const paginacionOpciones = {
        rowsPerPageText: 'Filas por Página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'todos'

    }

    return (
        <div className="table-responsive">
            <DataTable
                columns={columnas}
                data={tablaProductos}
                title='Productos por sucursal'
                pagination
                paginationComponentOptions={paginacionOpciones}
            />{/*paginationComponent={paginacionOpciones} Este tira error*/}
        </div>
    )


}


export default GestionProductos;