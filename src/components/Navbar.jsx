import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#3b82f6'
        }}>
          🎬 VibeEditor
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Features
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Pricing
            </a>
            <button
              onClick={onSignIn}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#3b82f6'
        }}>
          🎬 VibeEditor
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Features
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Pricing
            </a>
            <button
              onClick={onSignIn}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#3b82f6'
        }}>
          🎬 VibeEditor
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Features
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Pricing
            </a>
            <button
              onClick={onSignIn}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#3b82f6'
        }}>
          🎬 VibeEditor
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Features
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Pricing
            </a>
            <button
              onClick={onSignIn}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar({ onSignIn }) {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#3b82f6'
        }}>
          🎬 VibeEditor
        </div>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Features
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>
              Pricing
            </a>
            <button
              onClick={onSignIn}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;