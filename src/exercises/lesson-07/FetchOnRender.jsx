import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllPosts = async () => {
      setIsLoading(true);
      setError('');
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, []); // Empty dependency array runs once on mount

  return (
    <div className="exercise-section">
      <h2>Fetch On Render</h2>

      {isLoading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!isLoading &&
        !error &&
        posts.map((post) => (
          <article key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
    </div>
  );
}

export default FetchOnRender;
