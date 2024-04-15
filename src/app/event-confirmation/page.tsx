import React from "react";

const EventConfirmation = () => {
  //needs props for name and date
  //will need integration with Google Calendar

  return (
    <div>
      <div>
        <h2>
          Great, you're all signed up for EVENT NAME which begins on DATE!
        </h2>
        <button className="button">Add to your Google Calendar</button>
      </div>
    </div>
  );
};

export default EventConfirmation;
