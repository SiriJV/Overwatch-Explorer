import React from 'react';
import './HeroCard.scss';

interface HeroCardProps {
  heroName: string;
  heroDescription: string;
  imageUrl: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ heroName, heroDescription, imageUrl }) => {
  return (
    <div className="card">
      {/* <img src={imageUrl} alt={`${heroName} Image`} className="hero-image" /> */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="card-content">
        <h2 className="hero-name">{heroName}</h2>
        <p className="hero-description">{heroDescription}</p>
      </div>
    </div>
  );
};

export default HeroCard;
