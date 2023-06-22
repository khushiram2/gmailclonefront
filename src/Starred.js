import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
import axios from 'axios'
export const Starred = ({sidebarOpen}) => {
const [starred,setstarred]=useState([])
const id= window.localStorage.getItem("userid")
const email= window.localStorage.getItem("email")
  useEffect(()=>{
    axios.post(`${Api}/starredmails/${id}`,{email:email})
    .then((data)=>setstarred(data.data))
  },[])
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={starred}/>
    </div>
  )
}
