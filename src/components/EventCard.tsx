import Link from "next/link";

const EventCard = ({ eventInfo }: any) => {
  console.log(eventInfo);

  //might be an image here
  return (
    <div className="mx-4 border border-primary py-3">
      <div className="flex items-center flex-wrap justify-start mx-5 px-6 py-3">
        <h2 className="text-l font-semibold">{eventInfo.name.text}</h2>
        <p className="text-pretty">{eventInfo.summary}</p>
        <p className="px-2">{eventInfo.start.local}</p>
        {eventInfo.is_free === true ? (
          <p className="font-bold text-primary px-2">FREE</p>
        ) : (
          <></>
        )}
        <button className="button">
          <Link href={`/events/${eventInfo.id}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
