import React, { useState } from 'react';
import './Login.css';
import Logo from '../../assets/netflix-6850420_1280.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [SignState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (SignState === "Sign Up") {
      if (!name || !email || !password) return alert("Fill all fields");
      localStorage.setItem('user', JSON.stringify({ name, email, password }));
      alert("Account created! Please Sign In.");
      setSignState("Sign In");
      setName('');
      setEmail('');
      setPassword('');
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        navigate('/login'); 
      } else {
        alert("Please Sign Up Now");
      }
    }
  };

  return (
    <div className='login'>
      <img src={Logo} alt='' className='login-logo' />
      <div className='login-form'>
        <h1>{SignState}</h1>
        <form onSubmit={handleSubmit}>
          {SignState === "Sign Up" && (
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>{SignState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {SignState === "Sign In" ? (
            <p>New To Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already Have Account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;