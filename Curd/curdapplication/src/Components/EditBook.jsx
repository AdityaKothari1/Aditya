


import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBooks, getBooks, postBooks } from '../AppReducer/action'

function EditBook() {
  const {id}=useParams()
   const[author,setAuthor]=useState("")
   const[bookname,setBookname]=useState("")
   const editbook=useSelector(state=>state.AppReducer.editbook)
   const dispatch=useDispatch()
   const navigate=useNavigate()
  useEffect(()=>{ 
    if(id || editbook.length>0){
        dispatch(editBooks(id))
         setAuthor(editbook.author)
         setBookname(editbook.book_name)
    }
  },[id,editbook.length])
   const handleChange=()=>{
    const payload={
        book_name:bookname,
        author:author
    }
      dispatch(postBooks(id,payload)).then((res)=>{
          dispatch(getBooks()).then((res)=>{
              navigate("/")
          })
      })
   }
   
  return (
       <div style={{display:"flex",flexDirection:"column",width:"30%",gap:"10px",marginTop:"30PX",margin:"auto"}}>
           <input 
             value={author}
             onChange={(e)=>setAuthor(e.target.value)}
           />
            <input value={bookname}
              onChange={(e)=>setBookname(e.target.value)}
            />
            <button onClick={handleChange}>Update</button>
       </div>
  )
}

export default EditBook