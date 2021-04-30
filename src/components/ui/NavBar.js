import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { starLoadingUsuarioById } from '../../actions/user';
import { temaLogout } from "../../actions/temas";
import Swal from 'sweetalert2';
import './NavBar.css';


export const NavBar = () => {

  const auth  = useSelector( state => state.auth );

  const history = useHistory();

  const dispatch =useDispatch();

  const salirApp = () =>{

    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startLogout() );
        dispatch( temaLogout() );
        history.push("/login");
      }
    })

  }

  const handleInfoUsuario = () =>{
    dispatch(starLoadingUsuarioById(auth.uid));
    setTimeout(() => {
        history.push("/miPerfil");
    }, 500);
  }  

  const crearTema = () =>{
    history.push("/crearTema");
  }  
  const home = () =>{
    history.push("/");
  } 

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom_ct">
          <div className="container-fluid">
            <img id="logo" src="../../assets/image/chiletraderslogosinfondo.png" className="navbar_image pointer" alt="Chile Traders" onClick={home} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
              <form className="d-flex">
                <button className="btn btn-light" type="button" onClick={crearTema} style={{margin:"4px"}}><i className="bi bi-plus"></i> Crear Tema </button>
                <button className="btn btn-primary" type="button" onClick={handleInfoUsuario}  style={{margin:"4px"}}><i className="bi bi-person-check" ></i> Mi Perfil </button>
                <button className="btn btn-danger" type="button" onClick={salirApp}  style={{margin:"4px"}}><i className="bi bi-power"> Cerrar sesión</i></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <div className="mt-4"></div>
    </>
  )
}

