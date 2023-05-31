import React, { useEffect, useState } from 'react'
import { Api } from './globalapi'
import { Listview } from './Listview'
export const Sentmail = ({sidebarOpen}) => {
const [sentmail,setsentmail]=useState([])
useEffect(()=>{
  fetch(`${Api}/sentmails`,{ method:"Get"})
  .then((res)=>res.json())
  .then((data)=>{setsentmail(data)})
},[])
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>
      <Listview data={sentmail}/>
    </div>
  )
}
