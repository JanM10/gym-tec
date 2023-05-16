import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function change_register() {
    window.location = "Register"
}

export const Login = () => {
    const [cedula, setCedula] = useState('');
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
            fetch("http://localhost:49146/api/cliente/" + cedula).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp[0].cedula)
                console.log(resp[0].password)
                if (Object.keys(resp).length === 0) {
                    toast.error('Por favor ingrese un cedula valida');
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
        if (cedula === '' || cedula === null) {
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
        <div className="page">
            <form onSubmit={ProceedLogin} className="cover">
                <label htmlFor="cedula" className="login_label">Cédula</label>
                <input value={cedula} onChange={(e) => setCedula(e.target.value)}
                    type="text"
                    placeholder="Inserte su cedula"
                    id="cedula"
                    name="cedula"
                    className="login_input"></input>

                <label htmlFor="Password" className="login_label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="login_input"></input>

                <button type="submit" className="login_btn">Log In</button>

                {/* () => props.onFormSwitch('register') */}
                <button onClick={change_register}
                    className="registrar_btn">No tienes cuenta? Registrate aqui.
                </button>
            </form>

        </div>
    )
}