import React, { useState, useEffect } from 'react'
import { Api } from './globalapi'
import { useNavigate } from 'react-router-dom';
import { Listview } from './Listview';
import axios from 'axios';
export const Email = ({ sidebarOpen }) => {
  const navigate=useNavigate()
  const [inbox, setinbox] = useState([])
  const email= window.localStorage.getItem("email")
  useEffect(() => {
    axios.post(`${Api}/inbox`, { email:email })
      .then((res) => setinbox(res.data))
  }, [])
  // console.log(inbox)
  return (
    <div style={sidebarOpen ? { marginLeft: 250 } : { width: "100%" }}>

     <Listview data={inbox}/>
    </div>
  )
}
