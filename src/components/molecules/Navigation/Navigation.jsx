import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Mi Portafolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/portafolio"
                            className={location.pathname === '/portafolio' ? 'active' : ''}
                        >
                            Portafolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contacto"
                            className={location.pathname === '/contacto' ? 'active' : ''}
                        >
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;