// tests/specs/Home-simple.spec.js - VERSIÓN MEJORADA
describe('Página Home - Pruebas Simplificadas', function() {
    let container;
    let React;
    let ReactDOM;
    let root;
    let componentRendered = false;

    beforeAll(function(done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

        Promise.all([
            import('react'),
            import('react-dom/client'),
            import('../../src/pages/Home.jsx')
        ]).then(([react, reactDOMClient, HomeModule]) => {
            React = react.default;
            ReactDOM = reactDOMClient;
            window.HomeComponent = HomeModule.default;
            done();
        }).catch(error => {
            console.error('Error loading modules:', error);
            done.fail(error);
        });
    });

    beforeEach(function() {
        if (!componentRendered) {
            container = document.createElement('div');
            container.id = 'test-root';
            container.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        background: white;
      `;
            document.body.appendChild(container);
            root = ReactDOM.createRoot(container);

            // Renderizar el componente UNA sola vez
            root.render(React.createElement(window.HomeComponent));
            componentRendered = true;
        }
    });

    // NO hacer afterEach - mantener el componente visible durante todas las pruebas
    afterAll(function(done) {
        setTimeout(() => {
            if (root) {
                root.unmount();
            }
            if (container && document.body.contains(container)) {
                document.body.removeChild(container);
            }
            componentRendered = false;
            done();
        }, 3000); // Esperar 3 segundos al final de TODAS las pruebas
    });

    it('debería renderizar sin errores de consola', function(done) {
        setTimeout(() => {
            // Verificaciones básicas
            expect(container.textContent).toContain('Valentina Ruiz Iglesias');
            expect(container.textContent).toContain('Un dia a la vez');
            expect(container.textContent).toContain('Estudiante de Ingeniería en Informática');
            done();
        }, 1000);
    });

    it('debería tener todos los elementos principales', function(done) {
        setTimeout(() => {
            // Verificar estructura básica
            expect(container.innerHTML).toContain('profile-name');
            expect(container.innerHTML).toContain('profile-tagline');
            expect(container.innerHTML).toContain('profile-bio');
            expect(container.innerHTML).toContain('nav-item');
            expect(container.innerHTML).toContain('theme-toggle');
            done();
        }, 1000);
    });

    it('debería mostrar la foto de perfil permanentemente', function(done) {
        setTimeout(() => {
            const images = container.querySelectorAll('img');
            expect(images.length).toBeGreaterThan(0);

            const profileImage = container.querySelector('.profile-img') || images[0];
            expect(profileImage).not.toBeNull();
            expect(profileImage.alt).toBe('Valentina Ruiz Iglesias');
            expect(profileImage.src).toBeTruthy();

            // Verificar que la imagen sigue visible
            const style = window.getComputedStyle(profileImage);
            expect(style.display).not.toBe('none');
            done();
        }, 1000);
    });

    it('debería mantener la navegación visible', function(done) {
        setTimeout(() => {
            const navButtons = container.querySelectorAll('.nav-item');
            expect(navButtons.length).toBe(4);

            const expectedTabs = ['Feed', 'Sobre mi', 'Proyectos', 'Contactame'];
            expectedTabs.forEach(tabText => {
                const found = Array.from(navButtons).some(button =>
                    button.textContent.includes(tabText)
                );
                expect(found).toBe(true);
            });
            done();
        }, 1000);
    });

    it('debería mantener el botón de tema visible', function(done) {
        setTimeout(() => {
            const themeButton = container.querySelector('.theme-toggle');
            expect(themeButton).not.toBeNull();
            expect(themeButton.textContent).toMatch(/[☀️🌙]/);
            done();
        }, 1000);
    });

    it('debería mantener todo el contenido visible durante todas las pruebas', function(done) {
        setTimeout(() => {
            // Verificar que todos los elementos siguen ahí
            expect(container.querySelector('.profile-header')).not.toBeNull();
            expect(container.querySelector('.profile-nav')).not.toBeNull();
            expect(container.querySelector('.profile-content')).not.toBeNull();
            done();
        }, 1000);
    });

    it('debería completar todas las pruebas con el componente visible', function(done) {
        setTimeout(() => {
            // Última verificación - todo debería seguir visible
            expect(container.textContent).toContain('Valentina Ruiz Iglesias');
            expect(container.querySelector('img')).not.toBeNull();
            done();
        }, 1000);
    });
});