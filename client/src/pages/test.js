// import React,{useState} from 'react';
// import { postDataApi, getDataApi } from '../service/apiRequestt';
import { authhenticationApi } from "../service/apiRequestt";
import { useNavigate } from 'react-router-dom';


const Test = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [status, setStatus] = useState(false);

    // const onSubmit = ()=>{
    //     postDataApi({name:name,email:"yeye@gmail.com",dob:"123",gender:"male",file:"d/manthan",password:"manthan"}).then((res)=>{
    //         console.log(res);
    //     })
    // }

    // const login =() =>{
    //     getDataApi({email:email, password:password}).then((res)=>{
    //         if(!res.data.auth){
    //          setStatus(false)
    //         }else{
    //          localStorage.setItem("token", res.data.token)
    //          setStatus(true)
             
    //         }
    //      })

    // }
    const navigate = useNavigate();

    const authentication =()=>{
        authhenticationApi({headers : {
            "x-access-token": localStorage.getItem("token")
                                      }}).then((response)=>{
            console.log(response)
          })
          navigate('/loggedIn')
    }
  return (
    <div>
        {/* <label>Email</label>
        <input type="text" onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" onChange={e=>setPassword(e.target.value)} />
        <button onClick={login}>Submit</button> */}
        <button onClick={authentication}>Auth</button>
    </div>
  )
}

export default Test;