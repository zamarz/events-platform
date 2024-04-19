"use client";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const token = sessionStorage.getItem("token");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { eventName, summary, startDateTime, endDateTime } = req.body;

    // OAuth2 client setup
    const auth = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CLIENT_ID,
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    // Assuming your access token is stored in session or database and retrieved here
    // Set this according to your authentication flow
    const accessToken = req.body.accessToken;
    // auth.setCredentials({
    //   token: token,
    // });

    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: eventName,
      description: summary,
      start: {
        dateTime: startDateTime,
        timeZone: "America/Los_Angeles", // Adjust the timezone accordingly
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/Los_Angeles", // Adjust the timezone accordingly
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
    });

    res.status(200).json({ message: "Event created", event: response.data });
  } catch (error) {
    console.error("Error creating calendar event:", error);
    res.status(500).json({ error: error.message });
  }
}
