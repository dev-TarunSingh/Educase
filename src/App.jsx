import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
