import React from 'react'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <h2>CHILETRADERS.CL  <i className="bi bi-shuffle"></i></h2>
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
          <Nav >
            <Button className="justify-content-end" variant="outline-light" as={Link} to="/login" block >Login</Button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </>

  )
}

