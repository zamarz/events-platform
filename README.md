# Run Together Event Planner

This is a project designed to help a running community plan its events.  You can find the hosted version [here](https://events-platform-two.vercel.app/).

## EventBrite API

The project uses the EventBrite API to create events and allow users to sign up to them. If you plan to modify the project, make sure you consult the EventBrite docs [here](https://www.eventbrite.com/platform/docs/introduction).

## What can users do in this project?
Admin users are able to create projects and then publish them. These are added to the event list.

Other users are able to sign up to events and add them to their Google Calendar. These events live on the EventBrite platform but users can interact with them through the API.

## Tech stack
The project is built using Typescript, Tailwind CSS, Firebase and NextJs.

## Future plans
In the future, users will be able to add events to their personal Google Calendar. Moreover, it will also include payment integration so events can be paid for online instead of in-person. The project will also integrate social media so users can share events or post information about events they are going to with their communities.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
