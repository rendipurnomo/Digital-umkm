import { Link } from 'react-router-dom';
import '../styles/form.css';
import { useLogin } from '../services/useLogin';
import { useState } from 'react';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, login } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  };

  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={onSubmit}>
        
          <input
            required
            type="email"
            className="input"
            placeholder="Email"
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            className="input"
            placeholder="Password"
            disabled={isLoading}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button className="form-btn" disabled={isLoading}>{isLoading ? 'Loading...' : "Log in"}</button>
      </form>
      <p className="sign-up-label">
        Don't have an account?
        <Link to={'/register'} disabled={isLoading}>
          <span className="sign-up-link">Sign up</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
