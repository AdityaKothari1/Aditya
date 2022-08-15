import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Citycard from "../Components/Citycard";


function getData({countryname}) {
    return fetch(`http://localhost:5000/cities?country=${countryname}`).then((res) => res.json());
  }
  

function Countries(){
 const peram=useParams()
 const [data, setData] = useState([]);
 const navigate=useNavigate()

 useEffect(() => {
   getData({countryname:peram.name}).then((res) => {
     setData(res);
   });
 }, [peram.name]);
 
    return(
          <div>
            <button onClick={()=>navigate(-1)}>Back</button>
               <table>
        <tbody>
          <th>Id</th>
          <th>Name</th>
          <th>Population</th>
          <th>Country</th>

          {data.map((item) => (
            <Citycard
              name={item.name}
              population={item.population}
              id={item.id}
              country={item.country}
            />
          ))}
        </tbody>
      </table>
          </div>
    )
}
export default Countries