import React from 'react'
import DevlopperCard from '../components/DevelopperCard'
import devs from '../data/devs'

const Home = () => {
  return (
    <>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rencontrez nos développeurs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devs.map((dev) => (<DevlopperCard key={dev.id} dev={dev}/>))}
        </div>
    </div>
    </>
  )
}

export default Home