import React, { useState } from 'react'

const Property = (props) => {
  const[count,setcount]= useState (0)
 const handleclear =() =>{
  setcount(0)
 }
 
  return (
    <div className='container'>
      <h1>PROPS IN REACT</h1>
      <div className="row">
      <div className="card col-lg-4">
        <img src="public/back1.webp" className='w-100 justify-content-center' alt="" />
        <div className="card-tittle">
          <h3>{props.tittle}</h3>
          <div className="card-body">
            <p>{props.about}</p>
          </div>
        </div>
      </div>
      </div>
      <h1 className='text-info'>PROPS LOOP</h1>
      <h2>Name :{props.name}</h2>
      <h2>Father Name:{props.fname}</h2>
      <h3>User name is:{props.isuser ? "usman" :"Another User"}</h3>
      <h3>Gender:{props.isgender? "Male":"Female" }</h3>
      <h3>Marks :{props.Marks}</h3>
      <h2>Age:{props.marks >40 ? "Pass" :""}</h2>
      <h3>Student:{ props.isstudent ? "Yes" : "No"}</h3>
    <div className="text-center">
      <h2 className='text-secondry border-0,0,0,2 h1style'>COUNTER</h2>
    <button className='btn mb-2 btn-rounded btn-info'>{count}</button>
      <button className='mb-2 btn-rounded btn-danger  ms-2 btn'onClick={()=>handleclear(0)} >clear</button><br />
      <button className='mb-3 btn-rounded btn-warning btn' onClick={()=>setcount(count+1)}>click to count</button><br />
      <button onClick={()=> setcount(count-1)}>decrease</button>
    </div>
    </div>
    
  )
}

export default Property
