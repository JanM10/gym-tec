import React from "react";
import "../styles/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

const GestionProductos=() =>{


    const tablaProductos =[

        {Nombre: 'Terapia', Código:'1233', Descripción:'Masajes', Costos:'5000'}];
        
        const columnas =[
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
        const paginacionOpciones={
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
        paginationComponent={paginacionOpciones}
        /> 
        
        </div>)


}


export default GestionProductos;