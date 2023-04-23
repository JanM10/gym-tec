import React, { useState } from "react";
import "../styles/Register.css";
import "bootstrap/dist/css/bootstrap.min.css"


/* initialForm es la infromacion que se va a enviar al api,
   está vacío ya que es solo un "esqueleto" */
const initialForm = {
    id: null,
    rol: "",
    Cedula: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    edad: "",
    fechaNacimiento: "",
    peso: "",
    IMC: "",
    direccion: "",
    correo: "",
    password: "", /*Este debe estar encriptado en MD5 */
};

export const Register = (props) => {
    /* constantes que se utilizan para guardar informacion*/
    const [Cedula, setCedula] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [form, setForm] = useState(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Cedula);
    }

    return (
        <div className="register_page">
            <form onSubmit={handleSubmit} className="register_cover">
                <h1>Crear cuenta</h1>

                {/* Aqui van todos los input donde el Cedula ingresa su informacion */}

                <select className="form-select" name="rol" id="rol">
                    <option disabled selected>Eliga su tipo de cuenta...</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Dependiente">Dependiente de Tienda</option>
                    <option value="Spa">Spa</option>
                    <option value="Cliente">Cliente</option>
                </select>

                <label htmlFor="cedula" className="register_label">Cédula</label>
                <input value={Cedula} onChange={(e) => setCedula(e.target.value)}
                    type="text"
                    placeholder="Ingrese su numero de cédula"
                    id="cedula"
                    name="cedula"
                    className="register_input">
                </input>

                <label htmlFor="nombre" className="register_label">Nombre completo</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre compelto"
                    className="register_input">
                </input>

                <label htmlFor="apellido1" className="register_label">Primer apellido</label>
                <input
                    type="text"
                    name="apellido1"
                    id="apellido1"
                    placeholder="Primer apellido"
                    className="register_input">
                </input>

                <label htmlFor="apellido2" className="register_label">Segundo apellido</label>
                <input
                    type="text"
                    name="apellido2"
                    id="apellido2"
                    placeholder="Segundo apellido"
                    className="register_input">
                </input>

                <label htmlFor="edad" className="register_label">Edad</label>
                <input
                    type="text"
                    name="edad"
                    id="edad"
                    placeholder="Inserte su edad"
                    className="register_input">
                </input>

                <label htmlFor="fecha_nacimiento" className="register_label">Fecha de nacimiento</label>
                <input
                    type="date"
                    name="fecha_nacimiento"
                    id="fecha_nacimiento"
                    placeholder="Fecha de nacimiento"
                    className="register_input">
                </input>

                <label htmlFor="peso" className="register_label">Peso</label>
                <input
                    type="text"
                    name="peso"
                    id="peso"
                    placeholder="Ingrese su peso en kg"
                    className="register_input">
                </input>

                <label htmlFor="IMC" className="register_label">IMC (Indice de masa corporal)</label>
                <input
                    type="number"
                    min="0"
                    max="40"
                    step="0.1"
                    name="IMC"
                    id="IMC"
                    placeholder="Indice de masa corporal"
                    className="register_input">
                </input>

                <label htmlFor="direccion" className="register_label">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    placeholder="Ingrese su dirección"
                    className="register_input">
                </input>

                <label htmlFor="correo" className="register_label">Correo electrónico</label>
                <input
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="ejemplo@gmail.com"
                    className="register_input">
                </input>

                <label htmlFor="Password" className="register_label">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="register_input">
                </input><br />

                <button type="submit" className="register_btn">Registrar</button><br />

                <button onClick={() => props.onFormSwitch('login')} className="loggear_btn">Ya tenes cuenta? Has Login aqui.</button>
            </form>
        </div>
    )
}