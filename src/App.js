import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Intermittent from './pages/Intermittent';
import RunningRecord from './pages/RunningRecord';
function App() {
  const user = {
    name: "Gyagya",
    weight: 80,
    height: 173,
    target: 74,
    deadline: "2023/1/17"
  }
  
  const [userInfo, setUserInfo] = useState(user);
  

  return (
    <div className="App">
      <div>
      <SideBar userInfo={userInfo}/>
      </div>
      <div className="maincontent">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/intermittent" element={<Intermittent />} />
          <Route path="/runningrecord" element={<RunningRecord />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
