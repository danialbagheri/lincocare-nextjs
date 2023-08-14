export interface FetchHandlerGet {
  endpoint: string;
  baseURL?: string;
}

export interface FetchHandlerPost extends FetchHandlerGet {
  data: any;
  abortController: AbortController;
}
