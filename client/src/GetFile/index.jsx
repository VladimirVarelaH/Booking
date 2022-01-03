import React from "react";
import axios from 'axios';

import Header from "../Header/index.jsx";


function Donlowder(){

    const route = 'http://192.168.100.24:5000';
    return(
        <div>
            <Header/>
            <hr />
            <h1>Solicita el registro de las reservas aquí</h1>
            <a href={route+'/get'}>Click Aquí</a>
        </div>
    )
}

export default Donlowder;
