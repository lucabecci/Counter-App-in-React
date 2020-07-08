import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ( { value } ) => {
    
    const [ counter, setState ] = useState( value );


    const handleAdd = (e) => setState( (c) => c + 1)
        // setState( counter + 1)
        
    const handleSubstract = (e) =>  setState( (c) => c - 1)
        // setState( counter - 1)
       
    const handleReset = (e) => setState( (c) => value)
        // setState( counter = 0)
    
    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick ={ handleAdd }>+1</button>
            <button onClick ={ handleReset }>Reset</button>
            <button onClick ={ handleSubstract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}


export default CounterApp