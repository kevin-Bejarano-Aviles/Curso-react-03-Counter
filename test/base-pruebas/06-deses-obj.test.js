import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en el archivo 06-deses-obj', () => {
    test('debe de retornar un objeto ', () => {
        const clave = '123';
        const nombre = 'Kevin';
        const edad = 12;
        const rango = 'S'
        const user = usContext({clave,nombre,edad,rango})
        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
    
})
