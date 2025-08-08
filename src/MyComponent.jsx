import React, { useState } from 'react';


function MyComponent(){

const [name,setName] =useState("Guest");
const [age, setAge ] =useState(0);
const [isEmployed,setIsEmployed] =useState(false);

const updateName =() =>{
    setName("Hussain Arbab")

}

const incrementAge =() =>{
    setAge(age +1)
}


const toogleEmployedStatus =()=>{
    setIsEmployed(!isEmployed);
}


return(
    <div className='huss'>
        <p>Name: {name}</p>
        <button onClick={updateName}>set name </button>

          <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age </button>

           <p>Is employed: {isEmployed ? "yes" :"No"}</p>
        <button onClick={toogleEmployedStatus}>Toogle Status </button>
    </div>
);

}


export default MyComponent