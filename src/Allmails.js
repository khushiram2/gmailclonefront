import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Allmails = ({sidebarOpen}) => {
const [allmails,setallmails]=useState([])
const id= window.localStorage.getItem("userid")
const email= window.localStorage.getItem("email")
  useEffect(()=>{
    axios.post(`${Api}/allmails/get/${id}`,{ email:email})
    .then((res)=>setallmails(res.data))
  },[])

  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={allmails}/>
    </div>
  )
}
