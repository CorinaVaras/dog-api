import React, { Component } from "react";
import NavBar from "./NavBar";
import "../App.css";
import "../assets/css/Home.css";
import buscar from "../assets/img/buscar.svg";
import random from "../assets/img/random.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tags: [],
      dataFilter: [],
      allData: [],
    };

    this.getData();
  }

  getData = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let result = Object.keys(data.message).map(function (raza) {
          let subRazas = Object.values(data.message[raza]).map(function (
            subRaza
          ) {
            return { name: subRaza };
          });
          return { name: raza, sub: subRazas };
        });

        let allDogs = [];

        result.map((item) => {
          fetch(`https://dog.ceo/api/breed/${item.name}/images`)
            .then((data) => {
              return data.json();
            })
            .then((data) => {
              let dog = { name: item.name, img: data.message[0] };

              this.setState((previousState) => ({
                dataFilter: [...previousState.dataFilter, dog],
                allData: [...previousState.allData, dog],
              }));
            });

          item.sub.map((sub) => {
            fetch(`https://dog.ceo/api/breed/${sub.name}/images`)
              .then((data) => {
                return data.json();
              })
              .then((data) => {
                let subDog = { name: sub.name, img: data.message[0] };

                this.setState((previousState) => ({
                  dataFilter: [...previousState.dataFilter, subDog],
                  allData: [...previousState.allData, subDog],
                }));
              });
          });
        });

        this.setState({
          allData: allDogs,
          data: result,
        });

        console.log(">>>" + JSON.stringify(this.state.allData));
      });
  };

  // evento al input checkbox
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

    this.filterData();
  };

  filterData = () => {
    let currentAllData = this.state.allData;

    if (this.state.tags.length == 0) {
      this.setState({
        dataFilter: this.state.allData,
      });
    } else {
      const result = currentAllData.filter((element) => {
        return this.state.tags.includes(element.name);
      });

      this.setState({
        dataFilter: result,
      });
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container-texto">
          <h1 className="title">Encuentra tu mascota ideal aquí</h1>
          <p className="titletwo">La que haga mach con tu personalidad!!!</p>
        </div>
        <div className="container_home">
          {/* CAJA DE LAS RAZAS */}
          <div className="test">
            <div className="raza">
              <p className="titleRaza">Razas</p>
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
          </div>
          {/* CAJA DE LA SUB RAZA */}
          <div className="test">
            <div className="raza">
              <p className="titleRaza">Sub-Razas</p>
              <hr />
              <form
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid gray",
                  padding: 5,
                  marginTop: 5,
                }}>
                <img className="buscar" src={buscar} />
                <input
                  className="Search"
                  type="search"
                  placeholder="Buscar una raza..."
                />
              </form>
              <div className="container-dogs">
                {this.state.data.map((dogs) =>
                  dogs.sub.map((sub) => (
                    <label key={sub.name} className="containerSelection">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <input
                          onChange={(event) => this.handleChange(event)}
                          type="checkbox"
                          name={sub.name}
                        />{" "}
                        {sub.name}
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>
          </div>
          {/* CAJA DONDE SE MUESTRAN LOS PERROS CON IMAGENES */}
          <div className="test">
            <div className="DogsContainer">
              {this.state.dataFilter.map((item) => {
                return (
                  <div className="card-dogs">
                    {item.img == "B" ? (
                      <img
                        style={{ width: "110px", height: "110px" }}
                        src={random}
                      />
                    ) : (
                      <img
                        style={{ width: "110px", height: "110px" }}
                        src={item.img}
                      />
                    )}
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
