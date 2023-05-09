import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
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
import Calendario from "./pages/ByRClase";

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Puestos" element={<GestionPuestos />} />
          <Route path="/Servicios" element={<GestionServicios />} />
          <Route path="/Inventario" element={<GestionInventario />} />
          <Route path="/TSpa" element={<GestionTSpa />} />
        </Routes>
      </Router>

      <GestionProductos />

      <ConfigGimnasio />

      <NavbarPrueba />

      <GestionPuestos />
      
      <GeneracionPlanilla />

      <GEmpleados />
      
  */

  return (
    <>
      <Calendario/>
    </>
  );
}

export default App;