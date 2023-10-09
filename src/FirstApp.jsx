import PropTypes from 'prop-types';
//si no cambia tiene que estar fuera del componente

export const FirstApp = ( {title, subTitle,name} ) =>{
    
    return (
        //{} exprecion de js que no sea un objeto
        //? agrupador de etiquetas html
        <>
        <h1 data-testid="test-title">{title}</h1>
        {/* <code> {JSON.stringify(newMesagge)} </code> */}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
        </>        
        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
FirstApp.defaultProps = {
    name: 'Kevin Aviles',
    subTitle: 'No hay subtitulo',
    // title: 'No hay titulo' 
}

