import React from "react";

const EventCard = ({ eventInfo }: any) => {
  console.log(eventInfo);
  return (
    <div>
      <div>
        <h2>{eventInfo.name.text}</h2>
        <p>{eventInfo.summary}</p>
        <button className="button">View</button>
      </div>
    </div>
  );
};

export default EventCard;
