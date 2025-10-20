// tests/specs/basic-test.spec.js
describe('Prueba Básica de Configuración', function() {

    it('debería verificar que Karma + Jasmine funcionan', function() {
        expect(true).toBe(true);
    });

    it('debería poder manipular el DOM', function() {
        const div = document.createElement('div');
        div.textContent = 'Test de configuración';
        document.body.appendChild(div);

        expect(div.textContent).toContain('configuración');
        document.body.removeChild(div);
    });

    it('debería sumar números correctamente', function() {
        expect(1 + 1).toBe(2);
        expect(5 + 3).toBe(8);
    });
});