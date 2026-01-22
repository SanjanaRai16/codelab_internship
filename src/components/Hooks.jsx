import React, { useState } from 'react'


export default function Hooks() {
    //const [state,setState]=useState(anyValue) to manage state in function
    const[name,setName]=useState("mern")
    const[number,setNumber]=useState(0)
  return (
    <div>
      {name}
      <br/>
      <button onClick={()=>setName("MongoDB")} >Change name</button>
    <p>{number}</p>
    <button onClick={()=>setNumber(number-1)}>-</button>
    <button onClick={()=>setNumber(0)}>0</button>
    <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
