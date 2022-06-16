import React from 'react'
import { Nav } from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/portfolio">My Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}

export default Navigation