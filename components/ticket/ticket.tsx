import './ticket.css';
import React from 'react';

interface TicketProps {
    name: string;
    time: string;
    place: string;
    img: string;
}

const Ticket: React.FC<TicketProps> = data => {
  return (
    <div className="ticket-container">
      <div className="ticket-image">
        <img src={data.img} />
      </div>
      <div className="card-info">
        <p>------------------------------------</p>
        <div className="team-name" style={{fontSize: '20px'}}><h2>{data.name}</h2></div>
        <div className="ticket-details">
          <div className="ticket-events">
            <p style={{fontSize : '14px', fontWeight: '600', opacity: '0.9'}}>{data.time}</p>
            <h3 style={{fontSize: '14.5px', fontWeight: '400'}}>{data.place}</h3>
            <button>Take Flight Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;