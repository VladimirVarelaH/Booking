import { Link } from "react-router-dom";
import React from "react";


import './style.css';
import logo from './assets/logo.jpeg';
import data from './assets/data.jpeg';

function Header(){
    return(
        <header>
            <Link to='/'>
                <img src={logo}/>
            </Link>
            <img src={data}/>
        </header>
    )
}

export default Header;