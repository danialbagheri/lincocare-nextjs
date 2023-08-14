export interface BlogRes {
  body: string;
  category: [];
  excerpt: string;
  id: number;
  image: string;
  image_alt_text: string;
  image_height: number;
  image_width: number;
  is_bookmarked: boolean;
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

/* -------------------------------------------------------------------------- */

export interface GetListOfAllBlogsTypes {
  count?: number;
  tag?: string;
}
