import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./pages/LoginCliente";
import { Register } from "./pages/Register";
import GestionProductos from "./pages/GestionProductos";
import SearchComponent from "./pages/SearchComponent";
import GestionPuestos from "./pages/GestionPuestos";
import NavbarPrueba from "./components/NavbarPrueba";
import GestionServicios from "./pages/GestionServicios";
import GestionInventario from "./pages/GestionInventario";
import GestionTSpa from "./pages/GestionTSpa";
import Sidebar from "./components/ConfigGimnasio/Sidebar";
import ConfigGimnasio from "./components/ConfigGimnasio/ConfigGimnasio";
import GestionPlanillas from "./pages/GestionPlanillas";
import GestionTEquipo from "./pages/GestionTEquipo";
import GeneracionPlanilla from "./pages/GeneracionPlanillav2";
import CopiarGimnasio from "./pages/copiarGimnasio";
import GEmpleados from "./pages/GEmpleados";
import GSucursales from "./pages/GSucursales";
import TratamientoSpa from "./components/ConfigGimnasio/TratamientoSpa";

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*
      

      <GestionProductos />

      <ConfigGimnasio />

      <NavbarPrueba />

      <GestionPuestos />
      
      <GeneracionPlanilla />

      <GSucursales />
      
  */

  return (
    <>
    <ToastContainer theme="colored"/>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Sucursales" element={<GSucursales />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Puestos" element={<GestionPuestos />} />
          <Route path="/Servicios" element={<GestionServicios />} />
          <Route path="/Inventario" element={<GestionInventario />} />
          <Route path="/TSpa" element={<GestionTSpa />} />
          <Route path="/ConfigGimnasio" element={<ConfigGimnasio />} />
          <Route path="/TratamientoSpa" element={<TratamientoSpa />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;