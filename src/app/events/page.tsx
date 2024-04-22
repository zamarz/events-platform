import EventsList from "@/components/EventList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

const Events = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="text-2xl font-semibold py-7">
        <h1>All Events</h1>
      </div>
      <div className="w-full min-h-screen">
        <EventsList />
      </div>
    </section>
  );
};

export default Events;
