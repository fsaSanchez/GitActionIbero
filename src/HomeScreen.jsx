import React, { useState } from "react";
import './HomeScreen.css'


export const HomeScreen = ({ setIsLoggedIn }) => {
  const [info, setInfo] = useState("");

  const handleSubmit = async () => {
    const response = await AxiosManager.sendRequest(
      "get",
      "http://localhost:8089/Api-sitio1/api/Sitio1/GetSitio1"
    );
    setInfo(response.data);
  };

  const handleSubmit2 = async () => {
    const response = await AxiosManager.sendRequest(
      "get",
      "http://localhost:8090/Api-sitio2/api/Sitio2/GetSitio2"
    );
    setInfo(response.data);
  };

  const handleLogout = () => {
    const success = AxiosManager.logout();
    if (success) {
      setIsLoggedIn(false);
    } else {
      console.log("Logout failed");
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/IBERO_Ciudad_de_M%C3%A9xico.png"
              height="70px"
              width="160px"
            />
            <h1>Portal Único Ibero</h1>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
       
        <i className="fas fa-sign-out-alt largeIcon" onClick={handleLogout}  />

        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 search-section">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="¿Qué estás buscando?"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 divider" />
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="services-title text-center">Mostrando a EG Curiel</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-2">
          <div className="service-icon" onClick={handleSubmit}>
            <a
              href="#"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">Sitio 1</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon" onClick={handleSubmit2}>
            <a
              href="#"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">Sitio 2</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon" >
            <a
              href="link3.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link4.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link5.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link6.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="services-title text-center">Servicios ABC</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link1.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link2.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link3.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link4.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link5.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="service-icon">
            <a
              href="link6.html"
              className="d-flex flex-column align-items-center"
            >
              <i className="fas fa-random fa-3x" />
              <span className="icon-text">NombreIcono</span>
            </a>
          </div>
        </div>
      </div>

      {info && (
        <div className="mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Información del servidor</h5>
              <p className="card-text">{info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
