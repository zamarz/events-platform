import Image from "next/image";

const HomePage = () => {
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex items-center justify-center space-x-4 bg-tertiary-light">
        <div className="px-4 py-4">
          <h1 className="font-bold text-2xl">Join today. Run tomorrow.</h1>
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
          className="mx-auto"
        />
      </div>
      <div className="pt-7">
        <h3 className="text-2xl">Find your next running event</h3>
        <p>Running events will go here</p>
      </div>
    </section>
  );
};

export default HomePage;
