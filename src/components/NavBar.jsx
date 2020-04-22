import React, { Component } from "react";
import "../assests/css/NavBar.css";
import logo from '../assests/img/LOGOdog.png'
import menu from '../assests/img/menuIcon.png'
import { findByLabelText } from "@testing-library/react";

class NavBar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className='nav-links'>
            <div className='containerLogo'>
            <img style={{width:65, height:65}}src={logo}/>    
            </div>

            

            <div className='containerLinks'>  
            <a className='links'>Curiosidades</a>
            <a className='links'>Salud</a>
            <a className='links'>Alimentación</a>

            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;

