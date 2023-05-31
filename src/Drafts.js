import React from 'react'
import { useEffect, useState } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Drafts = ({sidebarOpen}) => {
  const [drafts,setdrafts]=useState([])
  useEffect(()=>{
    fetch(`${Api}/drafts`,{ method:"Get"})
    .then((res)=>res.json())
    .then((data)=>setdrafts(data))
  },[])
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={drafts} />
    </div>
  )
}
