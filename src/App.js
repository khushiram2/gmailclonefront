import { useState } from 'react';
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

function App() {
  const [sidebarOpen, setSidebarOpen]=useState(true)
  return (
    <div className="App">
<Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
<Sidebar sidebarOpen={sidebarOpen}/>

<Routes>
  <Route path='/' element={<Navigate replace to="/inbox"/>}/>
  <Route path='/inbox' element={<Email sidebarOpen={sidebarOpen}/>}/>
  <Route path='/starred' element={<Starred sidebarOpen={sidebarOpen}/>}/>
  <Route path='/sentmails' element={<Sentmail sidebarOpen={sidebarOpen}/>}/>
  <Route path='/drafts' element={<Drafts sidebarOpen={sidebarOpen}/>}/>
  <Route path='/bin' element={<Bin sidebarOpen={sidebarOpen}/>}/>
  <Route path='/allmails' element={<Allmails sidebarOpen={sidebarOpen}/>}/>
  <Route path='/404' element={<Notfound sidebarOpen={sidebarOpen}/>}/>
  <Route path="*" element={<Navigate replace to="/404"/>} />

</Routes>
    </div>
  );
}

export default App;
