import React, {useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import Input from './components/input.jsx';
import Button from "./components/button.jsx";
import Header from "../Header/index.jsx";

import './style.css'

function Form(){
    const params = useParams();
    console.log(params.actividad);


    const [form_data, setData] = useState({name:'',last_name:'', date:'', qtty:'', activitie:params.actividad, email:''})

    function changeHandler(event){
        console.log(event.target.value, event.target.name)
        let data = {... form_data};
        data[event.target.name] = event.target.value;

        setData(data)
    }
    function sendHandler(event){
        event.preventDefault();
        const axios = require('axios');
        const route = 'http://192.168.100.24:5000'
        axios.post(route+"/create_booking",form_data
        ).then(res=>{
            console.log('Solicitud realizada')
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
        console.log(form_data)
    }

    return (
        <div>
            <Header/>
            <hr />
            <h1>Agenda tu actividad!</h1>
            <form>
                <Input name='activitie' type='text' placeholder='Actividad' handler={changeHandler} value={params.actividad}/>
                <Input name='date' type='date' placeholder='Fecha de Reserva' handler={changeHandler}/>
                <Input name='name' type='text' placeholder='Nombre' handler={changeHandler}/>
                <Input name='last_name' type='text' placeholder='Apellido' handler={changeHandler}/>
                <Input name='email' type='email' placeholder='Email' handler={changeHandler}/>
                <Input name='qtty' type='number' placeholder='Cantidad' handler={changeHandler}/>

                <Button handler={sendHandler} text='send'/>
            </form>
        </div>
    )
}

export default Form;