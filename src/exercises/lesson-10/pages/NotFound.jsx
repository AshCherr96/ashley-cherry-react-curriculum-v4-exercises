import React from 'react';
import { useLocation, Link } from 'react-router';

function NotFound() {
  // Capture the current location immutable window state record
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', color: '#dc3545', marginBottom: '1rem' }}>
        404 - Page Not Found
      </h2>

      {/* Displaying the broken path string cleanly extracted from browser state metadata */}
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Sorry, the route path{' '}
        <code
          style={{
            backgroundColor: '#f8f9fa',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            color: '#d63384',
            fontWeight: 'bold',
          }}
        >
          {location.pathname}
        </code>{' '}
        does not exist on this application server.
      </p>

      {/* Structured link tag safely forcing navigation back to home index layout reset */}
      <Link
        to="/"
        style={{
          color: '#007bff',
          textDecoration: 'underline',
          fontSize: '1.05rem',
        }}
      >
        Return to Safety (Go Home)
      </Link>
    </div>
  );
}

export default NotFound;
