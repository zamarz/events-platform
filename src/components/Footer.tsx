import Link from "next/link";
import { MdEvent } from "react-icons/md";
import { RiBookMarkLine } from "react-icons/ri";

const Footer = () => {
  const style = { fontSize: "1.5em" };
  return (
    <footer className="bg-primary text-white py-8 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/" className="font-black text-tertiary-light">
            Run Together
          </Link>
          <div className="space-y-2 flex items-center">
            <RiBookMarkLine style={style} />
            <h4 className="font-semibold px-3">
              <Link href="/">About</Link>
            </h4>
          </div>
          <div className="space-y-2 flex items-center">
            <MdEvent style={style} />
            <h4 className="font-semibold px-3">
              <Link href="/">My Events</Link>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
