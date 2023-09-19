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
    endpoint: `blogs/all/`,
    query,
  });
};

export const getSingleBlog = (slug: string) => {
  return get({ endpoint: `blogs/all/${slug}/` });
};

export const getIcons = (slug: string) => {
  return get({ endpoint: `web/icon-groups/${slug}` });
};

export const getFaq = () => {
  return get({ endpoint: "faq" });
};
