"use client";

import { EventData } from "@/app/types/types";
import { createEvent } from "../app/utils/api";
import { FormEvent, useEffect, useState } from "react";
import { UTCDate } from "@date-fns/utc";
import { formatISO } from "date-fns";

const EventAdder = () => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [utcStart, setUtcStart] = useState("");
  const [utcEnd, setUtcEnd] = useState("");

  const newEventToSend: EventData = {
    event: {
      name: {
        html: `${eventName}`,
      },
      start: {
        timezone: "Europe/London",
        utc: `${utcStart}`,
      },
      end: {
        timezone: "Europe/London",
        utc: `${utcEnd}`,
      },
      currency: "GBP",
    },
  };

  useEffect(() => {
    if (startTime.length >= 16) {
      const startFormTime = formatISO(new UTCDate(startTime));
      setUtcStart(startFormTime.toString());
    }
  }, [startTime]);

  useEffect(() => {
    if (endTime.length >= 16) {
      const endFormTime = formatISO(new UTCDate(endTime));
      setUtcEnd(endFormTime);
    }
  }, [endTime]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createEvent(newEventToSend);
    setEventName("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Add a new event</h2>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            placeholder="Enter a name"
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start:</label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endTime">End:</label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default EventAdder;
