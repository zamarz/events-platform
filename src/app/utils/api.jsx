const axios = require("axios");

const eventbriteSite = axios.create({
  baseURL: "https://www.eventbriteapi.com/",
});

const eventAuthSite = axios.create({
  baseURL: "https://www.eventbrite.com/oauth/token",
});

const organizationID = "2095981963553";

export const createEvent = (event) => {
  return eventbriteSite
    .post(`v3/organizations/${organizationID}/events/`, event, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addTicketClass = (event_id, ticketClass) => {
  // const data = {
  //   ticket_class: {
  //     name: "General",
  //     free: true,
  //     quantity_total: 100,
  //   },
  // };
  return eventbriteSite
    .post(`v3/events/${event_id}/ticket_classes/`, ticketClass, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const publishEvent = (event_id) => {
  return eventbriteSite
    .post(
      `v3/events/${event_id}/publish/?token=${process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const authorizeUser = (code) => {
  const data = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.NEXT_PUBLIC_EVENTBRITE_API_KEY,
    client_secret: process.env.NEXT_PUBLIC_EVENTBRITE_CLIENT_SECRET,
    code: `${code}`,
    redirect_uri:
      "https://ebbe-2a02-c7c-f42d-2b00-fc3d-65ea-44bb-d1fb.ngrok-free.app/redirect",
  });

  return axios
    .post("https://www.eventbrite.com/oauth/token", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
