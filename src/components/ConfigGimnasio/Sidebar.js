import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '..//..//styles/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='bg-white p-2'>
        <div className='m-2'>
            <i></i>
            <span className='brand-name fs-4'>Configuracion de gimnasio</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <Link to='/TratamientoSpa' className='list-group-item py-2' >
                <i className='bi bi-calendar-plus fs-5 me-3'></i>
                <span className='fs-5'>Tratamientos</span>
            </Link>
            <a className='list-group-item py-2'>
                <i className='bi bi-cart-check fs-5 me-3'></i>
                <span className='fs-5'>Productos</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-basket2 fs-5 me-3'></i>
                <span className='fs-5'>Asociación de Inventario</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-bicycle fs-5 me-3'></i>
                <span className='fs-5'>Crear Clases</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar