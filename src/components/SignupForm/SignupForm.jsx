import { useState } from 'react';
import { signup } from '../../utilities/users-service';

const SignupForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      error: ''
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const submittedForm = {...formData};
      delete submittedForm.confirmPassword;
      delete submittedForm.error;
      const user = await signup(submittedForm);
      setUser(user);
    } catch (error) {
      setFormData({
        ...formData,
        error: `Signup failed -- try again. Error: ${error}`
      });
    }
  }

  return (
    <div>
      <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            required
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
          <input
            required
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type='submit'
            disabled={formData.password !== formData.confirmPassword}
          >Sign Up</button>
        </form>
      </div>
      <p className='error-message'>&nbsp;{formData.error}</p>
    </div>
  );
};

export default SignupForm;
