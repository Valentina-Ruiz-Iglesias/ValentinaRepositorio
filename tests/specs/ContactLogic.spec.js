import { buildContactMessage, showContactSuccessMessage } from '../../src/pages/Contact.jsx';

describe('Lógica del formulario de contacto', function () {
    it('buildContactMessage debería construir correctamente el mensaje a partir del formData', function () {
        const formData = {
            nombre: 'Valentina',
            email: 'va.ruizi@duocuc.cl',
            mensaje: 'Hola, quiero hablar de un proyecto frontend.'
        };

        const resultado = buildContactMessage(formData);

        expect(resultado).toContain('Valentina');
        expect(resultado).toContain('va.ruizi@duocuc.cl');
        expect(resultado).toContain('Hola, quiero hablar de un proyecto frontend.');
    });

    it('showContactSuccessMessage debería llamar a alert (mediante una función mockeada)', function () {

        const alertMock = jasmine.createSpy('alertMock');


        showContactSuccessMessage(alertMock);


        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith('¡Mensaje enviado! Gracias por contactarme.');
    });
});
