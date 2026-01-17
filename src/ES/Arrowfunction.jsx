import React from 'react'

export default function Arrow() {
//     function handleClick()
//     {
//         alert("u clicked me")
// }

//arrow function
// const handleClick = ()=>{
//     alert("hi guys")
// }
  return (
    <div>
      <button onClick={()=>alert("hi guys")}>Click me</button>
    </div>
  )
}
