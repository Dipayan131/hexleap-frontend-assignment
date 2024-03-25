import react from "react";
import './adCard.css';

export default function AdCard() {
  return (
    <div className="adcard-container">
      <div className="adcard-image">
        <img src="/unnamed (1) 1.jpg" />
        <p>Ad</p>
      </div>
      <div className="card-info">
        <div className="team-name" style={{fontSize: '20px'}}><h2>Advertisement title</h2></div>
        <div className="sport-details">
          <div className="events">
            <p style={{fontSize : '14px', fontWeight: '500'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
