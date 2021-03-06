import React, { useState } from 'react';

function CounterExample(){
    //2nd is always the setter
    // inspect -> >> -> Components -> CounterExample 
        //to see hooks
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>
                {count}
                {
                    //<element event={ hookSetter(TODO)}>
                }
                <button onClick={() => setCount(count+1)}>
                    Add
                </button>
                <button onClick={() => setCount(count-1)}>
                    Subtract
                </button>
            </h4>
        </div>
    )
}

export default CounterExample;