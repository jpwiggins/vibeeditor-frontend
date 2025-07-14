import React from 'react';

function LoginButton({ onClick, className = '', children = 'Login' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}

export default LoginButton;