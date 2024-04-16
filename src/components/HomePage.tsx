import EventsList from "./EventList";
import Link from "next/link";
import HomeImage from "./HomeImage";

const HomePage = () => {
  // need different image depending on if you are signed in or not...
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <HomeImage />
      <div className="pt-7 flex justify-between w-full mx-auto py-5">
        <h3 className="text-2xl">Find your next running event</h3>
        <h4 className="text-xl text-primary font-semibold hover:text-tertiary-light dark:text-tertiary-light dark:hover:text-primary">
          <Link href="/events">See All Events</Link>
        </h4>
      </div>

      <EventsList />
    </section>
  );
};

export default HomePage;
