import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { currentUser } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <img src="/logo.png" alt="Gazo Logo" className="h-8 w-8" />
          </div>
          <div>
            <Link to="/" className="text-xl font-bold text-gray-900">Gazo</Link>
            <p className="text-sm text-gray-600">We make your kitchens safe</p>
          </div>
        </div>
        
        {currentUser && (
          <div className="flex items-center">
            <div className="mr-4 text-right">
              <p className="text-sm font-medium">{currentUser.email}</p>
              <p className="text-xs text-gray-500">Smart Gas Safety System</p>
            </div>
            <button 
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;