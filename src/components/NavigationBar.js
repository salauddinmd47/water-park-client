import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo1.png'
const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
             
          </Nav> */}
          <Nav className='ms-auto'>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             About us
            </Nav.Link>
            <Button>Login</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;