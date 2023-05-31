import React, { useState, useEffect } from 'react'
import { Api } from './globalapi'
import { useNavigate } from 'react-router-dom';
import { Listview } from './Listview';
export const Email = ({ sidebarOpen }) => {
  const navigate=useNavigate()
  const [inbox, setinbox] = useState([])
  useEffect(() => {
    fetch(`${Api}/inbox`, { method: "Get" })
      .then((res) => res.json())
      .then((data) => setinbox(data))
  }, [])
  // console.log(inbox)
  return (
    <div style={sidebarOpen ? { marginLeft: 250 } : { width: "100%" }}>

     <Listview data={inbox}/>
    </div>
  )
}
