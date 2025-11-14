import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../../src/pages/Home.jsx';
import AboutSection from '../../src/components/organisms/AboutSection/AboutSection.jsx';
import ProjectsSection from '../../src/components/organisms/ProjectsSection/ProjectsSection.jsx';

describe('Home - Renderizado del portafolio', function () {
    it('debería incluir el nombre completo en el HTML inicial', function () {
        const html = renderToString(<Home />);
        expect(html).toContain('Valentina Ruiz Iglesias');
    });

    it('debería incluir las pestañas principales (Feed, Sobre mi, Proyectos, Contactame)', function () {
        const html = renderToString(<Home />);

        expect(html).toContain('Feed');
        expect(html).toContain('Sobre mi');
        expect(html).toContain('Proyectos');
        expect(html).toContain('Contactame');
    });

    it('debería incluir el contenido de la sección inicial "Mi Actividad Reciente"', function () {
        const html = renderToString(<Home />);

        // La sección por defecto al cargar es el Feed
        expect(html).toContain('Mi Actividad Reciente');
    });
});

describe('Secciones del portafolio - Organismos', function () {
    it('AboutSection debería renderizar el título "Sobre Mí"', function () {
        const html = renderToString(<AboutSection />);
        expect(html).toContain('Sobre Mí');
    });

    it('ProjectsSection debería renderizar el título "Mis Proyectos"', function () {
        const html = renderToString(<ProjectsSection />);
        expect(html).toContain('Mis Proyectos');
    });
});
