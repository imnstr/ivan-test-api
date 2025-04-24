import React from 'react';
import './PostItem.css';

const PostItem = ({ post }) => {
  if (!post) {
    return <div className="post-item post-item-empty">No post data available</div>;
  }

  return (
    <div className="post-item">
      <div className="post-info">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
