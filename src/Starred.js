import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Starred = ({sidebarOpen}) => {
const [starred,setstarred]=useState([])

  useEffect(()=>{
    fetch(`${Api}/starredmails`,{ method:"Get"})
    .then((res)=>res.json())
    .then((data)=>setstarred(data))
  },[])


  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={starred}/>
    </div>
  )
}
