import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarPublic = () => {
  
  return (
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
            < hr />
            <Nav.Link as={Link} to="/register" ><i className="bi bi-person-plus-fill"></i> Registrarse </Nav.Link>
            <Nav.Link as={Link} to="/loginConnect" ><i className="bi bi-person-circle"></i> Iniciar sesión </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        

      </Navbar>

    </div>

  )
}

