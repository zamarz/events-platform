import EventsList from "@/components/EventList";

const Events = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="text-2xl font-semibold py-7">
        <h1>All Events</h1>
      </div>
      <EventsList />
    </section>
  );
};

export default Events;
