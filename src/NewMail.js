import React, {  useState } from 'react'
import Dialog from '@mui/material/Dialog';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { Api } from './globalapi';



export const NewMail = ({newmailOpen,setNewmailOpen}) => {
    const newmailStyle={
        maxHeight:"100%",
        maxWidth:"100%",
        borderRadius:"8px 8px 0 0 ",
        height:"90%",
        width:"80%"
    }
const [data,setData]=useState({})

const postcall=(data)=>{
    fetch(`${Api}/sentmails` ,{ 
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data),
    }).then((d)=>d.json())
    .then(()=>setData({}))
}

const postDraft=(data)=>{
      fetch(`${Api}/drafts` ,{ 
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data),
    }).then((d)=>d.json())
     .then(()=>setNewmailOpen(!newmailOpen))
    
}


    const sendmail=(e)=>{
        e.preventDefault();
        if(window.Email){
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username :"rajliwalkhushiram@gmail.com",
            Password : "19AFF00A55C3BF5B5654529A78D8C5B79B2F",
            port: 2525,
            To : data.to,
            From : "khushiramrajliwal@gmail.com",
            Subject :data.subject,
            Body : data.content
        }).then(
          message => console.log(message)
        )
        .then(postcall(data))
          .then(() => setNewmailOpen(!newmailOpen))
          .then(()=>setData({}));;      
    }

    }

    const valueChanged=(e)=>{
        const n={
        ...data,
        from:"you",
        bin:"false",
        date:new Date()
        }
        n[e.target.id]=e.target.value
        setData(n)

    }
  return (
   <Dialog
 PaperProps={{sx:newmailStyle}}
   open={newmailOpen}
   >
    <div className='newmailHeader'>
    <div>New Message</div>
    <div>
        <CloseOutlinedIcon onClick={()=>postDraft(data)} />  
    </div>
    </div>
    <div className='recipientAndSubject'>
    <input className='same' type='email' id='to' onChange={(e)=>valueChanged(e)} placeholder='Recipient'/>
    <input className='same' type='text' id='subject' onChange={(e)=>valueChanged(e)} placeholder='Subject'/>
    </div>
    <div className='textfield' >
    <textarea onChange={(e)=>valueChanged(e)} id='content' className='newmailContent'>

    </textarea>
    </div>
    <div className='newmailFooter'>
    <Button className='sendbutton'
    variant='filled' 
    onClick={(e)=>sendmail(e)}
    >Send</Button>
    <DeleteForeverOutlined color='action' /> 
    </div>


   </Dialog>
  )
}
