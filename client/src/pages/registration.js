import { useState } from 'react';
import '../App.css'
// import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { postDataApi } from '../service/apiRequestt';


function Registration() {
  
  const [values, setValues] = useState({
    name:"",
    email:"",
    dob:"",
    gender:"",
    file:"",
    password:""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setValues(prevValues =>{
      return {  
         ...prevValues,
         [name]:value
      }
   })
  }



  const addUser = ()=>{
    postDataApi({ name:values.name,
      email:values.email,
      dob:values.dob,
      gender:values.gender,
      file:values.file,
      password:values.password}).then(()=>{
        console.log("success! data has been saved in the Database")
      })
      console.log(values)
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
        <input  type="text" name="name" onChange={handleChange}/>
        <label>Email :</label>
        <input  type="email" name="email" onChange={handleChange}/>
        <label>Date Of Birth:</label>
        <input  type="date" name="dob" onChange={handleChange}/>
        <div className='gender'>
        <input  type="radio" name="gender" value="male"onChange={handleChange}/>Male
        <input  type="radio" name="gender" value="female"onChange={handleChange}/>Female
        </div>
        <input  type="file" name='file' onChange={handleChange}/>
        <label>Password :</label>
        <input type="password" name="password" onChange={handleChange}/>
        <button className='btn'onClick={addUser}>Register</button>
    </div>
    </div>
  );
}

export default Registration;













  // const addUser = ()=>{
  //   Axios.post('http://localhost:3001/create', {
  //     name:name,
  //     email:email,
  //     dob:dob,
  //     gender:gender,
  //     file:file,
  //     password:password
  //   } ).then(()=>{
  //     console.log("success")
  //   })
  // }

  // const [name, setName]=useState("");
  // const [email, setEmail]=useState("");
  // const [dob, setDob]=useState("");
  // const [gender, setGender]=useState("");
  // const [file, setFile]=useState("");
  // const [password, setPassword]=useState("");
