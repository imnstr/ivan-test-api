import React, { useState, useEffect } from 'react';
import AlbumThumbnailItem from '../Items/AlbumThumbnailItem';
import './AlbumGallerySection.css';

const AlbumGallerySection = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // Fetch albums
        const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!albumsResponse.ok) {
          throw new Error(`HTTP error! Status: ${albumsResponse.status}`);
        }
        const albumsData = await albumsResponse.json();
        
        // Take only first 10 albums
        const firstTenAlbums = albumsData.slice(0, 10);
        
        // Use placehold.co for generating thumbnails
        const albumsWithThumbnails = firstTenAlbums.map(album => {
          return {
            ...album,
            thumbnailUrl: `https://placehold.co/150x150/92c952/fff?text=Image${album.id}`,
            photoTitle: `Album ${album.id}`
          };
        });
        
        setAlbums(albumsWithThumbnails);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="album-gallery-loading">
        <div className="loader"></div>
        <p>Loading albums...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="album-gallery-error">
        <h2>Error loading albums</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="album-gallery-section">
      <h1>Photo Albums</h1>
      
      <div className="album-gallery-grid">
        {albums.length > 0 ? (
          albums.map(album => (
            <AlbumThumbnailItem 
              key={album.id} 
              album={album} 
            />
          ))
        ) : (
          <p className="no-albums">No albums found</p>
        )}
      </div>
    </div>
  );
};

export default AlbumGallerySection;
