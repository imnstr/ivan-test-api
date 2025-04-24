import React from 'react';
import './AlbumThumbnailItem.css';

const AlbumThumbnailItem = ({ album }) => {
  if (!album) {
    return <div className="album-item album-item-empty">No album data available</div>;
  }

  return (
    <div className="album-thumbnail-item">
      <div className="album-thumbnail">
        <img src={album.thumbnailUrl} alt={album.photoTitle} />
      </div>
      <div className="album-info">
        <h3 className="album-title">{album.title}</h3>
      </div>
    </div>
  );
};

export default AlbumThumbnailItem;
