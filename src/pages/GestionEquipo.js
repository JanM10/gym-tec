import React from "react";
import MaterialTable from 'material-table';
import DataTable from "react-data-table-component";

const GestionProductos=() =>{

const columnas=[
{
title:'ID',
field:'Id',
type:'numeric'
},{

    title:'Nombre',
    field:'Nombre'
},{
    title:'Descripción',
    field:'Descripción'

  },

];

const data=[

{Id:1254, Nombre:'Bicicleta',Descripción:'Cardio'},
{Id:1264, Nombre:'Bicicleta',Descripción:'Cardio'},
{Id:1284, Nombre:'Bicicleta',Descripción:'Cardio'},
{Id:1294, Nombre:'Bicicleta',Descripción:'Cardio'},
{Id:1204, Nombre:'Bicicleta',Descripción:'Cardio'},

];

return (

    <div>
        <MaterialTable
        columns={columnas}
        data={data}
        title="Equipo Disponible"
        actions={[


          {
              icon:'editar',
              tooltip: 'editar Equipo',
              onclick: (event, rowData)=>alert('has presionado editar equipo:'+rowData.equipo)

          }, {
              icon:'eliminar',
              tooltip: 'eliminar equipo',
              onclick: (event, rowData)=>window.confirm('Estas seguro de querer eliminar este equipo:'+rowData.equipo)

          } ]}
              
        />
    </div>
);

}

export default GestionEquipo;
