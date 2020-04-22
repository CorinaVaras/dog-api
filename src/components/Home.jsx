import React, { Component } from "react";
import NavBar from "./NavBar";
import "../App.css";
import "../assests/css/Home.css";
import buscar from "../assests/img/buscar.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getData();
  }

  getData = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        var result = Object.keys(data.message).map(function (key) {
          return { name: key, sub: [data.message[key]] };
        });
      console.log(result);
        this.setState({
          data: result,
        });
      });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container_home">
          <div style={{ marginLeft: "2em" }}>
            <h1 className="title">Encuentra tu mascota ideal</h1>
            <div className="titleTwo">
              <p>
                Busca aquí tu mascota ideal, la que haga mach con tu
                personalidad...
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* Caja de Raza */}
              <div className="raza">
                <p className="titleRaza">Raza</p>
                <hr />
                <form
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid gray",
                    padding: 5,
                    marginTop: 5,
                  }}
                >
                  <img className="buscar" src={buscar} />
                  <input
                    className="Search"
                    type="search"
                    placeholder="Buscar una raza..."
                  />
                </form>
                <div>
                {this.state.data.map((dogs) => {
                  return (
                    
                    <label key={dogs.name} className="containerSelection">
                      <div style={{ display: "flex", flexDirection: "row"}}>
                        <input type="checkbox" /> {dogs.name}
                      </div>
                    </label>
                  );
                })
                }
                </div>
              </div>

              {/* Caja de Sub-Raza */}
              <div className="sub-raza">
                <p className="titleRaza">Sub Raza</p>
                <hr />
                <form
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid gray",
                    padding: 5,
                    marginTop: 5,
                  }}
                >
                  <img className="buscar" src={buscar} />
                  <input
                    className="Search"
                    type="search"
                    placeholder="Buscar una raza..."
                  />
                </form>
                <label className="containerSelection">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <input type="checkbox" /> Chiguagua
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <input type="checkbox" /> Poodle
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
