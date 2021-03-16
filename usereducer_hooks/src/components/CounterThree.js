import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function CounterThree() {
    // When dealing with multiple state variables that have the same state transitions 
    // it is a good idea to have multiple useReducers making use of the same reducer function.
    // This avoids the complexity of merging the state, if it were to be an object, also prevents us
    // from duplicating code in the reducer function
    const [state, dispatch] = useReducer(reducer, initialState);
    const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count: {state}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>CountTwo: {stateTwo}</div>
            <button onClick={()=>dispatchTwo('increment')}>Increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree
