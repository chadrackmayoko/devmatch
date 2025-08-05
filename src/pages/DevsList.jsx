import React from 'react'
import data from '../data/devs'
import { Link } from 'react-router-dom'

export const DevsList = () => {
    console.log(data)
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Liste des Développeurs</h1>
      <ul className="grid gap-4">
            {data.map((dev) => (
                <li key={dev.id} className="bg-white p-4 rounded-xl shadow-md hover:bg-gray-50">
                <Link to={`/profil/${dev.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                    {dev.name}
                </Link> 
                    <p className="text-sm text-gray-700">{dev.stack}</p>
                </li>
                
            ))}
      </ul>
    </div>
  )
}
