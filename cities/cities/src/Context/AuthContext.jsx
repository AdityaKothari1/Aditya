import React, { Children } from "react";
import { useState } from "react";



export const AuthContext=React.createContext()

function AuthContextProvide({children}){
  const [isAuth,setAuth]=useState(false)
  const [email,setEmail]=useState("")
  const [token,setToken]=useState(null)
  const loginuser=(email,token)=>{
     setAuth(true)
     setEmail(email)
     setToken(token)
  }
  const logout=()=>{
    setAuth(false)
    setEmail("")
    setToken(null)
 }
  return <AuthContext.Provider value={{isAuth,loginuser,logout,email,token}}>{children}</AuthContext.Provider>

}

export default AuthContextProvide