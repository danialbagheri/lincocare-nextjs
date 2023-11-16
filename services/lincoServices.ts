import { get, post } from "utils";

/* ------------------------------ GET Requests ------------------------------ */

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

export const getSingleBlogCollectionBySlug = (slug: string) => {
  return get({ endpoint: `blogs/collections/${slug}/?count=3` });
};

export const getIcons = (slug: string) => {
  return get({ endpoint: `web/icon-groups/${slug}` });
};

export const getFaq = (page: number = 1) => {
  return get({ endpoint: `faq/?page=${page}` });
};

/* -------------------------------------------------------------------------- */

/* ------------------------------ POST Requests ----------------------------- */
export const postContactUsForm = (data: any) => {
  return post({ endpoint: "web/contact-us/", data });
};
