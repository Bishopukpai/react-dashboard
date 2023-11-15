import React from 'react';
import '../App.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login Here</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required placeholder="JohnDoe" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Please enter a strong password"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;