// import { google } from "googleapis";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   console.log("hello there, we're in the POST function");

//   if (req.method !== "POST") {
//     return NextResponse.json(
//       { message: "Method not allowed" },
//       { status: 405 }
//     );
//   }

//   try {
//     const { eventName, summary, startDateTime, endDateTime, accessToken } =
//       req.body;
//     console.log(accessToken, "accessToken");
//     // OAuth2 client setup
//     const auth = new google.auth.OAuth2(
//       process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CLIENT_ID,
//       process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CLIENT_SECRET,
//       "http://localhost:3000"
//     );

//     const newTokens = await auth.getToken(accessToken);
//     console.log(newTokens, "newTokens");

//     const url = auth.generateAuthUrl({
//       access_type: "offline",
//       scope: "https://www.googleapis.com/auth/calendar",
//     });
//     // Assuming your access token is stored in session or database and retrieved here
//     // Set this according to your authentication flow
//     auth.setCredentials({
//       access_token: accessToken,
//     });

//     const calendar = google.calendar({ version: "v3", auth });

//     const event = {
//       summary: eventName,
//       description: summary,
//       start: {
//         dateTime: startDateTime,
//         timeZone: "America/Los_Angeles", // Adjust the timezone accordingly
//       },
//       end: {
//         dateTime: endDateTime,
//         timeZone: "America/Los_Angeles", // Adjust the timezone accordingly
//       },
//     };

//     const response = await calendar.events.insert({
//       calendarId: "primary",
//       requestBody: event,
//     });

//     return NextResponse.json(
//       { message: "Event created", event: response.data },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("error erro error");
//     console.error("Error creating calendar event:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
