import React from 'react'
export default function Card({title,category,price,image}) {
    const myStyle={border:'1px solid black',width:'200px',height:'300px',margin:'20px',padding:'10px',backgroundColor:'lightgrey'}
  return (
    <div>
      {/* <div style={{border:'1px solid black',width:'200px',height:'300px',margin:'20px',padding:'10px',backgroundColor:'lightgrey'}}> */}
      {/* passing variable as style */}
      <div style={myStyle}> 
    <img src={image} alt="Sample Image" style={{width:'200px',height:'100px'}}/>
     <h5>{title}</h5> 
     <h5>{category}</h5>
     <h6>{price}</h6>
    </div>
    </div>
  )
}
