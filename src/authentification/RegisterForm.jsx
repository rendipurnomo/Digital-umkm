import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import { useSignup } from '../services/useSignup';

const RegisterForm = () => {
  const { signup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = ({ username, email, password }) => {
    signup(
      { username, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <div className="form-container-register">
      <p className="title">Register</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)} {...errors}>
        <div className="input-group">
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
          <input
            type="username"
            className="input"
            placeholder="Username"
            disabled={isLoading}
            {...register('username', { required: 'Username is required' })}
          />
        </div>
        <div className="input-group">
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <input
            type="email"
            className="input"
            placeholder="Email"
            disabled={isLoading}
            {...register('email', {
              required: 'Email is required',
              pattern: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            })}
          />
        </div>
        <div className="input-group">
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
          <input
            type="password"
            className="input"
            placeholder="Password"
            disabled={isLoading}
            {...register('password', {
              required: 'Password is required',
              minLength: 6,
              message: 'Password must be at least 6 characters',
            })}
          />
        </div>
        <div className="input-group">
          {errors.confirmpassword && (
            <span className="error">{errors.confirmpassword.message}</span>
          )}
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            disabled={isLoading}
            {...register('confirmpassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === getValues('password') || 'Passwords need to match',
            })}
          />
        </div>
        <button className="form-btn" disabled={isLoading}>Register</button>
      </form>
      <p className="sign-up-label">
        Al ready have an account?
        <Link to={'/login'}>
          <span className="sign-up-link">Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
