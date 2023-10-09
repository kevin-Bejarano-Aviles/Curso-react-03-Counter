import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Kevin"', () => {
    const name = 'KevIN'
    const messaje = getSaludo(name);

    expect(messaje).toBe(`Hola ${name}`);
  })
  
})
