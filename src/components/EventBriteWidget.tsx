"use client";

import { useEffect } from "react";

const EventBriteWidget = ({ eventId }) => {
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
          onOrderComplete: () => console.log("Order complete!"),
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
    <button className="button" id="widget-trigger" type="button">
      Buy Tickets
    </button>
  );
};

export default EventBriteWidget;
