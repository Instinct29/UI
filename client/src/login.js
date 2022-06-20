import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/')
  }

  const loginUser = ()=>{
    Axios.post('http://localhost:3001/login',{
      email:email,
      password:password
    }).then((res)=>{
       if(!res.data.auth){
        setStatus(false)
       }else{
        localStorage.setItem("token", res.data.token)
        setStatus(true)
        
       }
    })
  }

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {headers : {
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
       <input type="email" onChange={e=>setEmail(e.target.value)}/>
       <label>Password :</label>
       <input type="password" onChange={e=>setPassword(e.target.value)}/>

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