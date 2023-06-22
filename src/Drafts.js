import React from 'react'
import { useEffect, useState } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
import axios from 'axios'
export const Drafts = ({sidebarOpen}) => {
  const [drafts,setdrafts]=useState([])
  const userid=window.localStorage.getItem("userid")

  useEffect(()=>{
    axios.get(`${Api}/drafts/${userid}`)
    .then((res)=>setdrafts(res.data))
  },[])
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview  data={drafts} />
    </div>
  )
}
