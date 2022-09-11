



import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({children}) {
  const isAuth=useSelector(state=>state.AuthReducer.isAuth)
    const location=useLocation()
  if(!isAuth){
    return <Navigate to="/login" replace state={{data:location.pathname}} />
  }
  return children
}

export default PrivateRoute