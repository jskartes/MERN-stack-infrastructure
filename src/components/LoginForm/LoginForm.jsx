import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

const LoginForm = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('');

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    setError('');
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Login failed -- try again');
    }
  }

  return (
    <div>
      <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            required
            type='text'
            name='email'
            value={credentials.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
      <p className='error-message'>&nbsp;{error}</p>
    </div>
  );
}

export default LoginForm;
