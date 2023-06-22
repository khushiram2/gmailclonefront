import { Navigate, Outlet } from "react-router-dom"
import React from 'react'

export const Privateroute = ({login}) => {
if(login==="true"){
    return <Outlet/>
}else{
    return <Navigate to="/login"/>
}
}
