import Link from "next/link";

const EventCard = ({ eventInfo }: any) => {
  console.log(eventInfo);
  return (
    <div>
      <div>
        <h2>{eventInfo.name.text}</h2>
        <p>{eventInfo.summary}</p>
        <button className="button">
          <Link href={`/events/${eventInfo.id}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
