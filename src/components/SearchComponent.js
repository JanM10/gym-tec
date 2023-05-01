
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SearchComponent =()=>{

    const [users, setUser] = useState([])
    const [search, setSearch] = useState("")

    // Traer datos API
    const URL ='https://jsonplaceholder.typicode.com/user'
    const showData = async ()=>{
        const response = await fetch (URL)
        const data = await response.json()
        console.log(data)
    }
    showData()
    //Metodo filtrado

    //funcion busqueda

    // renderizar vista
    return (

        <div>SearchComponent</div>
    )


}

export default SearchComponent