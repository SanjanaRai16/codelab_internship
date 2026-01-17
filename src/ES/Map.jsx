import React from 'react'

export default function Map() {
    const fruits=["apple","banana","mango"]
    //array,map(arrowfunction)
  return (
    <div>
      {fruits.map((item,index)=>(
        <>
       
        <p>{index+1}-{item}</p>
        </>
      ))}
    </div>
  )
}
