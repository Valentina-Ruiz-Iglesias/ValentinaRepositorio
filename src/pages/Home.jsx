import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container className="py-5">
            <Row className="text-center">
                <Col>
                    {/* Imagen de perfil */}
                    <div className="text-center mb-4">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjcFQ32ODfvHWiA0PyZ2q80lpA3cr74Hiy8IWEWEsobJImtO90BLvfObZj6U-GWINhKYyG9LBItr9YVRfo1eDf9Qrng4FXtWoo1ST-FbkiKpT_GaKycnd_hvxF4S_LPSH5dK2tusV0zfXbNOvFUeuP3vDPVfKL-T8tRH_7rRDK50_GroSRzKjTpIhFjtUU_W4nhv0FC-9Urvt2c-AakxQFflZ8u5a3vFburBacX5P8MeN2bkT3qt86B1ZE_2YG42aaaE5RfBbglic"
                            alt="Valentina Ruiz - Ingeniera en informatica"
                            roundedCircle
                            style={{
                                width: '160px',
                                height: '160px',
                                objectFit: 'cover',
                                border: '4px solid rgba(0, 121, 107, 0.3)'
                            }}
                            className="mb-4"
                        />
                    </div>

                    {/* Nombre y descripción */}
                    <h1 className="display-4 fw-bold mb-3 text-dark">
                        Valentina Ruiz
                    </h1>
                    <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Bienvenida a mi portafolio. Soy una Estudiante de ingenieria en informatica,
                        me apasiona la ciberseguridad y el desarrollo web
                        Mi objetivo es crear soluciones digitales simples y efectivas.
                    </p>

                    {/* Botones */}
                    <div className="mt-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="me-3 mb-2"
                            href="#portafolio"
                        >
                            Ver Portafolio
                        </Button>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            className="mb-2"
                            href="#sobre-mi"
                        >
                            Sobre Mí
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* Sección Sobre Mí */}
            <Row id="sobre-mi" className="mt-5 pt-5">
                <Col lg={8} className="mx-auto">
                    <h2 className="h3 fw-bold mb-4 text-center">Sobre Mí</h2>
                    <div className="text-center">
                        <p className="text-muted mb-3">
                            Soy diseñadora y me apasiona crear experiencias visuales atractivas y funcionales.
                            Con experiencia en diseño de interfaces, experiencia de usuario y branding.
                        </p>
                        <p className="text-muted">
                            Mi enfoque combina estética visual con usabilidad, siempre pensando en las necesidades
                            del usuario final y los objetivos del negocio.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;