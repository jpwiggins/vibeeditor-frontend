import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('vibeEditorUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        // Optional: Add session expiry check here
        // For now, we'll always restore the session
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('vibeEditorUser');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, customerId) => {
    const userData = {
      email,
      customerId,
      username: email.split('@')[0], // Use email prefix as username
      loginTime: new Date().toISOString()
    };
    
    setUser(userData);
    localStorage.setItem('vibeEditorUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vibeEditorUser');
  };

  const clearAllData = () => {
    setUser(null);
    localStorage.clear();
  };

  const value = {
    user,
    login,
    logout,
    clearAllData,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}