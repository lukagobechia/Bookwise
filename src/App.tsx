// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Login from './components/login-form/login';
import Signup from './components/signup-form/signup';
import Home from './components/home/Home';
import About from './components/about/About';
import User from './components/Roles/user-page/User';
import Admin from './components/Roles/admin-page/Admin';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/user' element={<User />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
