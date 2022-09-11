

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { deleteBooks, getBooks } from '../AppReducer/action'

function Books() {
    const books=useSelector(state=>state.AppReducer.books)
     const dispatch=useDispatch()
     const [searchPeram,setSearchperam]=useSearchParams()
     const [catageory,setCategory]=useState(searchPeram.getAll("category")||[])
     const[sortBy,setSortBy]=useState(searchPeram.get("sortBy")||"")
 
     const location=useLocation()
    useEffect(()=>{
        if(catageory||sortBy){
            const getpearam={
                params:{
                    category:catageory,
                    _sort: "release_year",
                    _order:sortBy
                
                }
               }
            setSearchperam({category:catageory,sortBy:sortBy})
            dispatch(getBooks(getpearam))
        }
    },[dispatch,catageory,sortBy,location.search])
  
    const handleDelete=(id)=>{
         dispatch(deleteBooks(id)).then((res)=>{
              dispatch(getBooks())
         })
    }
   const handleChange=(e)=>{
          const newcategory=[...catageory]
          if(newcategory.includes(e.target.value)){
            newcategory.splice(newcategory.indexOf(e.target.value),1)
          }
          else{
            newcategory.push(e.target.value)
          }
           setCategory(newcategory)
   }
    const handleSort=(e)=>{
        setSortBy(e.target.value)
    }
       
  return (<>
          <div>
               <h4>Filter</h4>
                <div>
                    <input type="checkbox" value="Novel"
                      checked={catageory.includes("Novel")}
                     onChange={handleChange}
                    />
                    <label >Novel</label>
                </div>
                <div>
                    <input type="checkbox"
                     value="Thriller"
                     checked={catageory.includes("Thriller")}
                     onChange={handleChange}
                    />
                    <label >Thriller</label>
                </div>
                  <h4>sort</h4>
                  <div>
                  <input type="radio"
                    value="asc"
                    defaultChecked={sortBy==="asc"}
                    name="sortBy"
                    onChange={handleSort}
                  />
                  <label >Asending</label>
                  </div>
                  <div>
                  <input type="radio"
                   value="desc"
                   name="sortBy"
                   defaultChecked={sortBy==="desc"}
                   onChange={handleSort}
                  />
                  <label >Desending</label>
                  </div>
          </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>{
        books&&books.map((item)=>
            <div>
                 <h1>{item.author}</h1>
                  <p>{item.book_name}</p>
                  <p>{item.category}</p>
                   <p>{item.release_year}</p>
                   <Link to={`books/${item.id}/edit`}>
                    <button>Edit</button>
                   </Link>
                   <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
         )
        }</div>
                       </>
  )
}

export default Books