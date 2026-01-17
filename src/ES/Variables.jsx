import React from 'react'
import { use } from 'react'

export default function Variables() {
    let name='sanju'
    name='sanjana'
    var name1='ashu'
    name1='ashish'
    const name3='pookie'
    const userData={
        name11:"anu",
        age:22,
        email:"anu@gmail.com"
    }
 const {name11,email,age}=userData
  return (
    <div>
      <p>{name1}</p>
      <p>{name}</p>
      <p>{name3}</p>
     {/* *object values  */}
     {/* <p>{userData.name}</p>
     <p>{userData.age}</p>

     <p>{userData.email}</p> */}

     {/* Destrcting */}
     <p>{name11}</p>
     <p>{age}</p>
     <p>{email}</p> 
     
    </div>
  )
}
