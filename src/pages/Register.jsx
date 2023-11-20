import React from 'react';
import RegisterForm from '../authentification/RegisterForm';
import { useUser } from '../services/useUser';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const { isAuthenticated } = useUser();
  if (isAuthenticated) return <Navigate to="/home" />;
  return (
    <div className="center">
      <RegisterForm />
    </div>
  );
};

export default Register;
