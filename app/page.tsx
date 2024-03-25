"use client"
import React, {useState} from "react";
import Card from "@/components/card/card";
import './page.css';
import AdCard from "@/components/adCard/adCard";
import Ticket from "@/components/ticket/ticket";
import {sports, ticket} from '../components/data/db.js';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mainClass, setMainClass] = useState("main");

  const handleClick =  () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
    if(darkMode){
      setMainClass("dark")
    }else{
      setMainClass("main")
    }
  }


  return (
    <div className={mainClass}>
      <div className="main1">
        <div className="main1-content">
          <div className="main1-top">
          <h1 style={{fontSize: '30px', marginBottom: '2%', color: 'var(--text-color)'}}>Sports</h1>
          <button  className="mode" onClick={handleClick}>Change Mode</button>
          </div>
          <div className="cards1">
            {sports.map((sport, index) => 
            <Card key= {index} {...sport} />)}
            <AdCard />
          </div>
          <button className="card1-button">Show More</button>
        </div>
      </div>
      <div className="main2">
        <div className="main2-content">
          <h1 style={{fontSize: '50px', color: 'var(--text-color)'}}>Collection Spotlight</h1>
          <p style={{fontSize: '20px', width: '85%', color: 'var(--text-color)'}}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          <div className="ticket">
            {ticket.map((ticket, index) => <Ticket key={index} {...ticket} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
