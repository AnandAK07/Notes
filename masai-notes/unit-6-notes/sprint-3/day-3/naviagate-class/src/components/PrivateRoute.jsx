import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    // get the Auth status
    // from Contex Api
    
    const {authdetails}=useContext(AuthContext)
    
    // true 
    // user redirect to home page

    // false
    // login

    if(!authdetails.authState){
        return <Navigate to='/' />
    }

    return children;
}

export default PrivateRoute