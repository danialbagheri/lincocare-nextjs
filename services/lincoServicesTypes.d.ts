export interface BlogRes {
  body: string;
  category: string[];
  excerpt: string;
  plain_excerpt: string;
  id: number;
  image: string;
  image_alt_text: string;
  image_height: number;
  image_width: number;
  is_bookmarked: boolean;
  plain_body: string;
  publish_date: string;
  published: boolean;
  read_time: string;
  related_products: [];
  resized: string;
  slug: string;
  tags: [];
  title: string;
}

export interface ListOfAllBlogsRes {
  count: number;
  next: string;
  previous: null | boolean;
  results: BlogRes[];
}

export interface ListOfCollectionBlogBySlug {
  counts: number;
  description: string;
  id: string | number;
  image: string;
  items: { item: BlogRes }[];
  name: string;
  //TODO::: Change slider type based on api response
  slider: any;
  slug: string;
}

/* -------------------------------------------------------------------------- */

export interface GetListOfAllBlogsTypes {
  count?: number;
  tag?: string;
}

export interface SocialMediaIconsItemType {
  icon: string;
  id: number | string;
  position: number;
  svg_icon: string;
  url: string;
}

export interface SocialMediaIconsType {
  id: string | number;
  name: string;
  items: socialMediaIconsItemType[];
}

export interface FaqResultsType {
  answer: string;
  id: string | number;
  public: boolean;
  question: string;
}
export interface FaqTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: FaqResultsType[];
}

export interface IconGroupsItemType {
  icon: string | null;
  id: number | string;
  position: number | string;
  svg_icon: string | null;
  url: string;
}

export interface IconGroupsType {
  id: string | number;
  name: string;
  items: IconGroupsItemType[];
}
