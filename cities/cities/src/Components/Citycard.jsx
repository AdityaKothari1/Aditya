import { Link } from "react-router-dom"


function Citycard({
    name,population,country,id
}){

    return(
    <tr>
        <td> <Link to={`/city/${id}`}>{id}</Link> </td>
        <td>{name}</td>
        <td>{population}</td>
        <td> <Link to={`/country/${country}`}>{country}</Link> </td>
    </tr>
    )
}
export default Citycard