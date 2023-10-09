import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    });
    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        const id = 100;
        const heroe = getHeroeById( id );
        
        expect(heroe).toBeFalsy()//?que tenga un valor nulo, undefined o false

        // expect(heroe).toEqual({
        //     id: 2,
        //     name: 'Batman',
        //     owner: 'DC'
        // })

    });
    //TODO: getHeroesByOwner
    test('Debe de retornar un arreglo con los heroes de DC ', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner )
        
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },       
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    });
    test('deber retornar el arreglo con los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])
    })
    
    
    
})
