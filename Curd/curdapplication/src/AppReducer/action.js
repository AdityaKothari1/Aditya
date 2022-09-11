import { GET_BOOK_REQUEST } from "./actiontypes"

import * as types from "./actiontypes"
import axios from "axios"
const getBooks=(params)=>(dispatch)=>{
     dispatch({type:types.GET_BOOK_REQUEST})
     return axios.get('http://localhost:8000/books',params).then((res)=>{
        return dispatch({type:types.GET_BOOK_SUCESS,payload:res.data})
     }).catch((err)=>{
        dispatch(
            {type:types.GET_BOOK_FAILURE}
        )
     })
}
const editBooks=(id)=>(dispatch)=>{
    dispatch({type:types.EDIT_BOOK_REQUEST})
    return axios.get(`http://localhost:8000/books/${id}`).then((res)=>{
       return dispatch({type:types.EDIT_BOOK_SUCESS,payload:res.data})
    }).catch((err)=>{
       dispatch(
           {type:types.EDIT_BOOK_FAILURE}
       )
    })
}

const postBooks=(id,payload)=>(dispatch)=>{
           dispatch({type:types.POST_BOOK_REQUEST})
           return axios.patch(`http://localhost:8000/books/${id}`,payload).then((res)=>{
             return dispatch({type:types.POST_BOOK_SUCESS,payload:res.data})
           }).catch((err)=>{
            dispatch({type:types.POST_BOOK_FAILURE})
           })
}

const deleteBooks=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_BOOK_REQUEST})
    return axios.delete(`http://localhost:8000/books/${id}`).then((res)=>{
         dispatch({type:types.DELETE_BOOK_SUCESS,payload:res.data})
    }).catch((err)=>{
       dispatch(
           {type:types.DELETE_BOOK_FAILURE}
       )
    })
}

 
export {getBooks,editBooks,postBooks,deleteBooks}
        