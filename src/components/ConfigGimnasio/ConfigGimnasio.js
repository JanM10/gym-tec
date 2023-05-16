import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import NavbarPrueba from '../NavbarPrueba'
import TratamientoSpa from './TratamientoSpa';

/*
function change_register() {
    window.location = "Register"
}
*/

const ConfigGimnasio = () => {
    return (
        <>
            <NavbarPrueba />
            <div className='container-fluid bg-secondary min-vh-100'>
                <div className='row'>
                    <div className='col-2 bg-white vh-100'>
                        <Sidebar />
                    </div>
                </div>
                <div className='col-auto'>
<TratamientoSpa />
                </div>
            </div>
        </>
    )
}

export default ConfigGimnasio