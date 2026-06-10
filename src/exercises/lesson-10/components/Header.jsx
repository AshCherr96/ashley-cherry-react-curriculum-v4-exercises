import React from 'react';
import { NavLink } from 'react-router';

function Header({ isLoggedIn, setIsLoggedIn }) {
  // Dynamic styling function provided by NavLink's style callback
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#007bff' : '#333',
      textDecoration: isActive ? 'underline' : 'none',
      padding: '0.5rem',
    };
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '2px solid #eaeaea',
        backgroundColor: '#fff',
      }}
    >
      <div className="logo">
        <h2 style={{ margin: 0 }}>Routing Demo</h2>
      </div>

      {/* Internal Navigation Menu using NavLink */}
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/checkout" style={navLinkStyle}>
          Checkout
        </NavLink>

        {/* Only show the Account link when logged in */}
        {isLoggedIn && (
          <NavLink to="/account" style={navLinkStyle}>
            Account
          </NavLink>
        )}
      </nav>

      {/* Simple toggle login button to control mock auth state */}
      <div className="auth-controls">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            backgroundColor: isLoggedIn ? '#dc3545' : '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </header>
  );
}

export default Header;
