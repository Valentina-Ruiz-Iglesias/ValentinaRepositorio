import React, { useState } from 'react';
import '../styles/global.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState('feed');
    const [isDarkMode, setIsDarkMode] = useState(true); // Estado para el tema

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`twitter-profile ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            {/* Header - Perfil */}
            {/* Header - Perfil */}
            <header className="profile-header">
                <div className="profile-info">
                    {/* Foto de perfil */}
                    <div className="profile-picture">
                        <img
                            src="/assets/imageners/1000157373.jpg"  //
                            alt="Valentina Ruiz Iglesias"
                            className="profile-img"
                        />
                    </div>

                    {/* Información de perfil */}
                    <div className="profile-text">
                        <h1 className="profile-name">Valentina Ruiz Iglesias</h1>
                        <p className="profile-tagline">"Un dia a la vez"</p>
                        <p className="profile-bio">Estudiante de Ingeniería en Informática · Ciberseguridad </p>
                    </div>
                </div>

                {/* Botón de toggle del tema */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
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
                    Sobre mi
                </button>
                <button
                    className={`nav-item ${activeSection === 'content' ? 'active' : ''}`}
                    onClick={() => setActiveSection('content')}
                >
                    Proyectos
                </button>
                <button
                    className={`nav-item ${activeSection === 'guestbook' ? 'active' : ''}`}
                    onClick={() => setActiveSection('guestbook')}
                >
                    Contactame
                </button>
            </nav>

            {/* Secciones */}
            <main className="profile-content">
                {activeSection === 'feed' && (
                    <div className="section">
                        <h2>Mi Actividad Reciente</h2>

                        <div className="feed-timeline">
                            <div className="feed-item">
                                <div className="feed-header">
                                    <span className="feed-date">Octubre 2025</span>
                                    <span className="feed-badge">Certificacion obtenida!</span>
                                </div>
                                <p className="feed-content">
                                    Completé mi curso de Ethical Hacking de Certiprof!
                                </p>
                            </div>

                            <div className="feed-item">
                                <div className="feed-header">
                                    <span className="feed-date">Septiembre 2025</span>
                                    <span className="feed-badge">Proyecto avanzado</span>
                                </div>
                                <p className="feed-content">
                                    Primera version de PocketCardDB terminada!
                                </p>
                            </div>

                            <div className="feed-item">
                                <div className="feed-header">
                                    <span className="feed-date">Enero 2025</span>
                                    <span className="feed-badge">Certificacion obtenida!</span>
                                </div>
                                <p className="feed-content">
                                    Completé mi curso de introduccion a la cibeseguridad!
                                </p>
                            </div>
                        </div>
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
                                    a la sociedad y al medioambiente.
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
                                    <span className="interest-tag">Ciberseguridad</span>
                                    <span className="interest-tag">Frontend Development</span>
                                    <span className="interest-tag">Desarrollo Mobile</span>
                                    <span className="interest-tag">UX/UI Design</span>
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
                                    <h3>PocketCardsDB</h3>
                                    <span className="project-badge">Proyecto mas reciente</span>
                                </div>
                                <p className="project-description">
                                    PocketCardsDB es una base de datos de Pokemon Pocket TCG para gestionar el juego
                                    de cartas intercambiables (TCG). Centraliza toda la información sobre cartas, sobres, colecciones
                                    expansiones, permitiendo a los jugadores consultar detalles como la rareza, edición y
                                    probabilidades de aparición de cada carta en su sobre correspondiente
                                </p>
                                <div className="project-tech">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">SQL</span>
                                    <span className="tech-tag">Analisis de datos</span>
                                </div>
                                <div className="project-features">
                                    <h4>Características:</h4>
                                    <ul>
                                        <li>Búsqueda por Tipo y Generacion</li>
                                        <li>Simulacion de apertura de sobres</li>
                                        <li>Rating de aparicion cada carta</li>
                                    </ul>
                                </div>
                                <div className="project-links">
                                    <button className="project-link-btn">📁 Ver Código</button>
                                </div>
                            </div>

                            <div className="project-card featured">
                                <div className="project-header">
                                    <h3>Edutech SPA</h3>
                                    <span className="project-badge">Proyecto terminado</span>
                                </div>
                                <p className="project-description">
                                 Sistema creado para realizar una migracion de sistema monolitico a sistema
                                    de microservicios
                                </p>
                                <div className="project-tech">
                                    <span className="tech-tag">HateOAS</span>
                                    <span className="tech-tag">SQL</span>
                                    <span className="tech-tag">SpringWeb</span>
                                </div>
                                <div className="project-features">
                                    <h4>Características:</h4>
                                    <ul>
                                        <li>Distribucion de servicios</li>
                                        <li>Optimizacion del rendimiento</li>
                                        <li>Aumento de disponibilidad</li>
                                        <li>Mejora en la escalabilidad</li>
                                    </ul>
                                </div>
                                <div className="project-links">
                                    <button className="project-link-btn">📁 Ver Código</button>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="project-header">
                                    <h3>Primer portfolio</h3>
                                    <span className="project-badge coming-soon">Próximamente</span>
                                </div>
                                <p className="project-description">
                                    Primer portfolio web desarrollado durante el curso Fullstack II
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
                        <h2>Contactame</h2>
                        <p className="section-subtitle">Tienes alguna idea que quieras desarrollar?, Conversemos!</p>

                        <div className="guestbook-content">
                            {/* Formulario de Contacto */}
                            <div className="contact-form">
                                <h3>Enviar Mensaje</h3>
                                <form className="form">
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Tu nombre"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="tu.email@ejemplo.com"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            placeholder="Hola! Te escribo porque..."
                                            className="form-textarea"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        📨 Enviar Mensaje
                                    </button>
                                </form>
                            </div>

                            {/* Información de Contacto */}
                            <div className="contact-info">
                                <h3>Otros Medios</h3>
                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <span className="contact-icon">📧</span>
                                        <div>
                                            <strong>Email</strong>
                                            <a href="mailto:va.ruizi@duocuc.cl" className="contact-link">va.ruizi@duocuc.cl</a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <span className="contact-icon">💼</span>
                                        <div>
                                            <strong>LinkedIn</strong>
                                            <a href="https://linkedin.com/in/valentina-ruiz-267ba7232" target="_blank" rel="noopener noreferrer" className="contact-link">
                                                linkedin.com/in/valentina-ruiz-267ba7232
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <span className="contact-icon">🐙</span>
                                        <div>
                                            <strong>GitHub</strong>
                                            <a href="https://github.com/Valentina-Ruiz-Iglesias" target="_blank" rel="noopener noreferrer" className="contact-link">
                                                github.com/Valentina-Ruiz-Iglesias
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;