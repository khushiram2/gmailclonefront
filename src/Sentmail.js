import React, { useEffect, useState } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
import axios from 'axios'
export const Sentmail = ({sidebarOpen}) => {
const [sentmail,setsentmail]=useState([])
const id= window.localStorage.getItem("userid")
useEffect(()=>{
axios.get(`${Api}/sentmails/${id}`)
  .then((res)=>setsentmail(res.data))
},[])
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={sentmail}/>
    </div>
  )
}
