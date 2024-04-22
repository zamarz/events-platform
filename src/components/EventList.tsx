"use client";

import { getEventsId } from "@/app/utils/api";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Loading from "@/app/loading";
import { Event, getEventsIdType } from "@/app/types/types";

const EventsList = () => {
  const [eventsData, setEventsData] = useState<getEventsIdType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getEventsId()
      .then((data: getEventsIdType) => {
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
    <section className="w-full mx-auto container">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto gap-4 py-3">
        {eventsData ? (
          eventsData.events.map((event: Event) => {
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
