import React from 'react';

const Card = (player) => {
  return (
    <div className="card">
      <img src={player.image} alt={player.name} />
      <div className="card-info">
        <h2>{player.name}</h2>
        <p>{player.description}</p>
        <a href={player.link} target="_blank" rel="noopener noreferrer"><button>Learn More</button>    
            </a>
        
      </div>
    </div>
  );
};

export default Card;
