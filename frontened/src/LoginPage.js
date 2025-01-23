import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
const LoginPage = () => {
    const [LoginData,setLoginData]=useState({
        username:'',
        password:''
    })
    //submit function
    const handleLoginSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/login',LoginData);
            const {success,message}= response.data;
            if(success){
                console.log('Login Successfullyy');
            }
            else{
                console.log(message);
            }

        }catch(error){
            console.log(error);
        }
    setLoginData({
        username:' ',
        password:' '
    })
    }
    const handleLoginChange=(e)=>{
        const {name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" 
        name="username"
        placeholder='Username...'
        value={LoginData.username}
        onChange={handleLoginChange}
        required
        />
        <input type="password" 
        name="password"
        placeholder='Password...'
        value={LoginData.password}
        onChange={handleLoginChange}
        required
        />
        <button type="submit">Login</button>
        <p>Not registered yet?
        <Link to ='./registration'>Register here</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
