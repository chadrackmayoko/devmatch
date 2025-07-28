import React, { useState } from "react";

function DevlopperCard ({name, stack, location}) {

    const [likes, setLikes] = useState(0);
    return (
        <div className="bg-white border rounded-lg shadow p-5 max-w-md w-full">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <button 
                onClick={() => setLikes(likes+1)}
                className="text-red-500 hover:text-red-600"
                >{likes}</button>
            </div>

            <p className="text-gray-600"><strong>{stack}</strong></p>
            <p className="text-gray-600"><strong>{location}</strong></p>
        </div>

    )
}

export default DevlopperCard;