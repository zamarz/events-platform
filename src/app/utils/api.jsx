import Error from "../error";

const axios = require("axios");

const eventbriteSite = axios.create({
  baseURL: "https://www.eventbriteapi.com/",
});

const eventAuthSite = axios.create({
  baseURL: "https://www.eventbrite.com/oauth/token",
});

export const createEvent = (event) => {
  return eventbriteSite
    .post(
      `v3/organizations/${process.env.NEXT_PUBLIC_EVENTBRITE_ORGANIZATION_ID}/events/`,
      event,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const updateEvent = (eventId, eventInfo) => {
  return eventbriteSite
    .post(
      `v3/events/${eventId}/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
      eventInfo
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const addTicketClass = (event_id, ticketClass) => {
  return eventbriteSite
    .post(
      `v3/events/${event_id}/ticket_classes/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
      ticketClass
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const publishEvent = (event_id) => {
  return eventbriteSite
    .post(
      `v3/events/${event_id}/publish/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const getEventsId = () => {
  return eventbriteSite
    .get(
      `v3/organizations/${process.env.NEXT_PUBLIC_EVENTBRITE_ORGANIZATION_ID}/events/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const getEventById = (event_id) => {
  return eventbriteSite
    .get(
      `v3/events/${event_id}/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return <Error />;
    });
};

export const createGoogleEvent = async (eventData, token) => {
  console.log("hello there, cgE");
  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

//not needed for now
// export const authorizeUser = (code) => {
//   const data = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: process.env.NEXT_PUBLIC_EVENTBRITE_API_KEY,
//     client_secret: process.env.NEXT_PUBLIC_EVENTBRITE_CLIENT_SECRET,
//     code: `${code}`,
//     redirect_uri:
//       "https://ebbe-2a02-c7c-f42d-2b00-fc3d-65ea-44bb-d1fb.ngrok-free.app/redirect",
//   });

//   return axios
//     .post("https://www.eventbrite.com/oauth/token", data, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
