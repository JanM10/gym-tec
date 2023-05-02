import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Sucursales } from "./pages/Sucursales";
import { Modal } from "./components/Modal";
import SucursalesAPI from "./pages/SucursalesAPI";
import GestionProductos from "./pages/GestionProductos";




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
          <Route path="/Sucursales" element={<Sucursales />} />
        </Routes>
      </Router>


      
  */


  return (
    <>
      <SucursalesAPI />
    </>
  );
}

export default App;
