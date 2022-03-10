 /*eslint-disable */
 
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

  const handleInfoUsuario = () => {
    const miPerfil = dispatch(starLoadingUsuarioById(auth.uid));
    Swal.fire({
      title: '<div className="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
      text: 'Espere un momento.',
      showConfirmButton: false,
      allowOutsideClick: false,
          willOpen : () => {
              Swal.showLoading();
          }
    });
    miPerfil.then(r => {
      Swal.close();
      history.push("/miPerfil");
    })
  }
  const home = () =>{
    history.push("/");
  } 

  return (
    <>
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
    <a className="navbar-brand cursorPointer" onClick={home} >
    <img src="../../assets/image/peugeot_ico.png" alt="" width="30" height="24"></img> Gafa repuesto 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#" onClick={handleInfoUsuario} ><i className="bi bi-person-check" > Mi Perfil</i></a>

    </li>
    <li class="nav-item">
    <a class="nav-link" href="#" onClick={salirApp} ><i className="bi bi-power"> Cerrar sesión</i></a>
    </li>
    </ul>
    </div>
    </div>
  </nav>
</header>
      <div className="mt-4"></div>
    </>
  )
}