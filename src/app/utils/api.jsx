const axios = require("axios");

const eventbriteSite = axios.create({
  baseURL: "https://www.eventbriteapi.com/",
});

const organizationID = "2095981963553";

export const createEvent = () => {
  return eventbriteSite
    .post(
      `v3/organizations/${organizationID}/events/`,
      {
        event: {
          name: {
            html: "My New Event",
          },
          start: {
            timezone: "America/Los_Angeles",
            utc: "2025-12-01T02:00:00Z",
          },
          end: {
            timezone: "America/Los_Angeles",
            utc: "2025-12-01T05:00:00Z",
          },
          currency: "USD",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
