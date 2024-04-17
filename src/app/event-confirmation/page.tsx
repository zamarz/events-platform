"use client";

import { createGoogleEvent } from "../utils/api";

const EventConfirmation = () => {
  //will need integration with Google Calendar

  const eventId = sessionStorage.getItem("eventId");
  const eventName = sessionStorage.getItem("name");
  const startTime = sessionStorage.getItem("startTime");

  const eventDataToSend = {
    eventName: eventName,
    summary: null,
    startDateTime: startTime,
    endDateTime: null,
  };

  const eventDataToSend2 = {
    eventName: "testing name",
    summary: "testingSummary",
    startDateTime: "April 5, 2024",
    endDateTime: "April 6, 2024",
  };

  // Example call
  createGoogleEvent(eventDataToSend2);

  return (
    <div>
      <div>
        <h2>
          Great, you're all signed up for {eventName} which begins on{" "}
          {startTime}!
        </h2>
        <button className="button" onClick={() => createEvent(eventDataToSend)}>
          Add to your Google Calendar
        </button>
      </div>
    </div>
  );
};

export default EventConfirmation;
