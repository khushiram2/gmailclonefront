import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
import axios from 'axios'
export const Bin = ({sidebarOpen}) => {
  const [bin, setbin]=useState([])
  const id= window.localStorage.getItem("userid")
  const email= window.localStorage.getItem("email")
  useEffect(()=>{
    axios.post(`${Api}/bin/${id}`,{email:email})
    .then((res)=>setbin(res.data))
  },[])

  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={bin}/>
    </div>
  )
}
