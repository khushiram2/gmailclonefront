import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Api } from './globalapi'
import { ArrowBack, DeleteForever } from '@mui/icons-material'

export const SingleEmail = ({ sidebarOpen }) => {
  const { id } = useParams()
  const email = window.localStorage.getItem("email")
  const userid = window.localStorage.getItem("userid")
  const [nameOfReciever, setNameOfreciever] = useState("")
  const [senderName, setSenderName] = useState("")
  const [mailType, setMailType] = useState("")
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [senderuserid,setsenderuserid]=useState("")


  const checkTypeOfMail = () => {
    if (email == data.to) {
      setMailType("recieved")
    } else if (data.type === "draft") {
      setMailType("draft")
    } else if (userid === data.userid) {
      setMailType("sent")
    } else {
      setMailType("")
    }
  }


  useEffect(() => {
    const fetching = async () => {
      try {
          const res = await axios.get(`${Api}/email/${id}`)
          setData(res.data.email) 
          console.log(res.data.email) 
          setNameOfreciever(res.data.nameOfReciever)
          setsenderuserid(res.data.email.userid)
        if(mailType==="recieved"){
          const res2 = await axios.get(`${Api}/username/${senderuserid}`)
          setSenderName(res2.data)
        }


      } catch (err) {
        console.log(err)
      }

    }
    fetching()
    checkTypeOfMail()
  }, [])


  const deleteSingleMailById = () => {
    try {
      if(data.senderbin===true||data.recieverbin===true){
        axios.delete(`${Api}/permanent/delete/${data._id}`)
      }else if(data.type==="draft"){
        axios.delete(`${Api}/draft/permanent/delete/${data._id}`)
      }else{
        axios.put(`${Api}/email/bin/${data._id}`, { mailType: mailType, bin: true })
      }
     
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div style={sidebarOpen ? { padding: "20px", marginTop: "60px", marginLeft: 250 } : { padding: "20px", marginTop: "60px", width: "100%" }}>
      <div>
        <ArrowBack onClick={() => { navigate(-1); setMailType(""); setSenderName("") }} color='action' fontSize='small' />
        <DeleteForever color='action' onClick={() => deleteSingleMailById()} fontSize='small' style={{ marginLeft: "50px" }} />
      </div>
      <div>
        <p style={{ fontSize: "24px" }}>{data.subject}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img style={{ borderRadius: "50%" }} src='https://lh3.googleusercontent.com/a/default-user=s40-p' alt="pic" />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>{mailType === "sent"||"draft" ?  nameOfReciever :senderName}
            <span>&nbsp;&#60; {mailType === "recieved" ? data.from : data.to}&#62;</span>
          </p>
        </div>
        <div style={{ marginLeft: "auto" }}>
          {new window.Date(data.date).getDate()}&nbsp;
          {new window.Date(data.date).toLocaleString("default", {
            month: "long",
          })}&nbsp;
          {new window.Date(data.date).getFullYear()}
        </div>

      </div>
      <div>
        <p>
          {data.content}
        </p>
      </div>
    </div>
  )
}
