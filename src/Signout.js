import { Dialog } from '@mui/material'
import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const Signout = ({setrefresh,refresh,signoutopen,setsignoutopen}) => {
    const style={
        width:"500px",
        height:"300px",
    }
    const name=window.localStorage.getItem("username")
    const email=window.localStorage.getItem("email")
    const signstate=()=>{
        window.localStorage.removeItem("loginn");
        window.localStorage.removeItem("userid")
        window.localStorage.removeItem("email")
        window.localStorage.removeItem("username")
        setrefresh(!refresh)}
  return (

    <Dialog
    PaperProps={{ sx: style }}
    open={signoutopen}>
        <div className='signoutcontainer'>
            <div> <CloseOutlinedIcon onClick={()=>setsignoutopen(!signoutopen)}/></div>
            <h3>{name}</h3>
            <p>{email}</p>
            <button className='signoutbtn' onClick={()=>signstate()}>Signout</button>
        </div>
    </Dialog>
    )
}
