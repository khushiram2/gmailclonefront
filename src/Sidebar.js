import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { NewMail } from './NewMail';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({sidebarOpen}) => {
    const [newmailOpen,setNewmailOpen]=useState(false)
    const location = useLocation()
   const pathname= location.pathname
   const styles={
    backgroundColor:"rgb(211,227,252)",
    borderRadius:"0 18px 18px 0"
   }
   const style={}

    return (
        <Drawer
        className='sidebar'
            anchor='left'
            open={sidebarOpen}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            variant='persistent'
        >
            <div className='sidebarelements'>
            <div className='compose'>
                <Button className='composebutton' onClick={()=>setNewmailOpen(!newmailOpen)} > <ModeEditOutlinedIcon/> Compose </Button>
            </div>
            <List className='inboxAndAll'>
            <ListItem className='/inbox' style={(pathname==="/inbox")?styles:style}> <InboxOutlinedIcon/>  <Link className='link' to="/inbox" > Inbox </Link> </ListItem>
            <ListItem className='/starred'  style={pathname==="/starred"?styles:style} > <StarBorderOutlinedIcon/> <Link className='link' to="/starred" >  Stared </Link></ListItem>
            <ListItem className='/sentmails'  style={pathname==="/sentmails"?styles:style}> <SendOutlinedIcon/> <Link className='link' to="/sentmails" > Sent mails</Link> </ListItem>
            <ListItem className='/drafts' style={pathname==="/drafts"?styles:style}> <InsertDriveFileOutlinedIcon/> <Link className='link' to="/drafts" >  Drafts </Link> </ListItem>
            <ListItem className='/bin ' style={pathname==="/bin"?styles:style}> <DeleteOutlineOutlinedIcon/> <Link className='link' to="/bin" >  Bin </Link> </ListItem>
            <ListItem className='/allmails' style={pathname==="/allmails"?styles:style}> <EmailOutlinedIcon/> <Link className='link' to="/allmails" >  All mails </Link> </ListItem>
            </List>
            </div>
            <NewMail setNewmailOpen={setNewmailOpen} newmailOpen={newmailOpen}/>
        </Drawer>
    )
}
