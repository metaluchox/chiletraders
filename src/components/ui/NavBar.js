import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { starLoadingUsuario, starLoadingUsuarioById } from '../../actions/user';
import { temaLogout } from "../../actions/temas";

import Swal from 'sweetalert2';


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

  const handleListUser = () =>{
    dispatch(starLoadingUsuario());
    setTimeout(() => {
        history.push("/listaUsuario");
    }, 500);
  }  
  
  return (
    <>

<div className="container">
  <div className="row">

       <div className="col-lg-12">
         
      <Navbar className="navbar-custom_ct fixed-top text-center" variant="dark" expand="sm">
        <Navbar.Brand as={Link} to="/">

         <img id="logo" src="../../assets/image/chiletraderslogosinfondo.png"
          width="270px"
          alt="Chile Traders" 
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/crearTema" ><i className="bi bi-mic-fill"></i> Crear Tema</Nav.Link>
            <hr/>
            <Nav.Link onClick={handleInfoUsuario}><i className="bi bi-person-check"></i> Mi Perfil</Nav.Link>
              {
                (auth.admin === true) && <Nav.Link onClick={handleListUser}><i className="bi bi-people"></i> Usuarios</Nav.Link>
              }
              
            <Nav.Link  onClick={salirApp}><i className="bi bi-power"> Cerrar sesión</i> </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      </div>
      </div>

    </>
  )
}

