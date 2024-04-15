"use client";

import { getEventsId } from "@/app/utils/api";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventsList = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    getEventsId()
      .then((data: any) => {
        setEventsData(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  //return corresponding data for each event with an event card mapped

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mx-auto gap-2 py-3">
        {eventsData ? (
          eventsData.events.map((event: any) => {
            return <EventCard key={event.id} eventInfo={event} />;
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default EventsList;
