import React from 'react'
 import {Navigate} from 'react-router-dom'
 
 const AdminPage = () => {
  const isAdmin=false;
  if(!isAdmin){
    return <Navigate to='/' />
  }
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage