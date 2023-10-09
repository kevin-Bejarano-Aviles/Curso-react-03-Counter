
describe('Pruebas en <DemoComponent >', () => {
    test('Esta prueba no debe de fallar', ()=>{
        //tres pasos para la parte de las pruebas
        // 1 inicializacion
        const message1 = 'Hola mundo';
    
        // 2 estimulo
        const message2 = message1.trim()
    
        // 3 Observar el comportamineto... esperado
        expect(message1).toBe(message2);
        //? toBe = que se espera que sea a lo que esta en parentesis
    
    })
})


