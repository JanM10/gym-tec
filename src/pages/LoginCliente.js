import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

/*
function validation() {
    var user, password;

    user = document.getElementById('Correo').value;
    password = document.getElementById('password').value;

    if (user === "Administrador" && password === "12345") {
        window.location = "Sucursales"
    } else {
        alert("Correo o contraseña incorrectos");
    }
}
*/
function change_register() {
    window.location = "Register"
}


export const Login = () => {
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');

    /*
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add");
        }
    })
    */

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(correo);
    }

    async function login() {
        console.warn(correo, pass)
        let item={correo,pass};
        let result = await fetch("");
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="cover">
                <label htmlFor="Correo" className="login_label">Correo</label>
                <input value={correo} onChange={(e) => setCorreo(e.target.value)}
                    type="text"
                    placeholder="Inserte su Correo"
                    id="Correo"
                    name="Correo"
                    className="login_input"></input>

                <label htmlFor="Password" className="login_label">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="login_input"></input>

                <button type="submit" className="login_btn" onClick={console.log("Si")}>Log In</button>

                {/* () => props.onFormSwitch('register') */}
                <button onClick={change_register} 
                    className="registrar_btn">No tienes cuenta? Registrate aqui.
                </button>
            </form>

        </div>
    )
}