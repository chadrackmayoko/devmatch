import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DevlopperCard from './components/DevelopperCard'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { DevProfile } from './pages/DevProfile'
import  {DevsList}  from './pages/DevsList'
import { Contact } from './pages/Contact'

function App() {

  return (
  <>
        <Navbar />
        <main className="p-4"> 
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/profil/:id" element={<DevProfile/>}/>
          <Route path="/devs" element={<DevsList />} />
          <Route path="/contact" element={<Contact />} />

    </Routes>
        </main>
      
     
    </>
  )
}

export default App
