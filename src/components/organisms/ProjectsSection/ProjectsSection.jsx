import React from 'react';

const PROJECTS = [
    {
        id: 1,
        title: 'PocketCardsDB',
        badge: 'Proyecto mas reciente',
        featured: true,
        description:
            'PocketCardsDB es una base de datos de Pokemon Pocket TCG para gestionar el juego de cartas intercambiables (TCG). Centraliza toda la información sobre cartas, sobres, colecciones y expansiones, permitiendo consultar rareza, edición y probabilidades de aparición.',
        tech: ['Python', 'SQL', 'Analisis de datos'],
        features: [
            'Búsqueda por Tipo y Generacion',
            'Simulacion de apertura de sobres',
            'Rating de aparicion cada carta',
        ],
    },
    {
        id: 2,
        title: 'Edutech SPA',
        badge: 'Proyecto terminado',
        featured: true,
        description:
            'Sistema creado para realizar una migracion de sistema monolitico a sistema de microservicios.',
        tech: ['HateOAS', 'SQL', 'SpringWeb'],
        features: [
            'Distribucion de servicios',
            'Optimizacion del rendimiento',
            'Aumento de disponibilidad',
            'Mejora en la escalabilidad',
        ],
    },
    {
        id: 3,
        title: 'Primer portfolio',
        badge: 'Próximamente',
        comingSoon: true,
        description:
            'Primer portfolio web desarrollado durante el curso Fullstack II.',
        tech: ['HTML', 'CSS', 'JavaScript'],
    },
];

const ProjectsSection = () => (
    <div className="section">
        <h2>Mis Proyectos</h2>

        <div className="projects-grid">
            {PROJECTS.map((project) => (
                <div
                    key={project.id}
                    className={`project-card ${project.featured ? 'featured' : ''}`.trim()}
                >
                    <div className="project-header">
                        <h3>{project.title}</h3>
                        <span
                            className={`project-badge ${
                                project.comingSoon ? 'coming-soon' : ''
                            }`.trim()}
                        >
              {project.badge}
            </span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                        {project.tech.map((t) => (
                            <span key={t} className="tech-tag">
                {t}
              </span>
                        ))}
                    </div>

                    {project.features && (
                        <div className="project-features">
                            <h4>Características:</h4>
                            <ul>
                                {project.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {!project.comingSoon && (
                        <div className="project-links">
                            <a
                                href="https://github.com/Valentina-Ruiz-Iglesias"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                            >
                                📁 Ver Código
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default ProjectsSection;
