import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const RegistrationPage = () => {
    const[registrationData,SetRegistrationData]=useState({
        username:'',
        password:''
    })
    const handleRegistrationChange=(e)=>{
          const[name,value]=e.target;
SetRegistrationData((prevData)=>({
    ...prevData,
    [name]:value
}));
    }
    const handleRegistrationSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('https://localhost:8000/register',registerData);
            console.log(response.data);
        }catch(error){
            console.log(Error);
        }
    }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleRegistrationSubmit}>
           <input type="text" 
           name='username'
           value={registrationData.username}
            placeholder='Username'
            onChange={handleRegistrationChange}
                required
            />
           <input type='Password' 
           name='password'
           value={registrationData.password}
            placeholder='Username'
            onChange={handleRegistrationChange}
                required
            />
      <button type='submit'>Register</button>
      <p>Already Registered
      <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  )
}

export default RegistrationPage
