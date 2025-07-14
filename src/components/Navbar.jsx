import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <span className="text-3xl">🎬</span>
              <span>VibeEditorAI</span>
            </div>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                Welcome, {user.username}!
              </span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Pricing
                </a>
                <button 
                  onClick={onSignIn}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Login
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={onSignIn}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;