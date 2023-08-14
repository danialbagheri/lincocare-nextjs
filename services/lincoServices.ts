import { get } from "utils";

export const getListOfAllBlogs = ({
  count = 10,
  tag = "",
}: {
  count: number;
  tag?: string;
}) => {
  return get({
    endpoint: `api/blogs/all/?count=${count}${tag ? `&tag=${tag}` : ""}`,
  });
};

export const getSingleBlog = (slug: string) => {
  return get({ endpoint: `api/blogs/all/${slug}/` });
};
