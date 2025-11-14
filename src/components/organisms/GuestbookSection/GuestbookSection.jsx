import React from 'react';
import ContactMethod from '../../molecules/ContactMethod/ContactMethod';

const GuestbookSection = () => (
    <div className="section">
        <h2>Contactame</h2>
        <p className="section-subtitle">
            Tienes alguna idea que quieras desarrollar?, ¡Conversemos!
        </p>

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
                    <ContactMethod
                        icon="📧"
                        title="Email"
                        href="mailto:va.ruizi@duocuc.cl"
                    >
                        va.ruizi@duocuc.cl
                    </ContactMethod>

                    <ContactMethod
                        icon="💼"
                        title="LinkedIn"
                        href="https://linkedin.com/in/valentina-ruiz-267ba7232"
                    >
                        linkedin.com/in/valentina-ruiz-267ba7232
                    </ContactMethod>

                    <ContactMethod
                        icon="🐙"
                        title="GitHub"
                        href="https://github.com/Valentina-Ruiz-Iglesias"
                    >
                        github.com/Valentina-Ruiz-Iglesias
                    </ContactMethod>
                </div>
            </div>
        </div>
    </div>
);

export default GuestbookSection;
