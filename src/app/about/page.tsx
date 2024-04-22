import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Run together",
  description: "Find your next running group",
};

const About = () => {
  return (
    <section className="flex items-center justify-center mx-auto container w-full min-h-screen">
      <div className="flex flex-col justify-center mx-auto items-center">
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Image
            src={"/assets/running-legs.jpg"}
            alt="An image of a person running, with only their legs displayed."
            sizes="300px"
            priority={true}
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <h2 className="text-lg md:text-2xl mx-auto py-6 text-pretty px-3">
          About
        </h2>
        <p className="py-4 text-pretty mx-auto px-3">
          This is a project that looks to bring the running community closer
          together by allowing them to sign up to running events. The
          administrators of the site can create events which users can sign up
          to. The project uses the Eventbrite API for these actions.
        </p>

        <button className="button">
          <Link
            className="button"
            href="https://github.com/zamarz/events-platform"
            target="_blank"
          >
            View code on GitHub
          </Link>
        </button>
      </div>
    </section>
  );
};

export default About;
