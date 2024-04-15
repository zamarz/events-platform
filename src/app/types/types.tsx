export type EventData = {
  event: {
    name: {
      html: string;
    };
    summary: string;
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
