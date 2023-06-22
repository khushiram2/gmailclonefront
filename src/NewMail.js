import React, { useState} from 'react'
import Dialog from '@mui/material/Dialog';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { Api } from './globalapi';
import axios from 'axios';



export const NewMail = ({ newmailOpen, setNewmailOpen }) => {
 
    const userid=window.localStorage.getItem("userid")
    const email=window.localStorage.getItem("email")
    const newmailStyle = {
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: "8px 8px 0 0 ",
        height: "90%",
        width: "80%"
    }
    const [data, setData] = useState({})

    const postcall = async (data) => {
        await axios.post(`${Api}/sentmails`, {email:data})
        setData({})
    }

    const postDraft = (data1) => {
        if (data1.subject != ""){
            fetch(`${Api}/drafts/post`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...data1,
                type:"draft"
                })
            }).then((res) => res.json())
                .then(() => setNewmailOpen(!newmailOpen))
        }
    }
    const sendmail = async (e) => {
        await postcall(data)
        await setNewmailOpen(!newmailOpen)
        setData({});
        //         e.preventDefault();
        //         if (window.Email) {
        //             window.Email.send({
        //                Host: "smtp.elasticemail.com",
        //                 Username: process.env.username,
        //                 Password: process.env.password,
        //                 port: process.env.port,
        //                 To: data.to,
        //                 From: "khushiramrajliwal@gmail.com",
        //                 Subject: data.subject,
        //                 Body: data.content 
        //             }).then(
        //                 message => console.log(message)
        //             )
        // ;
        //         }

    }





    const valueChanged = (e) => {
        const n = {
            ...data,
            userid: userid,
            from: email,
            bin: "false",
            date: new Date(),
            senderbin:false,
            recieverbin:false
        }
        n[e.target.id] = e.target.value
        setData(n)
    }
    return (
        <Dialog
            PaperProps={{ sx: newmailStyle }}
            open={newmailOpen}
        >
            <div className='newmailHeader'>
                <div>New Message</div>
                <div>
                    <CloseOutlinedIcon onClick={() => postDraft(data)} />
                </div>
            </div>
            <div className='recipientAndSubject'>
                <input className='same' type='email' id='to' onChange={(e) => valueChanged(e)} placeholder='Recipient' />
                <input className='same' type='text' id='subject' onChange={(e) => valueChanged(e)} placeholder='Subject' />
            </div>
            <div className='textfield' >
                <textarea onChange={(e) => valueChanged(e)} id='content' className='newmailContent'>

                </textarea>
            </div>
            <div className='newmailFooter'>
                <Button className='sendbutton'
                    variant='filled'
                    onClick={(e) => sendmail(e)}
                >Send</Button>
                <DeleteForeverOutlined onClick={()=>setNewmailOpen(!newmailOpen)} color='action' />
            </div>


        </Dialog>
    )
}
