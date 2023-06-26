import './App.css';
import React, { useState } from 'react';
import PhotoShow from './PhotoShow';

function getRandomPhoto() {
  const photos = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return photos[Math.floor(Math.random() * photos.length)];
}

function App() {
  const [photos, setPhotos] = useState([]);

  const handleClick = () => {
    setPhotos([...photos, getRandomPhoto()]);
  };

  const renderedPhotos = photos.map((photo, index) => {
    return <PhotoShow type={photo} key={index} />;
  });

  return (
    <div className="app">
      <h1>photogram</h1>
      <button onClick={handleClick}>Add Photo</button>
      <div className="photo-list">
        {renderedPhotos}
      </div>
    </div>
  );
}

export default App;
