import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarPublic = () => {
  
  return (
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
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/register" ><i className="bi bi-person-circle"></i> Registrarse </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loginConnect" ><i className="bi bi-person-circle"></i> Iniciar session </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        

      </Navbar>

    </div>

  )
}

