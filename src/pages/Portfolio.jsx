import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Diseño de App Móvil",
            description: "Aplicación móvil para gestión de tareas con interfaz intuitiva y moderna.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 2,
            title: "Web Corporativa",
            description: "Sitio web responsive para empresa de tecnología con diseño clean y profesional.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 3,
            title: "Branding Personal",
            description: "Identidad visual completa para influencer digital, incluyendo logo y paleta de colores.",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    return (
        <Container className="py-5">
            <h1 className="text-center display-4 fw-bold mb-5">Mi Portafolio</h1>
            <Row>
                {projects.map(project => (
                    <Col key={project.id} lg={4} md={6} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={project.image}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    {project.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;