"use client";

import { getEventsId } from "@/app/utils/api";

const EventsList = () => {
  //get event list by id to get data
  //return corresponding data for each event with an event card mapped

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <button className="button" onClick={() => getEventsId()}>
        {" "}
        hit me
      </button>
    </section>
  );
};

export default EventsList;
