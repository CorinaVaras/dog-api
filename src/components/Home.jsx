import React, { Component } from 'react';
import '../App.css'
import NavBar from './NavBar'

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <div className='container_home'>
                <h1>Componente home</h1>
            </div>
            </div>
        );
    }
}

export default Home;