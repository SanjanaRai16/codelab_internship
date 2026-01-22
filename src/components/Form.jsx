import React, { useState } from 'react'

export default function Form() {
  const [userData, setuserData] = useState({
    name: '',
    email: ''
  })
  const [allData, setAllData] = useState([])
 const handleSubmit = () => {
  setAllData([...allData, userData])
  console.log(allData)
    setuserData({name:'', email:''})
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) =>
          setuserData({ ...userData, name: e.target.value })
        } value={userData.name} />

      <br />
      <input
        type="email"
        onChange={(e) =>
          setuserData({ ...userData, email: e.target.value })
        } value={userData.email} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <table border="1">
          <tr>
            <th>Sl no</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {allData.map((item,index) => ( 
            <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

//onchange used only for input 
//variable index can have any name like john etcc


//for react router dom u need to install a package npm install react-router-dom
//downloaded packages will be in node modules
