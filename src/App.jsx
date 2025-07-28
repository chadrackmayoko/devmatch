import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DevlopperCard from './components/DevelopperCard'

function App() {

  return (
  <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-4 flex flex-col items-center gap-4"> 
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Listes des developpeurs</h2>
          <DevlopperCard name="Chadrack Mayoko" stack="Laravel react" location="Quebec, QC"/>
          <DevlopperCard name="Chadrack Mayoko" stack="Laravel react" location="Quebec, QC"/>
          <DevlopperCard name="Chadrack Mayoko" stack="Laravel react" location="Quebec, QC"/>

        </main>
      </div>
     
    </>
  )
}

export default App
