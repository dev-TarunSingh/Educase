import React from 'react'
import './index.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
  return (
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
