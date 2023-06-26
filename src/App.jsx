import React, { useState } from 'react';

function getRandomPhoto() {
  const photos = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return photos[Math.floor(Math.random() * photos.length)]
}

function App() {
  const [photos, setPhotos] = useState([]);

  const handleClick = () => {
    setPhotos([...photos, getRandomPhoto()])
  };

  return (
    <div>
      <h1>photogram</h1>
      <button onClick={handleClick}>Add Photo</button>
      <div>
        <h1>{photos}</h1>
      </div>
    </div>
  );
}

export default App;
