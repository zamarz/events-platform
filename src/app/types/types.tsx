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

export type EventTicketClass = {
  ticket_class: {
    name: string;
    free: boolean;
    quantity_total: number;
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
  category_id: null | string;
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
  format_id: null | string;
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
  logo: null | {
    aspect_ratio: string;
    crop_mask: {
      height: number;
      top_left: {
        x: number;
        y: number;
      };
      width: number;
    };
    edge_color: string;
    edge_color_set: boolean;
    id: string;
    original: {
      height: number;
      url: string;
      width: number;
    };
    url: string;
  };
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
  status: string;
  subcategory_id: null | string;
  summary: null | string;
  tx_time_limit: number;
  url: string;
  venue_id: null | string;
  version: null | string;
};

export type Published = {
  published: boolean;
};

export type TicketClass = {
  actual_cost: null | string;
  actual_fee: null | string;
  auto_hide: boolean;
  capacity: number;
  category: string;
  cost: null | string;
  delivery_methods: Array<string>;
  description: null | string;
  display_name: string;
  donation: boolean;
  event_id: string;
  fee: null | string;
  free: boolean;
  has_pdf_ticket: boolean;
  hidden: boolean;
  hidden_currently: boolean;
  hide_description: boolean;
  hide_sale_dates: boolean;
  id: string;
  image_id: null | string;
  include_fee: boolean;
  maximum_quantity: null | string;
  maximum_quantity_per_order: number;
  minimum_quantity: number;
  name: string;
  on_sale_status: string;
  order_confirmation_message: null;
  payment_constraints: string[];
  quantity_sold: number;
  quantity_total: number;
  resource_uri: string;
  sales_channels: string[];
  sales_end: string;
  sales_end_relative: null | string;
  sales_start: string;
  secondary_assignment_enabled: boolean;
  sorting: number;
  split_fee: boolean;
  tax: null | string;
  ticket_parent_id: null | string;
};

export type UserInfo = {
  email: string | null;
  uid: string;
  photoURL: string | null;
};
