const axios = require("axios");

const eventbriteSite = axios.create({
  baseURL: "https://www.eventbriteapi.com/",
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
    })
    .catch((error) => {
      console.error(error);
    });
};
