import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import Swal from 'sweetalert2';


export const NavBar = () => {

  const {uid}  = useSelector( state => state.auth );

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
        history.push("/login");
      }
    })


  }


  
  return (
    <>


       <div className="col-lg-12">
         
      <Navbar className="navbar-custom_ct fixed-top" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">

         <img id="logo" src="../../assets/image/chiletraderslogosinfondo.png"
          width="270px"
          alt="Chile Traders" 
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/ruler" ><i className="bi bi-cup-straw"></i> Reglas</Nav.Link>
            <NavDropdown title="Temas" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/listarTema" ><i className="bi bi-mic-fill"></i> Crear </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crearTema" ><i className="bi bi-mic-fill"></i> Listar </NavDropdown.Item>
            </NavDropdown>
            <hr/>
            <Nav.Link as={Link} to={`/miPerfil/${uid}`}><i className="bi bi-person-check"></i> Perfil</Nav.Link>
            <Nav.Link  onClick={salirApp}><i className="bi bi-power"> Cerrar sesión</i> </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  )
}

