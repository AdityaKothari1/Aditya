import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Citycard from "../Components/Citycard";

function getData({sortBy,page}) {
  return fetch(`http://localhost:5000/cities?_sort=population&_order=${sortBy}&_page=${page}&_limit=5`).then((res) => res.json());
}

 
 const getsort=(data)=>["asc","ASC","desc","DESC"].includes(data)?data:"ASC"


function Home() {
  const [data, setData] = useState([]);
  const [searchPeram,setSearchPeram]=useSearchParams()
  const sort=getsort(searchPeram.get("sortBy"))
  const [sortBy,setSort]=useState(sort)
  const init= Number(searchPeram.get("page"))||1
  const[page,setPage]=useState(init)
  useEffect(() => {
    getData({sortBy,page}).then((res) => {
      setData(res);
    });
  }, [sortBy,page]);
  
   useEffect(()=>{
    setSearchPeram({page,sortBy})
   },[page,sortBy])
  return (
       
    <div>
       <button
       onClick={()=>setSort(sortBy==="ASC"?"DESC":"ASC")}
       >{sortBy==="ASC"?"Sort In Desending":"Sort in Asending"}</button>
       <button disabled={page===1} onClick={()=>setPage(page-1)}>Perv</button>
       <button>{page}</button>
       <button disabled={page===10} onClick={()=>setPage(page+1)}>NEXT</button>
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
  );
}
export default Home;
