"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EventBriteWidget = ({ eventId, eventInfo }: any) => {
  const router = useRouter();

  const setSessionStorage = () => {
    try {
      sessionStorage.setItem("eventId", eventId);
      sessionStorage.setItem("name", eventInfo.name.text);
      sessionStorage.setItem("startTime", eventInfo.start.local);
    } catch (error) {
      console.error(error);
    }

    router.push("/event-confirmation");
  };

  useEffect(() => {
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
      if (window.EBWidgets) {
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
  }, []);

  return (
    <button className="buttonEB" id="widget-trigger" type="button">
      Buy Tickets
    </button>
  );
};

export default EventBriteWidget;
