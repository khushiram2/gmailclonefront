import React from 'react'

export const Notfound = ({sidebarOpen}) => {
  return (
    <div  style={sidebarOpen?{marginLeft:250}:{width:"100%"}}>Notfound</div>
  )
}
