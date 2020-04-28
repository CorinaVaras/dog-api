import React, { Component } from "react";
import "../assets/css/NavBar.css";
import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menuIcon.png";


class NavBar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="logoMenu-container">
            <label htmlFor="toggle">
              <img
                style={{ width: "40px", height: "40px" }}
                alt="menuIcon"
                src={menu}
              />
            </label>
          </div>
          <input type="checkbox" id="toggle" />

          <nav className="nav-links">
            <div className="container-logo">
              <img className="logo" alt="logoMoov" src={logo} href="#" />
            </div>

            <div>
              <ul>
                <div className="containerElemt">
                  <div>
                    <li>Alimentación</li>
                  </div>
                </div>

                <div className="containerElemt">
                  <div href="#Favorities">
                    <li>Salud</li>
                  </div>
                </div>

                <div className="containerElemt">
                  <div href="#About">
                    <li>Curiosidades</li>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
