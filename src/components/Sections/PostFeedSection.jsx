import React, { useState, useEffect } from 'react';
import PostItem from '../Items/PostItem';
import './PostFeedSection.css';

const PostFeedSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        // Limit to first 10 posts on client side
        const limitedPosts = data.slice(0, 10);
        setPosts(limitedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="post-feed-loading">
        <div className="loader"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="post-feed-error">
        <h2>Error loading posts</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="post-feed-section">
      <h1>Recent Posts</h1>
      <div className="post-feed-list">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))
        ) : (
          <p className="no-posts">No posts found</p>
        )}
      </div>
    </div>
  );
};

export default PostFeedSection;
