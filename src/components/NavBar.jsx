import React, { Component } from "react";
import "../assests/css/NavBar.css";
import logo from '../assests/img/LOGOdog.png'
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
            <div className='links'>Curiosidades</div>
            <div className='links'>Salud</div>
            <div className='links'>Alimentación</div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
