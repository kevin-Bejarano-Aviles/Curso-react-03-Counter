import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en <CounterApp/>', () => {
    const valorInicial = 100;
    test('debe de hacer match con el snapshot ', () => {
        const {container} = render(<CounterApp value={valorInicial}/>)
        expect(container).toMatchSnapshot();
    });
    test('debe de mostrar el valor inicial de 100 ', () => {
        render(<CounterApp value={valorInicial}/>)
        //toBeTruthy si esxiste
        //screen = representacion del componente renderizado
        expect(screen.getByText(valorInicial)).toBeTruthy()
    });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={10}/>)
        //fireEvent = disparar evento
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={10}/>)
        //fireEvent = disparar evento
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9') ).toBeTruthy();
    });
    
    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp value={10}/>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'})) ;
        expect(screen.getByText(10)).toBeTruthy();
        // screen.debug()
    })
    

    
    
})
