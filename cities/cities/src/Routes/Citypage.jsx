import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Citycard from "../Components/Citycard";


function getData({id}) {
    return fetch(`http://localhost:5000/cities/${id}`).then((res) => res.json());
  }


function City(){
 const {id}=useParams()
const [data,setData]=useState([])
 useEffect(()=>{
      getData({id}).then((res)=>{
         setData(res)
      })
 },[id])


    return(
        <div>
            <table>
                <tr>
                    <th>Info   
                    </th>
                    <th>Value</th>
                </tr>
                <tr>
                <td>Id</td>
                <td>{data.id}</td>
                </tr>
                <tr>
                <td>Name</td>
                <td>{data.name}</td>

                </tr>
                <tr>
                <td>Population</td>
                <td>{data.population}</td>

                </tr>
                <tr>
                <td>Country</td>
                <td>{data.country}</td>

                </tr>
            </table>
        </div>
    )
}
export default City