"use client";

import { getEventsId } from "@/app/utils/api";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Loading from "@/app/loading";

const EventsList = () => {
  const [eventsData, setEventsData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEventsId()
      .then((data: any) => {
        setEventsData(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto gap-4 py-3">
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
