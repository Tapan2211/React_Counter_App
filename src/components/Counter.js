import React from "react";
import { useState } from "react";
import { button } from 'react';

function Counter(){

    const [counter, setCounter] = useState(0);

    const increament = () => {

        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return(
        <div>
            <h3>{counter}</h3>
            <button onClick={decrement}>-</button> <button onClick={increament}>+</button> 
            </div>
    );
}

export default Counter;