import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from './globalapi'

export const Login = ({refresh,setrefresh,login}) => {
    const navigate=useNavigate()
    const [lg,setlg]=useState({})
    const handleChange=(e)=>{
      const sendusertologin={
        ...lg,
        [e.target.name]:e.target.value
      }
      setlg(sendusertologin)
    }

    const handleLogin=()=>{
      axios.post(`${Api}/login`,{lg})
      .then((res)=>{
        if(res.status===200){
          window.localStorage.setItem("loginn",true)
          window.localStorage.setItem("userid",res.data.id)
          window.localStorage.setItem("username",res.data.name)
          window.localStorage.setItem("email",res.data.email)
          setrefresh(!refresh) 
        }else{
        alert("incorrect credentials")
        }
      })
      
      
    }
  const checkLogin=window.localStorage.getItem("loginn")
  if(checkLogin){
    if(login==="false"){
  return (
    <div className='logincontainer'>
        <div className='logincard' >
            <h1>Login</h1>
            <input name='email' onChange={(e)=>handleChange(e)} type='email' placeholder='enter your email' />
            <input name='password' onChange={(e)=>handleChange(e)} type='password' placeholder='enter your password'/>
            <button onClick={()=>handleLogin()}>Login</button>
            <div>Or</div>
            <button onClick={()=>navigate("/register")}>Register</button>

        </div>
    </div>
  )
}}else{
  window.localStorage.setItem("loginn",false)
}
}
