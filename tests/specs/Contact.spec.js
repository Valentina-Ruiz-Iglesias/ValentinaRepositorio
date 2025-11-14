import React from 'react';
import { renderToString } from 'react-dom/server';
import Contact from '../../src/pages/Contact.jsx';

describe('Contact - Formulario de contacto', function () {
    it('debería mostrar el título de la página de contacto', function () {
        const html = renderToString(<Contact />);
        expect(html).toContain('Contacto');
    });

    it('debería incluir los campos principales del formulario', function () {
        const html = renderToString(<Contact />);

        // Labels del formulario en Contact.jsx
        expect(html).toContain('Nombre');
        expect(html).toContain('Email');
        expect(html).toContain('Mensaje');
    });

    it('debería incluir el botón para enviar el mensaje', function () {
        const html = renderToString(<Contact />);
        expect(html).toContain('Enviar Mensaje');
    });
});
