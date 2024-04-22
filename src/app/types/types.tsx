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

export type getEventsIdType = {
  events: Array<Event>;
  pagination: {
    has_more_items: boolean;
    object_count: number;
    page_count: number;
    page_number: number;
    page_size: number;
  };
};

export type Event = {
  capacity: number;
  capacity_is_custom: boolean;
  category_id: null | number | string;
  changed: string;
  created: string;
  currency: string;
  description: {
    html: string;
    text: string;
  };
  end: {
    local: string;
    timezone: string;
    utc: string;
  };
  facebook_event_id: null | string;
  format_id: null | number;
  hide_end_date: boolean;
  hide_start_date: boolean;
  id: string;
  inventory_type: string;
  invite_only: boolean;
  is_externally_ticketed: boolean;
  is_free: boolean;
  is_locked: boolean;
  is_reserved_seating: boolean;
  is_series: boolean;
  is_series_parent: boolean;
  listed: boolean;
  locale: string;
  logo: null;
  logo_id: null | number;
  name: {
    html: string;
    text: string;
  };
  online_event: boolean;
  organization_id: string;
  organizer_id: string;
  privacy_setting: string;
  published: string;
  resource_uri: string;
  shareable: boolean;
  show_colors_in_seatmap_thumbnail: boolean;
  show_pick_a_seat: boolean;
  show_remaining: boolean;
  show_seatmap_thumbnail: boolean;
  source: string;
  start: {
    local: string;
    timezone: string;
    utc: string;
  };
  status: "started";
  subcategory_id: null | string;
  summary: string;
  tx_time_limit: number;
  url: string;
  venue_id: null | string;
  version: null | string;
};
