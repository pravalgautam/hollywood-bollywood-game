import React, { useState,useEffect } from 'react';
import { Client } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { account } from '../appwrite/appwrite';
import './signup.css'



function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  // signup
  const signupUser = async (e) => {
    e.preventDefault();
    const promise = account.create(uuidv4(), user.email, user.password, user.name);
    promise.then(
      function(response) {
        console.log(response);
        navigate("/Game");
      },
      function(error) {
        console.log(error);
      }
    );
  };

  return (

<div className="signup-page">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
        <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
            </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={(e)=>{setUser({
                ...user,email:e.target.value
            })}}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={(e)=>{setUser({
                ...user,password:e.target.value
            })}} />
          </div>
          <button type="submit" onClick={signupUser}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
