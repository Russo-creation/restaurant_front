import { POSTS_GET } from "./actionTypes";

export const fetchPosts = () => (
  dispatch: (arg0: { type: string; promise: Promise<Response> }) => void
) => {
  const promise = fetch(`${process.env.REACT_APP_API_URL}/posts?userId=1`);

  dispatch({
    type: POSTS_GET,
    promise,
  });
};
