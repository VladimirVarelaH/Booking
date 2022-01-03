import React from "react";
import './style.css';
import {Link} from 'react-router-dom';

import Header from "../Header";

import lake from './assets/lago.jpg';
import kayac from './assets/kayac.jpeg';
import long from './assets/long.jpeg';
import cabaña from './assets/cabaña.jpeg';
import comida from './assets/comida.jpeg';

function MyIndex(){
    return(
        <main>
            <Header/>
            <hr />
            <section id='first_section'>
                <img src={lake} alt=""/>
                <div>
                    <h1>Budi Lafken <span>Mapu</span></h1>
                    <p>
                        Actividades y atractivos vinculados a las comunidades
                        Mapuche/Lafkenche del sector y provee servicios complementarios 
                        a la oferta turística del territorio con guías hablantes de 
                        Mapudungün, pequeños artesanos y productores locales.
                    </p>
                </div>
            </section>
            <hr />
            <section id="long_section">
                <img src={long} alt="" />
            </section>
            <hr />
            <section id='card_section'>

                <div className="card my_card" >
                    <div class="card-body">
                        <h5 class="card-title">Gastronomía Millaray</h5>
                        <p class="card-text">Preparación de platos típicos con recetas propias del pueblo mapuche, se encuentra en el sector de Piedra Alta</p>
                        <Link to='/gastronomia'>
                            <a class="btn btn-primary">Reservar</a>
                        </Link>
                    </div>
                    <img src={comida} className="card-img-top" alt="..."/>
                </div>

                <div className="card my_card" >
                    <div class="card-body">
                        <h5 class="card-title">Cabañas Tía Elsa</h5>
                        <p class="card-text">Servicio de alojamiento en el sector de Playa Maule con vista al mar y estacionamiento privado.</p>
                        <Link to='/cabañas'>
                            <a class="btn btn-primary">Reservar</a>
                        </Link>
                    </div>
                    <img src={cabaña} className="card-img-top" alt="..."/>
                </div>

                <div className="card my_card" >
                    <div class="card-body">
                        <h5 class="card-title">Circuito Lago Budi</h5>
                        <p class="card-text">Experiencia que permite disfrutar de la variedad de aves y fauna que nos ofrece este lago</p>
                        <Link to='/kayac'>
                            <a class="btn btn-primary">Reservar</a>
                        </Link>
                    </div>
                    <img src={kayac} className="card-img-top" alt="..."/>
                </div>
            </section>

        </main>
    )
}
export default MyIndex;
// style="width: 18rem;"