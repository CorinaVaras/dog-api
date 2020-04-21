import React, { Component } from 'react';
import NavBar from './NavBar'
import '../App.css'
import '../assests/css/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <div className='container_home'>
            <h1 className='title'>Encuentra tu mascota ideal</h1>
            <div className='titleTwo'>
            <p>Busca aquí tu mascota ideal, la que haga mach con tu personalidad...</p>
            </div>
            </div>
            </div>
        );
    }
}

export default Home;