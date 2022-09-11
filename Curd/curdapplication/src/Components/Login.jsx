import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { userLogin } from '../AuthReducer/action'

function Login() {
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);
    const redirect=location?.state?.data
    const handleSubmit=(e)=>{
          e.preventDefault()
          const payload={
            email:email,
            password:password
          }
          dispatch(userLogin(payload)).then((res)=>{
            navigate(redirect ,{replace:true})
          })
    }

  return (
    <>
 
    <div>Login</div>
      <form onSubmit={handleSubmit}>
            <div>
            <label >Email</label>
            <input type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div>
            <label >Password</label>
            <input type="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <button type='submit'>Login</button>
      </form>
      </>
  )
}

export default Login