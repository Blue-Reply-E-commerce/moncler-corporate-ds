export enum ContentType {
  HOMEPAGE = "homepage",
  CONTENT_PAGE = "content_page",
}

interface BaseEntry {
  ACL: unknown;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  locale: string;
  publish_details: {
    locale: string;
    environment: string;
    time: string;
    user: string;
  };
  tags: string[];
  uid: string;
  title: string;
  _in_progress: boolean;
  _version: number;
  $?: Record<"data-cslp", string>;
}

export interface Homepage extends BaseEntry {
  url: string;
}

export interface ContentPage extends BaseEntry {
  url: string;
}
