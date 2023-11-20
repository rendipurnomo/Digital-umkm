import React from 'react'
import LoginForm from '../authentification/LoginForm'
import { useUser } from '../services/useUser';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated } = useUser();
  if (isAuthenticated) return <Navigate to="/home" />;
  return (
    <div className='center'>
      <LoginForm />
    </div>
  )
}

export default Login