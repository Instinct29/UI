
import axios from "axios";

export async function AxiosRequest(url,method,headers,params){

    return params?axios({
       url:url, 
       method:method,
       headers:headers,
       data:params,
       timeout:1000
     }) :
    axios({
       url:url, 
       method:method,
       headers:headers,
       data:{},
       timeout:1000
   });
}

//For posting the data into database
const postDataApi = (data)=> {
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest('http://localhost:3001/create',"POST",headers,data)
};

//For authorisation POST request to the database-
const getDataApi = (data)=> {
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest('http://localhost:3001/login',"POST",headers,data)
}

//For authentication
const authhenticationApi = ()=>{
    const  headers = {
        "x-access-token": localStorage.getItem("token")
    }
    return AxiosRequest("http://localhost:3001/isUserAuth","GET",headers,{})
};


export {getDataApi, postDataApi, authhenticationApi} ;


