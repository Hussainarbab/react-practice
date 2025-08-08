import React, {useState} from "react"

function Counter(){

    const [count, setCount] =useState(0);

    const increment =() =>{
        setCount(count +1);
    }

    const reset =() =>{
        setCount(0);
    }
    const decrement =() =>{
        setCount(count -1);
    }

return(



    <div className="counter-container">
        <p className="count-display">  {count} </p>
        <button className="container-button" onClick={decrement}>Decrement</button>
        <button className="container-button" onClick={reset}>Reset</button>
        <button className="container-button" onClick={increment}>Increament</button>

        <select name="" id="">
            <option value="">hussain</option>
            <option value="">hussain</option>
            <option value="">hussain</option>
            <option value="">hussain</option>
        </select>
    </div>
);
}

export default Counter