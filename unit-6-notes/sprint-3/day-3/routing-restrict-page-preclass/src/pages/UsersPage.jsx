import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function getUsers(){
    return fetch(`https://reqres.in/api/users`).then((res)=>console.log(res)).catch((error)=>console.log(error))

}

const UsersPage = () => {
    const [data,setData]=useState({});
    const {isAuth}=useContext(AuthContext)
    useEffect(()=>{
        getUsers().then((res)=>{
            console.log(res);
            setData(res)
        })
    },[])
  return (
    <div>UsersPage
        {data?.data?.map((item)=>{
            return (
                <div>
                    <Link ></Link>
                </div>
            )
        })}
    </div>
  )
}

export default UsersPage