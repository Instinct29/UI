import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';

import { getDataApi } from '../service/apiRequestt';
import { authhenticationApi } from '../service/apiRequestt';


const Login = () => {
  const [value, setValues] = useState({
    email:"",
    password:""
  })

  const [status, setStatus] = useState(false);



  const handleChange =(e) =>{
    const {name, value} = e.target.value
    setValues((prevValues)=>{
      return{
        ...prevValues,
        [name]: value
      }
    })
  }

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/')
  }

  const loginUser = ()=>{
        getDataApi({email:value.email, password:value.password}).then((res)=>{
          if(!res.data.auth){
           setStatus(false)
          }else{
           localStorage.setItem("token", res.data.token)
           setStatus(true)
           
          }
       })
  }

  const userAuthenticated = ()=>{ 
      authhenticationApi({headers : {
          "x-access-token": localStorage.getItem("token")
                                    }}).then((response)=>{
          console.log(response)
        })
        navigate('/loggedIn')
  
  }


  return (
    <div className='form'>
      <h1>Login to coding web :</h1>

       <label>Email :</label>
       <input type="email" name="email" onChange={handleChange}/>
       <label>Password :</label>
       <input type="password" name="password" onChange={handleChange}/>

       <button className='btn1' onClick={loginUser}>Login</button>
       <button className='btn1' onClick={back}>Back</button>
       {
        status && (
          <button onClick={userAuthenticated}>Authentcation Check</button>
        )
       }
    </div>
  )
}

export default Login;





















  // const loginUser = ()=>{
  //   Axios.post('http://localhost:3001/login',{
  //     email:email,
  //     password:password
  //   }).then((res)=>{
  //      if(!res.data.auth){
  //       setStatus(false)
  //      }else{
  //       localStorage.setItem("token", res.data.token)
  //       setStatus(true)
        
  //      }
  //   })
  // }








    // const userAuthenticated = () => {
  //   Axios.get("http://localhost:3001/isUserAuth", {headers : {
  //          "x-access-token": localStorage.getItem("token")
  //   }}).then((response)=>{
  //     console.log(response)
  //   })
  //    navigate('/loggedIn')
  // }