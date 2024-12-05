import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const home = () => {
  return (
    <div>
      <nav className='container-fluid navbar navbar-expand-lg bg-dark d-flex justify-content-between  sticky-top mt-2 shadow'>
      <div className='float-lift'> <img className='ms-5' src="public/garaana.svg" alt="" /></div>
      <div className='foat-right'>
       <ul className='navbar nav-list' style={{listStyle:'none'}}>
        <li>
            <Link to='/' className="nav-link active">Home</Link>
        </li>
        <li>
            <Link to='Products' className="nav-link">Products</Link>
        </li>
        <li>
            <Link to='RealEstate' className="nav-link">RealEstate</Link>
        </li>
        <li>
            <Link to='/Property' className="nav-link">Property</Link>
        </li>
       
        <li>
            <Link to='/API' className="nav-link">Uplodeing API</Link>
        </li>
        <li>
            <Link to='/More' className="nav-link">More</Link>
        </li>
        <li>
            <Link to='/FileUpload' className="nav-link">FileUpload</Link>
        </li>
        <li>
          <button className='btn btn-primary p-0'>          
              <Link to='/Login' className="nav-link ">Login</Link>
          </button>

        </li>

       </ul>
       </div>
      </nav>
      

    </div>
  )
}

export default home
