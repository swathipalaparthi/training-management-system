import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventCard: React.FC<{
  eventDate: Date;
  eventName: string;
  eventOrganizer: string;
  eventLink: string;
}> = ({ eventDate, eventName, eventOrganizer, eventLink }) => {
  return (
    <div className="event">
      <div className="left-event">
        <h3>{eventDate.getDate()}</h3>
        <span>{monthNames[eventDate.getMonth()]}</span>
      </div>

      <div className="right-event">
        <h4>{eventName}</h4>
        <p>{eventOrganizer}</p>
        <a href={eventLink}>Join the Event Here!</a>
      </div>
    </div>
  );
};

export default EventCard;
