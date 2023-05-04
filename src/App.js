import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Sucursales } from "./pages/Sucursales";
import { Modal } from "./components/Modal";
import SucursalesAPI from "./pages/SucursalesAPI";
import GestionProductos from "./pages/GestionProductos";
import SearchComponent from "./pages/SearchComponent";

import ModalPrueba from "./components/ModalPrueba";
import GestionPuestos from "./pages/GestionPuestos";
import NavbarPrueba from "./components/NavbarPrueba";
import GestionServicios from "./pages/GestionServicios";

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
        </Routes>
      </Router>

      <div className="container-fluid">
    <h2 className='text-center'>React Search</h2>
     <SearchComponent />     
   </div>

      <NavbarPrueba />
      <GestionPuestos />
      
  */


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Puestos" element={<GestionPuestos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;