import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">

            <Container>
                <Link className='navbar-brand' to='/'>Variety.PK</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link btn-outline-light'>Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}