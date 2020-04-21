import React, { Component } from 'react';
import NavBar from './NavBar'
import '../App.css'
import '../assests/css/Home.css';
import buscar from '../assests/img/buscar.svg'

class Home extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <div className='container_home'>
            <div style={{paddingLeft: '2em'}}>
            <h1 className='title'>Encuentra tu mascota ideal</h1>
            <div className='titleTwo'>
            <p>Busca aquí tu mascota ideal, la que haga mach con tu personalidad...</p>
            </div>
            {/* <div className='container_form'>
            <form style={{display:'flex', alignItems:'center'}}>
                <img className='buscar'src={buscar}/>
                <input className='Search' type="search" placeholder="Buscar una raza..." />
            </form>
            </div> */}
            <div className='raza'>
            <p className='titleRaza'>Raza</p>
            <hr/>    
            <form style={{display:'flex', alignItems:'center', border: '1px solid gray', padding: 5, marginTop: 5 }}>
                <img className='buscar'src={buscar}/>
                <input className='Search' type="search" placeholder="Buscar una raza..." />
            </form>
            <label className='containerSelection'>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <input type="checkbox"/> Chiguagua
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <input type="checkbox"/> Poodle
                </div>
            </label>

            </div>
    


            </div>
            </div>
            </>
        );
    }
}

export default Home;