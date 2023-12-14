// NavBar.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/NavBar.css';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className=''>
                <Navbar.Brand href="#" className="navbar-brand">Logo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
