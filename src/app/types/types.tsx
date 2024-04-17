export type EventData = {
  event: {
    name: {
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

export type EventSummary = {
  event: {
    summary: string;
  };
};
