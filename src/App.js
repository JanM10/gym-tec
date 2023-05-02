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
import GestionEquipo from "./pages/GestionEquipo";




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
    
    <div className="container-fluid">
    <h2 className='text-center'>React Search</h2>
     <GestionEquipo />     
   </div>
  );
}

export default App;