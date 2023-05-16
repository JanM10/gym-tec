import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/LoginEmpleado.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const LoginEmpleado = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const usenavigate = useNavigate();


    const CryptoJS = require("crypto-js");

    function encryptPassword(password) {
        const encryptedPassword = CryptoJS.MD5(password).toString();
        return encryptedPassword;
    }

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:49146/api/empleado/" + correo).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp[0].correo)
                console.log(resp[0].password)
                if (Object.keys(resp).length === 0) {
                    toast.error('Por favor ingrese un correo valida');
                } else {
                    if (resp[0].password === encryptPassword(password)) {
                        toast.success('Login exitoso');
                        usenavigate('/Puestos')
                    } else {
                        toast.error('Credenciales incorrectas');
                    }
                }
            }).catch((err) => {
                toast.error('Login failed due to: ' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (correo === '' || correo === null) {
            result = false;
            toast.warning('Por favor ingrese un usuario');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Por favor ingrese una password');
        }
        return result;
    }

    return (
        <div className="page_e">
            <form onSubmit={ProceedLogin} className="cover_e">
                <label htmlFor="correo" className="login_label_e">Correo</label>
                <input value={correo} onChange={(e) => setCorreo(e.target.value)}
                    type="text"
                    placeholder="Inserte su correo"
                    id="correo"
                    name="correo"
                    className="login_input_e"></input>

                <label htmlFor="Password" className="login_label_e">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="login_input_e"></input>

                <button type="submit" className="login_btn_e">Log In</button>
            </form>
        </div>
    )
}