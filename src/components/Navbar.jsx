import React from "react";

function Navbar() {
  return (
    <nav className="bg-red shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">DevMatch </a>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Accueil</a>
          <a href="/developers" className="text-gray-700 hover:text-blue-600">Développeurs</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;