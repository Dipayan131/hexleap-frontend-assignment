import React from "react";
import './card.css';

interface CardProps {
  name: string;
  total_events: string;
  sport: string;
  img: string;
}

const Card: React.FC<CardProps> = (data) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={data.img} alt="Card" />
      </div>
      <div className="card-info">
        <div className="team-name" style={{fontSize: '20px'}}><h2>{data.name}</h2></div>
        <div className="sport-details">
          <div className="events">
            <p style={{fontSize : '14px', fontWeight: '500', opacity: '0.9'}}>Total Events</p>
            <h3 style={{fontSize: '17px', fontWeight: '700'}}>{data.total_events}</h3>
          </div>
          <div className="sport-name">
            <p style={{fontSize : '14px', fontWeight: '500', opacity: '0.9'}}>Sport</p>
            <h3 style={{fontSize: '17px', fontWeight: '700'}}>{data.sport}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
