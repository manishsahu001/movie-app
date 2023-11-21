import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({Component}) => {
  const token = Cookies.get('login');
  console.log(token)
  return (
    <>
      {token ? <Component /> : <Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoute