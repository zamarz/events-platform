"use client";

import { Event } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type EventBriteWidget = {
  eventId: string;
  eventInfo: Event;
};

const EventBriteWidget: React.FC<EventBriteWidget> = ({
  eventId,
  eventInfo,
}) => {
  const router = useRouter();

  useEffect(() => {
    const setSessionStorage = () => {
      try {
        sessionStorage.setItem("eventId", eventId);
        sessionStorage.setItem("name", eventInfo.name.text);
        sessionStorage.setItem("startTime", eventInfo.start.local);
        sessionStorage.setItem("endTime", eventInfo.end.local);

        if (eventInfo.summary) {
          sessionStorage.setItem("summary", eventInfo.summary);
        }
      } catch (error) {
        console.error(error);
      }

      router.push("/event-confirmation");
    };
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        setupWidget();
      };
    };

    const setupWidget = () => {
      //@ts-ignore
      if (window.EBWidgets) {
        //@ts-ignore
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: `${eventId}`,
          modal: true,
          modalTriggerElementId: "widget-trigger",
          onOrderComplete: () => setSessionStorage(),
        });
      }
    };
    if (
      !document.querySelector(
        'script[src="https://www.eventbrite.com/static/widgets/eb_widgets.js"]'
      )
    ) {
      loadScript();
    } else {
      setupWidget();
    }
  }, [eventId, eventInfo, router]);

  return (
    <button className="buttonEB" id="widget-trigger" type="button">
      Get Tickets
    </button>
  );
};

export default EventBriteWidget;
