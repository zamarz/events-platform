"use client";

import { createEvent } from "../app/utils/api";

const EventAdder = () => {
  const newEventToSend = {
    event: {
      name: {
        html: "New event testing",
      },
      start: {
        timezone: "America/Los_Angeles",
        utc: "2026-12-01T02:00:00Z",
      },
      end: {
        timezone: "America/Los_Angeles",
        utc: "2026-12-01T05:00:00Z",
      },
      currency: "USD",
    },
  };

  return (
    <section>
      <h2>Event Adder</h2>
      <button className="button" onClick={() => createEvent(newEventToSend)}>
        Click and pray
      </button>
    </section>
  );
};

export default EventAdder;
