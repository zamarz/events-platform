// "use client";
// import { SessionProvider } from "next-auth/react";

import { GoogleAuthProvider } from "firebase/auth";

// const Provider = ({ children, session }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };

// export default Provider;

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/calendar.readonly");
