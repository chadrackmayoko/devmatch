import React, { useState } from "react";
import { Link } from "react-router-dom";


function DevlopperCard ({dev}) {

    const [likes, setLikes] = useState(0);
    return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{dev.name}</h2>
        <p className="text-gray-500">{dev.stack}</p>
        <p className="text-sm mt-2">{dev.bio}</p>
        <Link to={`/profil/${dev.id}`} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Voir Profil
        </Link>
    </div>

    )
}

export default DevlopperCard;