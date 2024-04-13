import {AuthContext} from '../context/AuthContext'
import { useContext } from 'react'


const Navbar = () => {
    
    const arr=[{
        id:1,
        title:"Home",
    },
    {
        id:2,
        title:"Products"
    },
    {
        id:3,
        title:"Contacts"
    },
    {
        id:4,
        title:"About us"
    }
]

const value=useContext(AuthContext)
const {login,logOut,authState}=value;
  return (
    <div>

    <div style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
        {arr.map((el)=>(
            <div key={el.id}>
                <p>{el.title}</p>
            </div>
        ))}
    </div>
    <h1>Auth status : {authState?" user is Authenticated":" user is not Authenticated"}</h1>
    
    </div>
  )
}

export default Navbar