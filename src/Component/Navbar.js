import React from 'react'
import { Nav } from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap';

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
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">My Portfolio</Nav.Link>
      <Nav.Link href="#deets">About Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}

export default Navigation