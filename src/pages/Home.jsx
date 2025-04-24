import React from 'react';
import UserListSection from '../components/Sections/UserListSection';
import PostFeedSection from '../components/Sections/PostFeedSection';
import AlbumGallerySection from '../components/Sections/AlbumGallerySection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Our API Demo App</h1>
        <p>Browse through our collection of data from JSONPlaceholder</p>
      </header>
      
      <main className="home-content">
        <UserListSection />
        <PostFeedSection />
        <AlbumGallerySection />
      </main>
    </div>
  );
};

export default Home; 