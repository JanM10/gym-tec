import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'

/*
function change_register() {
    window.location = "Register"
}
*/

const ConfigGimnasio = () => {
    return (
        <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row'>
                <div className='col-2 bg-white vh-100'>
                    <Sidebar />
                </div>
                <div className='col-auto'>

                </div>
            </div>
        </div>
    )
}

export default ConfigGimnasio