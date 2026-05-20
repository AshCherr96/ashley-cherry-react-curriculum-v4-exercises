import React, { useState } from 'react';
import { getSinglePost } from './api';

function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchClick = async () => {
    setIsLoading(true);
    setError('');
    setPost(null); // Clear previous post while loading new one

    try {
      // Fetching post ID 1
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="exercise-section">
      <h2>Fetch On Click</h2>

      <button onClick={handleFetchClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get post'}
      </button>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>Error: {error}</p>
      )}

      {post && (
        <article style={{ marginTop: '1.5rem' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      )}
    </div>
  );
}

export default FetchOnClick;
