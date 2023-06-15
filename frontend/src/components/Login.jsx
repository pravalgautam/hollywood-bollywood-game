import React, { useState } from 'react';
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import "./login.css"
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate('./Profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
            </div>
            <button type="submit" onClick={loginUser}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
