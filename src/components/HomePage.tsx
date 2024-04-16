import Image from "next/image";
import EventsList from "./EventList";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex items-center justify-center space-x-4 bg-tertiary-alt">
        <div className="px-4 py-4">
          <h1 className="font-bold lg:text-2xl">Join today. Run tomorrow.</h1>
          <p className="py-4">
            Register and get access to hundreds of running groups near you.
          </p>
          <button className="button">Sign up</button>
        </div>

        <Image
          src={"/assets/running-arrow.jpg"}
          alt="An image of people running in an arrow formation, taken from above."
          width={500}
          height={500}
          priority={true}
          layout="responsive"
          className="mx-auto"
        />
      </div>
      <div className="pt-7 flex justify-between w-full mx-auto py-5">
        <h3 className="text-2xl">Find your next running event</h3>
        <h4 className="text-xl text-primary font-semibold hover:text-tertiary-light">
          <Link href="/events">See All Events</Link>
        </h4>
      </div>

      <EventsList />
    </section>
  );
};

export default HomePage;
