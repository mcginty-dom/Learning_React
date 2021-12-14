import React, { useReducer } from 'react';

function Reducer() {
    //current state and action as arguments
    //returns a new state
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    //the initial state
    }, 0);
    return (
        <div>
            {count}
            <button onCLick={() => dispatch('add')}>
                Increment
            </button>
            <button onCLick={() => dispatch('sub')}>
                Decrement
            </button>
        </div>
    )
}

export default Reducer;