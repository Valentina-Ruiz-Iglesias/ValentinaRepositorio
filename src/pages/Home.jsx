import React, { useState } from 'react';
import '../styles/global.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState('feed');

    return (
        <div className="twitter-profile">
            {/* Header - Perfil */}
            <header className="profile-header">
                <div className="profile-info">
                    <h1 className="profile-name">Valentina Ruiz Iglesias</h1>
                    <p className="profile-tagline">"El éxito es caer siete veces y levantarse ocho"</p>
                    <p className="profile-bio">Estudiante de Ingeniería en Informática · Ciberseguridad · Frontend Developer</p>
                </div>
            </header>

            {/* Navegación - Pestañas */}
            <nav className="profile-nav">
                <button
                    className={`nav-item ${activeSection === 'feed' ? 'active' : ''}`}
                    onClick={() => setActiveSection('feed')}
                >
                    Feed
                </button>
                <button
                    className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveSection('about')}
                >
                    About
                </button>
                <button
                    className={`nav-item ${activeSection === 'content' ? 'active' : ''}`}
                    onClick={() => setActiveSection('content')}
                >
                    Content
                </button>
                <button
                    className={`nav-item ${activeSection === 'guestbook' ? 'active' : ''}`}
                    onClick={() => setActiveSection('guestbook')}
                >
                    Guestbook
                </button>
            </nav>

            {/* Contenido de las secciones */}
            <main className="profile-content">
                {activeSection === 'feed' && (
                    <div className="section">
                        <h2>Mi Actividad Reciente</h2>
                        <p>Próximamente: updates sobre mis proyectos y aprendizaje...</p>
                    </div>
                )}

                {activeSection === 'about' && (
                    <div className="section">
                        <h2>Sobre Mí</h2>

                        <div className="about-content">
                            <div className="about-text">
                                <p>
                                    Me encuentro estudiando ingeniería en Informática, me gusta la ciberseguridad
                                    y el desarrollo frontend. Mi meta es contribuir a la creacion de
                                    soluciones tecnologicas seguras, funcionales y amigables que ayuden y contribuyan
                                    a la sociedad.
                                </p>
                            </div>

                            <div className="skills-section">
                                <h3>Tecnologías & Lenguajes</h3>
                                <div className="skills-grid">
                                    <div className="skill-item">
                                        <span className="skill-name">HTML</span>
                                        <div className="skill-bar">
                                            <div className="skill-level html"></div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <span className="skill-name">CSS</span>
                                        <div className="skill-bar">
                                            <div className="skill-level css"></div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <span className="skill-name">JavaScript</span>
                                        <div className="skill-bar">
                                            <div className="skill-level javascript"></div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <span className="skill-name">Python</span>
                                        <div className="skill-bar">
                                            <div className="skill-level python"></div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <span className="skill-name">Kotlin</span>
                                        <div className="skill-bar">
                                            <div className="skill-level kotlin"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="interests-section">
                                <h3>Áreas de Interés</h3>
                                <div className="interests-tags">
                                    <span className="interest-tag"> Ciberseguridad</span>
                                    <span className="interest-tag"> Frontend Development</span>
                                    <span className="interest-tag"> Desarrollo Mobile</span>
                                    <span className="interest-tag"> UX/UI Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'content' && (
                    <div className="section">
                        <h2>Mis Proyectos</h2>

                        <div className="projects-grid">
                            {/* Proyecto Principal - Base de datos Pokémon */}
                            <div className="project-card featured">
                                <div className="project-header">
                                    <h3>🏆 Pokémon Database</h3>
                                    <span className="project-badge">Proyecto Destacado</span>
                                </div>
                                <p className="project-description">
                                    Base de datos interactiva de Pokémon desarrollada con Python y SQL.
                                    Incluye información detallada de stats, tipos, evoluciones y habilidades
                                    de más de 800 Pokémon.
                                </p>
                                <div className="project-tech">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">SQL</span>
                                    <span className="tech-tag">Pandas</span>
                                    <span className="tech-tag">Data Analysis</span>
                                </div>
                                <div className="project-features">
                                    <h4>Características:</h4>
                                    <ul>
                                        <li>Búsqueda avanzada por tipo y generación</li>
                                        <li>Análisis comparativo de stats</li>
                                        <li>Sistema de filtros múltiples</li>
                                        <li>Exportación de datos a CSV</li>
                                    </ul>
                                </div>
                                <div className="project-links">
                                    <button className="project-link-btn">📁 Ver Código</button>
                                    <button className="project-link-btn">🎮 Demo Live</button>
                                </div>
                            </div>

                            {/* Proyectos Placeholder para futuros */}
                            <div className="project-card">
                                <div className="project-header">
                                    <h3>🔐 Security Dashboard</h3>
                                    <span className="project-badge coming-soon">Próximamente</span>
                                </div>
                                <p className="project-description">
                                    Panel de control para monitorización de seguridad en tiempo real.
                                </p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">Cybersecurity</span>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="project-header">
                                    <h3>🎨 Portfolio V1</h3>
                                    <span className="project-badge coming-soon">Próximamente</span>
                                </div>
                                <p className="project-description">
                                    Mi primer portfolio web desarrollado durante mis inicios en frontend.
                                </p>
                                <div className="project-tech">
                                    <span className="tech-tag">HTML</span>
                                    <span className="tech-tag">CSS</span>
                                    <span className="tech-tag">JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'guestbook' && (
                    <div className="section">
                        <h2>Contacto</h2>
                        <p>Formulario de contacto profesional...</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;