

import axios from "axios"
import * as types from "./actionstypes"


const userLogin=(payload)=>(dispatch)=>{
     dispatch({type:types.LOGIN_REQUEST})
     return axios.post("https://reqres.in/api/login",payload).then((res)=>{
        return dispatch({
            type:types.LOGIN_SUCESS,
            payload:res.data.token
        })
     }).catch((err)=>{
        dispatch({
            type:types.LOGIN_FAILURE
        })
     })
}
export {userLogin}