import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Bin = ({sidebarOpen}) => {
  const [bin, setbin]=useState([])
  useEffect(()=>{
    fetch(`${Api}/bin`,{ method:"Get"})
    .then((res)=>res.json())
    .then((data)=>setbin(data))
  },[])

  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={bin}/>
    </div>
  )
}
