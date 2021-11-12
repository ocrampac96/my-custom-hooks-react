import { useState } from 'react'
//import PropTypes from 'prop-types'

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (aumento = 1) =>{
        setState(state+aumento);
    }
    const decrement = (aumento = 1) =>{
        setState(state-aumento);
    }
    const reset = () =>{
        setState(initialState);
    }
    return {
        counter:state,
        increment,
        decrement,
        reset
    };
}
