import { get } from "utils";

export const getListOfAllBlogs = ({
  count,
  tag,
  page,
}: {
  count?: string;
  tag?: string;
  page?: string;
}) => {
  const query = {
    ...(count ? { count } : {}),
    ...(tag ? { tag } : {}),
    ...(page ? { page } : {}),
  };

  return get({
    endpoint: `api/blogs/all/`,
    query,
  });
};

export const getSingleBlog = (slug: string) => {
  return get({ endpoint: `api/blogs/all/${slug}/` });
};
