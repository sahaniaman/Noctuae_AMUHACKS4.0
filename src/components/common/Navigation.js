import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm rounded-lg mb-6">
      <div className="px-2 py-3 flex justify-around">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          Dashboard
        </NavLink>
        
        <NavLink 
          to="/stats" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          Statistics
        </NavLink>
        
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;