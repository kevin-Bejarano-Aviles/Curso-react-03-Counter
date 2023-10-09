import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp/>', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy goku';
    //     //conatiner = obetener todos los nodos
    //     const { container } = render ( <FirstApp title={ title } /> );

    //     expect(container).toMatchSnapshot();

    // })

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy kevin';
        //getByText = obtener un nodo por un texto
        const { container, getByText,getByTestId } = render(<FirstApp title={title}/>)
        expect(getByText(title)).toBeTruthy();


        expect(getByTestId('test-title').innerHTML).toBe(title)
        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy kevin';
        const subTitle = 'Soy un subtitulo';
        const {getByText} = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
        expect(getByText(subTitle)).toBeTruthy();
    })
    
    
    
    
    
})
