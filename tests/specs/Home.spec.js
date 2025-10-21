// tests/specs/Home.spec.js - VERSIÓN MEJORADA
describe('Página Home - Pruebas Específicas', function() {
    let container;
    let React;
    let ReactDOM;
    let root;

    // Aumentar timeout global para las pruebas
    const RENDER_DELAY = 500; // Más tiempo para que React renderice completamente

    beforeAll(function(done) {
        // Aumentar timeout para carga de módulos
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

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
        container = document.createElement('div');
        container.id = 'test-root';
        container.style.cssText = `
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `;
        document.body.appendChild(container);
        root = ReactDOM.createRoot(container);
    });

    afterEach(function(done) {
        // Esperar antes de limpiar para que puedas ver el resultado
        setTimeout(() => {
            if (root) {
                try {
                    root.unmount();
                } catch (e) {
                    // Ignorar errores de unmount
                }
            }
            if (container && document.body.contains(container)) {
                document.body.removeChild(container);
            }
            container = null;
            root = null;
            done();
        }, 1000); // Esperar 1 segundo antes de limpiar
    });

    // Función helper para renderizar y esperar
    function renderAndWait(component, callback) {
        root.render(React.createElement(component));
        setTimeout(callback, RENDER_DELAY);
    }

    describe('Foto de Perfil', function() {
        it('debería mostrar la foto de perfil correctamente y permanecer visible', function(done) {
            renderAndWait(window.HomeComponent, () => {
                const profileImage = container.querySelector('.profile-img');
                expect(profileImage).not.toBeNull();
                expect(profileImage.alt).toBe('Valentina Ruiz Iglesias');
                expect(profileImage.src).toBeTruthy();

                // Verificar que la imagen es visible
                const style = window.getComputedStyle(profileImage);
                expect(style.display).not.toBe('none');
                expect(style.visibility).not.toBe('hidden');
                expect(style.opacity).not.toBe('0');

                done();
            });
        });
    });

    describe('Textos del Perfil', function() {
        it('debería mostrar todos los textos correctamente sin errores visuales', function(done) {
            renderAndWait(window.HomeComponent, () => {
                // Verificar que no hay elementos con color rojo de error
                const allElements = container.querySelectorAll('*');
                const errorElements = Array.from(allElements).filter(el => {
                    const style = window.getComputedStyle(el);
                    return style.color === 'rgb(255, 0, 0)' ||
                        style.backgroundColor === 'rgb(255, 0, 0)' ||
                        style.borderColor === 'rgb(255, 0, 0)';
                });

                expect(errorElements.length).toBe(0, 'No debería haber elementos en rojo');

                // Verificar textos
                expect(container.querySelector('.profile-name').textContent).toBe('Valentina Ruiz Iglesias');
                expect(container.querySelector('.profile-tagline').textContent).toContain('Un dia a la vez');
                expect(container.querySelector('.profile-bio').textContent).toContain('Estudiante de Ingeniería en Informática');

                done();
            });
        });
    });

    // ... (el resto de las pruebas similares pero usando renderAndWait)
});