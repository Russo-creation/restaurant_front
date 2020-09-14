export const POSTS_GET = `POSTS_GET`;
export const POSTS_GET_SUCCESS = `POSTS_GET_SUCCESS`;
export const POSTS_GET_FAILURE = `POSTS_GET_FAILURE`;
export const POSTS_GET_REQUEST = `POSTS_GET_REQUEST`;

interface PostGetSucces {
  type: typeof POSTS_GET_SUCCESS;
  payload: [];
}

interface PostGetFailure {
  type: typeof POSTS_GET_FAILURE;
  error: string;
}

interface PostGetRequest {
  type: typeof POSTS_GET_REQUEST;
}

export type PostTypes = PostGetSucces | PostGetFailure | PostGetRequest;
