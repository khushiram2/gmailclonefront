import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Api } from './globalapi';

export const Signup = () => {
  const navigate=useNavigate()
  const [user,setuser]=useState({
    name:"",
    email:"",
    password:"",
    reenterpassword:""
  }) 


  const {name,email,password,reenterpassword}=user
  const handlechange=(e)=>{
    const newuser={
      ...user,
      [e.target.name]:e.target.value
    }
    setuser(newuser);

  }
 
  const createuser=()=>{
    axios.post(`${Api}/register`,{user})
    .then((res)=>{
      if(res.data==="user created sucessfully"){
        alert("user created sucessfully now you can log in")
      }else if(res.data==="user already exists"){
        alert("use a different email this email already exists in our database")
      }
    })
    .then(()=>setuser({
      name:"",
      email:"",
      password:"",
      reenterpassword:""
    }))
  }

  return (
    <div className='logincontainer'>
      <div className='logincard' >
        <h1>Login</h1>
        <input type='name' value={name} onChange={(e)=>handlechange(e)} name='name' placeholder='enter your name' />
        <input type='email' value={email} onChange={(e)=>handlechange(e)} name='email' placeholder='enter your email' />
        <input type='password' value={password} onChange={(e)=>handlechange(e)} name='password' placeholder='enter your password' />
        <input type='password' value={reenterpassword} onChange={(e)=>handlechange(e)} name='reenterpassword' placeholder='re-enter your password' />
        <button onClick={() =>{console.log(user);createuser()}}>Register</button>
        <div>Or</div>
        <button onClick={() => { navigate("/login"); }}>Login</button>

      </div>
    </div>
  )
}
