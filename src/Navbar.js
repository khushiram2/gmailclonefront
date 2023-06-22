import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { logo } from './logo';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Signout } from './Signout';
const Nav= styled(AppBar)({
    background:" rgb(245, 245, 245)",
    boxShadow:"none"
})

export const Navbar = ({login,refresh,setrefresh,setlogin,sidebarOpen,setSidebarOpen}) => {
    const [signoutopen,setsignoutopen]=useState(false)
  return (
    <Nav className='appbar' position='fixed'>
        <Toolbar>
            <MenuIcon className='menuicon' onClick={()=>setSidebarOpen(!sidebarOpen)} color='action'/> 
            <img className='logo' src={logo} alt="logo"/>
            <div className='searchEmailContainer'>
                <SearchIcon color='action'/>
                <input type='text' id='searchEmail' placeholder='Search mail'/>
                <TuneIcon color='action'/>
            </div>

            <div className='utilities'>
                <HelpOutlineIcon style={{marginLeft:20}} color='action'/>
                <SettingsOutlinedIcon style={{marginLeft:20}} color='action'/>
                <AppsOutlinedIcon style={{marginLeft:20}} color='action'/>
                <AccountCircleOutlinedIcon onClick={()=>setsignoutopen(!signoutopen)} style={{marginLeft:20}} color='action'/>
            </div>
        </Toolbar>
        <Signout setlogin={setlogin} refresh={refresh} setrefresh={setrefresh} login={login} setsignoutopen={setsignoutopen} signoutopen={signoutopen}/>
    </Nav>
  )
}
