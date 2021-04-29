import React from 'react'
import { useHistory } from 'react-router-dom';

export const NavBarPublic = () => {
  const history = useHistory();

  const loginConnect = () =>{
    history.push("/loginConnect");
  }  
  const register = () =>{
    history.push("/register");
  }  
  const home = () =>{
    history.push("/");
  } 

  return (  
    <>  
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom_ct">
        <div className="container-fluid">
          <img id="logo" src="../../assets/image/chiletraderslogosinfondo.png" className="navbar_image" alt="Chile Traders"  onClick={home} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
            <form className="d-flex">
              <button className="btn btn-light" type="button" onClick={loginConnect} style={{margin:"4px"}}><i className="bi bi-plus"></i> Crear Tema </button>
              <button className="btn btn-primary" type="button" onClick={register} style={{margin:"4px"}}><i className="bi bi-person-plus-fill"></i> Registrarse  </button>
              <button className="btn btn-info" type="button" onClick={loginConnect} style={{margin:"4px"}}><i className="bi bi-person-circle"></i> Ingresar </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div className="mt-5"></div>
    </>
  )
}

