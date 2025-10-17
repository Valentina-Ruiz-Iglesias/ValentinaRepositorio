import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    return (
        <Container className="py-5">
            <Row className="align-items-center min-vh-100">
                <Col lg={6}>
                    <h1 className="display-4 fw-bold mb-4">
                        Hola, mi nombre es [TU NOMBRE].
                    </h1>
                    <p className="lead mb-4">
                        Soy diseñadora y me apasiona crear experiencias visuales atractivas y funcionales.
                        Bienvenida/o a mi portafolio.
                    </p>
                </Col>
                <Col lg={6} className="text-center">
                    <Image
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Foto de perfil"
                        roundedCircle
                        fluid
                        className="shadow"
                        style={{ maxWidth: '400px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;