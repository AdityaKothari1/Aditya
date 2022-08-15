import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"




function userlogin({email,password}){
     return fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
     })
}



function Login(){
 const {isAuth,loginuser}=useContext(AuthContext)


 const handlelogin=()=>{
    userlogin({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }).then((res)=>res.json()).then((res)=>{loginuser("eve.holt@reqres.in",res.token)})
 }

 if(isAuth){
    return <Navigate to="/"/>
 }


    return(
          <div>
              <h1>Login</h1>
              <button onClick={()=>handlelogin()}>Login</button>
          </div>
    )
}
export default Login