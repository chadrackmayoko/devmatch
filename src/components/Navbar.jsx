import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">DevMatch </Link>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }>Accueil</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }>À propos</NavLink>
            <NavLink to="/devs" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>
                Développeurs
            </NavLink>
             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>
                Contact
            </NavLink>
            
        </div>
      </div>
    </nav>
  );
}

export default Navbar;