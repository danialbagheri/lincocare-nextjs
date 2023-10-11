export interface FetchHandlerGet {
  endpoint: string;
  baseURL?: string;
  query?: string | string[][] | Record<string, string> | URLSearchParams;
}

export interface FetchHandlerPost extends FetchHandlerGet {
  data: any;
  abortController?: AbortController;
}
