import React from 'react';
import PropTypes from 'prop-types'


const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo =  {
    //     nombre: 'Brian',
    //     edad: 19
    // }
    console.log(saludo)
    return (
        <>
            {/* <pre>{ JSON.stringify(saludo, null ,3) }</pre> */}
            <h1> { saludo }</h1>
            <p> { subtitulo } </p>
        </>
    )

}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: 'This is a paragraph'
}

export default PrimeraApp;