import React, { Component } from "react";
import NavBar from "./NavBar";
import "../App.css";
import "../assests/css/Home.css";
import buscar from "../assests/img/buscar.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tags: [] };
    this.getData();
  }

  getData = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let razas = Object.keys(data.message).map(function (raza) {
          let subRazas = Object.values(data.message[raza]).map(function (
            subRaza
          ) {
            return { name: subRaza };
          });
          return { name: raza, sub: subRazas };
        });

        this.setState({
          data: razas,
        });
      });
  };

  // evento al input checkbox de las
  handleChange = (event) => {
    const value = event.target.name;

    //Verifica si el elemento selecionado existe en el array
    if (this.state.tags.includes(value)) {
    //Busca el index del elemento en el array
      const index = this.state.tags.indexOf(value);
    //Elimina el elemento en la posicion index
      this.state.tags.splice(index, 1);
    } else {
    //Añade el elemento en caso de que no este
      this.state.tags.push(value);
    }

    this.setState({
      tags: this.state.tags,
    });

    // setTimeout(()=>{
    //     console.log(this.state.tags);
    // },500)
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
                <div className="container-dogs">
                  {this.state.data.map((dogs) => {
                    return (
                      <label key={dogs.name} className="containerSelection">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <input
                            onChange={(event) => this.handleChange(event)}
                            type="checkbox"
                            name={dogs.name}
                          />{" "}
                          {dogs.name}
                        </div>
                      </label>
                    );
                  })}
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
                <div className="container-dogs">
                  {this.state.data.map((dogs) =>
                    dogs.sub.map((subDogs) => (
                      <label key={subDogs.name} className="containerSelection">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <input type="checkbox" /> {subDogs.name}
                        </div>
                      </label>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
