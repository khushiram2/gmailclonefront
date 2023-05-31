import React, { useState,useEffect } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Allmails = ({sidebarOpen}) => {
const [allmails,setallmails]=useState([])
  useEffect(()=>{
    fetch(`${Api}/allmails`,{ method:"Get"})
    .then((res)=>res.json())
    .then((data)=>setallmails(data))
  },[])

  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={allmails}/>
    </div>
  )
}
