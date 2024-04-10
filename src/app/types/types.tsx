export type EventData = {
  event: {
    name: {
      html: string;
    };
    description: {
      html: string;
    };
    start: {
      timezone: string;
      utc: string;
    };
    end: {
      timezone: string;
      utc: string;
    };
    currency: string;
  };
};
