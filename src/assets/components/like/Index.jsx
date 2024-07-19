import React, { useState } from 'react';
import './Index.css';

function SocialMediaPost() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  function counter(){
    counter = 0
  if((likes-dislikes)<0){
    counter = 0;
  return
  }
  return counter = likes - dislikes
  }
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };
  return (
    <div className="post-container">
      <h2>My Social Media Post</h2>
      <p>This is an example of a social media post. You can like or dislike it!</p>
      <div className="buttons">
        
        <span>❤️{counter(likes,dislikes)}</span>
        <div className="buttonss">
        <button onClick={handleLike} className="like-button">Like</button>
        
        <button onClick={handleDislike} className="dislike-button">Dislike</button>
        </div>
        
      </div>
    </div>
  );
}

export default SocialMediaPost;