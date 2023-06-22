import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Email } from './Email';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Starred } from './Starred';
import { Sentmail } from './Sentmail';
import { Bin } from './Bin';
import { Drafts } from './Drafts';
import { Allmails } from './Allmails';
import { Notfound } from './Notfound';
import { SingleEmail } from './SingleEmail';
import { Login } from './Login';
import { Signup } from './Signup';
import { Privateroute } from './Privateroute';
function App() {
  const [sidebarOpen, setSidebarOpen]=useState(true)
  const [login,setlogin]=useState(false)
  const [refresh,setrefresh]=useState()
useEffect(()=>{
  const yes=window.localStorage.getItem("loginn")
  setlogin(yes)
},[refresh])
  return (

    <div className="App">

 
{login==="true"?<Navbar refresh={refresh} setrefresh={setrefresh} login={login} setlogin={setlogin} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>:""}
{login==="true"?<Sidebar sidebarOpen={sidebarOpen}/>:""}

<Routes>
<Route path='/' element={<Navigate replace to="/login"/>}/>
<Route path='/login' element={<Login setrefresh={setrefresh} refresh={refresh}  login={login}  />}/>
  <Route path='register' element={<Signup/>}/>
  
   <Route path='/user' element={<Privateroute login={login}/>}>
  <Route path='inbox' element={<Email sidebarOpen={sidebarOpen}/>}/>
  <Route path='starred' element={<Starred sidebarOpen={sidebarOpen}/>}/>
  <Route path='sentmails' element={<Sentmail sidebarOpen={sidebarOpen}/>}/>
  <Route path='drafts' element={<Drafts sidebarOpen={sidebarOpen}/>}/>
  <Route path='bin' element={<Bin sidebarOpen={sidebarOpen}/>}/>
  <Route path='email/:id' element={<SingleEmail sidebarOpen={sidebarOpen} />}/>
  <Route path='allmails' element={<Allmails sidebarOpen={sidebarOpen}/>}/>
  </Route>
  <Route path='/404' element={<Notfound sidebarOpen={sidebarOpen}/>}/>
  <Route path="*" element={<Navigate replace to="/404"/>} />

</Routes>


    </div>
  );
}

export default App;
