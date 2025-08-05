import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import devs from '../data/devs'

export const DevProfile = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const dev = devs.find((d) => d.id = parseInt(id));
    if (!dev) {
        return(
            <div className="p-6 text-center text-red-500">
                Devolppeur non trouver
                <br/>
                <button onClick={() => navigate(-1)} className="mt-4 underline text-blue-600"> Retour </button>
            </div>
            
        )
    }
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">{dev.name}</h1>
      <p className="text-gray-600 mb-2">{dev.stack}</p>
      <p className="text-sm mb-4">{dev.bio}</p>
      <p className="text-blue-600 italic">Email : {dev.name.toLowerCase().replace(/ /g, ".")}@devconnect.com</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Retour
      </button>
        <a
  href={`mailto:${dev.email}`}
  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
>
  📧 Contacter
</a>
    </div>
  );
}
