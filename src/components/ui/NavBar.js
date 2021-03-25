import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const NavBar = () => {

  const { user:{name}, dispatch } = useContext(AuthContext)
  const history = useHistory();

  const salirApp = () =>{
    dispatch({
      type: types.logout
  })

    history.push("/login");
  }

  
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
              <NavDropdown.Item href="#action/3.3">Reglas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dc" >DS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/heroes" >Heroes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marvel" >Marvel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/search" >Search</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>          
          <Nav.Link href="#deets">Bienvenido {name}</Nav.Link>
          <Nav.Link  onClick={salirApp} ><i className="bi bi-power"> Salir</i> </Nav.Link>

        </Nav>
      </Navbar>
      </div>
  )
}

