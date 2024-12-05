import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setValues } from '../Feature/StoreSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setValues({ email, password }))
  }
  return (
    <div className='container bg-light shadow col-lg-4 mt-5 '>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User Mail</label>
        <input type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          className='form-control'
        />
        <label htmlFor="">Password</label>
        <input type="password"
         value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
           className='form-control'
            />
        <button className='btn mt-5 mb-3 btn-info' 
        type='submit' >Submit</button>
      </form>

    </div>
  )
}

export default Login
