import React from 'react';
import { renderToString } from 'react-dom/server';
import Portfolio from '../../src/pages/Portfolio.jsx';

describe('Portfolio - Renderizado de proyectos', function () {
    it('debería mostrar el título principal del portafolio', function () {
        const html = renderToString(<Portfolio />);
        expect(html).toContain('Mi Portafolio');
    });

    it('debería renderizar los nombres de los proyectos definidos', function () {
        const html = renderToString(<Portfolio />);

        // Estos textos vienen del array "projects" en Portfolio.jsx
        expect(html).toContain('Diseño de App Móvil');
        expect(html).toContain('Web Corporativa');
        expect(html).toContain('Branding Personal');
    });
});
