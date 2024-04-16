"use client";
const EventConfirmation = () => {
  //will need integration with Google Calendar

  const eventId = sessionStorage.getItem("eventId");
  const eventName = sessionStorage.getItem("name");
  const startTime = sessionStorage.getItem("startTime");

  return (
    <div>
      <div>
        <h2>
          Great, you're all signed up for {eventName} which begins on{" "}
          {startTime}!
        </h2>
        <button className="button">Add to your Google Calendar</button>
      </div>
    </div>
  );
};

export default EventConfirmation;
