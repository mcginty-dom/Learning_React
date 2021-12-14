import React, { useReducer, useRef } from 'react';

function ShoppingList() {
    //can hold reference to a DOM node
    const  inputRef = useRef();
    //current state and action as arguments
    //returns a new state
    const [items, dispatch] = 
        useReducer((state, action) => {
            switch (action.type) {
                case 'add':
                    return [
                        ...state,
                        {
                            id: state.length,
                            name: action.name
                        }
                    ];
                case 'del':
                    //_ means anything
                    //allow through all those where => condition
                    return state.filter((_, index) => index !== action.index)
                case 'cls':
                    return [];
                default:
                    console.log(
                        "default returned on items"
                            +"in ShoppingList.js"
                    );
                    return [
                        ...state
                    ]
            }
        }, []);

    function handleSubmit(event) {
        event.preventDefault();
        //use an object {} to add flexibility
        dispatch({
            type: 'add',
            name: inputRef.current.value
        });
        inputRef.current.value = '';
    }
    
    //form lets user add to array when they enter a value
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef}/>
            </form>
            <button onClick={
                () => dispatch({type: 'cls'})
            }>Clear</button>
            <ul>
                {items.map((item, index) => ( 
                    <li key={item.id}>
                        {item.name}
                        <button onClick={
                            () => dispatch({
                                type: 'del', index
                            })
                        }>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;