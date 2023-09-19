import { FetchHandlerGet, FetchHandlerPost } from "./types";

const BASE_URL = "https://api.lincocare.co.uk/api/";

const errorHandler = (response: any) => {
  if (response) {
    return Promise.reject(`${response}`);
  }
};

const get = ({ endpoint, baseURL = BASE_URL, query }: FetchHandlerGet) => {
  return fetch(
    `${baseURL}${endpoint}${query ? "?" + new URLSearchParams(query) : ""}`
  )
    .then(async (response) => {
      return Promise.resolve(await response.json());
    })
    .catch((err) => errorHandler(err));
};

const post = ({
  endpoint,
  data,
  abortController,
  baseURL = BASE_URL,
}: FetchHandlerPost) =>
  window
    .fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      signal: abortController ? abortController.signal : undefined,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      if (response.ok) {
        return Promise.resolve(await response.json());
      } else {
        return errorHandler(response);
      }
    });

const patch = ({
  endpoint,
  data,
  abortController,
  baseURL = BASE_URL,
}: FetchHandlerPost) =>
  window
    .fetch(`${baseURL}${endpoint}`, {
      method: "PATCH",
      signal: abortController ? abortController.signal : undefined,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      if (response.ok) {
        return Promise.resolve(await response.json());
      } else {
        return errorHandler(response);
      }
    });

export { get, post, patch };
