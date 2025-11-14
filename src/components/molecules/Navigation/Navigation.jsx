import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                {/* Logo y marca */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <div className="text-primary me-2" style={{ width: '24px', height: '24px' }}>
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="fw-bold text-dark">Diseñadora</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={location.pathname === '/' ? 'text-primary fw-bold' : 'text-muted'}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/portafolio"
                            className={location.pathname === '/portafolio' ? 'text-primary fw-bold' : 'text-muted'}
                        >
                            Portafolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contacto"
                            className={location.pathname === '/contacto' ? 'text-primary fw-bold' : 'text-muted'}
                        >
                            Contacto
                        </Nav.Link>

                        {/* Botón Contrátame */}
                        <Button
                            variant="primary"
                            className="ms-3"
                            as={Link}
                            to="/contacto"
                        >
                            Contrátame
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
;