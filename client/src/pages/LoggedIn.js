import React from 'react'
import { useNavigate } from 'react-router-dom';


const LoggedIn = () => {
    const navigate = useNavigate();
    const Logout = ()=>{
        navigate('/')
    }
  return (
    <div className='form'>

        <h1>Welcome</h1>
        <h2>You are logged in your account</h2>

        <button onClick={Logout} className='btn'>Logout</button>
    </div>
  )
}

export default LoggedIn;