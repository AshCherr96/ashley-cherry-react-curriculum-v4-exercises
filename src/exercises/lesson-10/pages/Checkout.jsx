import React from 'react';
import { useNavigate } from 'react-router';

function Checkout() {
  // Initialize the programmatic navigation engine hook
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #ddd',
      }}
    >
      <h2>Checkout Page</h2>
      <p>Review your order details below and complete your transaction.</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        {/* Button to go backward to the previously visited history stack state */}
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          ← Back
        </button>

        {/* Button to navigate directly back to the Home catalog route */}
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Checkout;
