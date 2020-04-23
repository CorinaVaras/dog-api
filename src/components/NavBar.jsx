import React, { Component } from "react";
import "../assets/css/NavBar.css";
import logo from "../assets/img/LOGOdog.png";
import menu from "../assets/img/menuIcon.png";
import { findByLabelText } from "@testing-library/react";

class NavBar extends Component {
  
  render() {
    return <>
     <header>
       
        <div className='logoMenu-container'>
        <label htmlFor="toggle"><img style={{width: '40px', height:'40px'}} alt="menuIcon" src={menu}/></label>
        </div>
        <input type="checkbox" id="toggle" />
        
          <nav className="nav-links">
    
            <img className="logo" alt="logoMoov" src={logo} href="#"/>

            <div>
            <ul>
              <div className='containerElemt'> 
              <div><li>Alimentación</li></div>
              </div>

              <div className='containerElemt'>
              <div href="#Favorities"><li>Salud</li></div>
              </div>

              <div className='containerElemt'>
              <div href="#About"><li>Curiosidades</li></div>
              </div>
            </ul>
            </div>
          </nav>
      </header>
    </>;
  }
}

export default NavBar;

{
  /* <header>
          <nav className="nav-links">
            <div className="containerLogo">
              <img style={{ width: 65, height: 65 }} src={logo} />
            </div>

            <div className="containerLinks">
              <a className="links">Curiosidades</a>
              <a className="links">Salud</a>
              <a className="links">Alimentación</a>
            </div>
          </nav>
        </header> */
}
