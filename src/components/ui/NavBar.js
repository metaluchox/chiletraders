import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

  const history = useHistory();

  const dispatch =useDispatch();

  const salirApp = () =>{

    dispatch( startLogout() );

    history.push("/login");
  }


  
  return (
    <>


       <div className="col-lg-12">
         
      <Navbar className="navbar-custom_ct" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">

         <img id="logo" src="../../assets/image/chiletraderslogosinfondo.png"
          width="270px"
          alt="Chile Traders" 
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="MENU" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/ruler" ><i className="bi bi-cup-straw"></i> Reglas</NavDropdown.Item>  
            <NavDropdown.Item as={Link} to="/ruler" ><i className="bi bi-mic-fill"></i> Crear tema</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/perfil"><i className="bi bi-person-check"></i> Perfil</NavDropdown.Item>
              <NavDropdown.Item  onClick={salirApp}><i className="bi bi-power"> Salir</i> </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  )
}

