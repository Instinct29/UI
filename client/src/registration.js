import { useState } from 'react';
import './App.css';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [dob, setDob]=useState("");
  const [gender, setGender]=useState("");
  const [file, setFile]=useState("Empty");
  const [password, setPassword]=useState("");

  const addUser = ()=>{
    Axios.post('http://localhost:3001/create', {
      name:name,
      email:email,
      dob:dob,
      gender:gender,
      file:file,
      password:password
    } ).then(()=>{
      console.log("success")
    })
  }

  const navigate = useNavigate()

  const Login1 = ()=>{
    navigate("/login")
  }

  return (
    <div className="App">
      <div className='nav'>
      <h1>CodingWeb Registration</h1> 
      <button onClick={Login1}>Login Page</button>
      </div>
    <div className='form'>
        <label>Name :</label>
        <input  type="text" onChange={(e)=>setName(e.target.value)}/>
        <label>Email :</label>
        <input  type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <label>Date Of Birth:</label>
        <input  type="date" onChange={(e)=>setDob(e.target.value)}/>
        <div className='gender'>
        <input  type="radio" name="name" value="male"onChange={(e)=>setGender(e.target.value)}/>Male
        <input  type="radio" name="name" value="female"onChange={(e)=>setGender(e.target.value)}/>Female
        </div>
        <input  type="file" onChange={(e)=>setFile(e.target.value)}/>
        <label>Password :</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn'onClick={addUser}>Register</button>
    </div>
    </div>
  );
}

export default Registration;
