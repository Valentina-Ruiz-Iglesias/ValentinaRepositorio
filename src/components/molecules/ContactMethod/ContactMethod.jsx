import React from 'react';

const ContactMethod = ({ icon, title, href, children }) => (
    <div className="contact-method">
        <span className="contact-icon">{icon}</span>
        <div>
            <strong>{title}</strong>
            {href ? (
                <a
                    href={href}
                    className="contact-link"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </a>
            ) : (
                <p>{children}</p>
            )}
        </div>
    </div>
);

export default ContactMethod;
