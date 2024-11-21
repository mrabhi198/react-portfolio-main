// src/components/Like.js
import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import './Like.css';
function Like() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem('likes', newLikes);
    // Optionally, send the new like count to a backend service
  };

  return (
    <div className="like-section" onClick={handleLike} style={{ cursor: 'pointer', color: 'white' }}>
      <AiFillLike style={{ marginBottom: '2px' }} /> {likes}
    </div>
  );
}

export default Like;