import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

function Navbar(){
 const {isAuth,email,token,logout}=useContext(AuthContext)
 console.log(email,token)
    return(
        <div>
           <Link to="/">Home</Link>
           {isAuth?<button onClick={()=>logout()}>Logout</button>:<Link to="/login">Login</Link>}

          
           {isAuth &&
            <div>
            <li>Email:-{email}</li>
            <li>Token:-{token}</li>
           </div>
}
        </div>
    )
}
export default Navbar