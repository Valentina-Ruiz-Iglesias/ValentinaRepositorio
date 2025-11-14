import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import MainLayout from '../components/templates/MainLayout/MainLayout';

function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('¡Mensaje enviado! Gracias por contactarme.');
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <MainLayout>
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <h1 className="text-center display-4 fw-bold mb-5">Contacto</h1>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Tu nombre completo"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu.email@ejemplo.com"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            placeholder="Escribe tu mensaje aquí..."
                                            required
                                        />
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button variant="primary" type="submit" size="lg">
                                            Enviar Mensaje
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
}

export default Contact;
