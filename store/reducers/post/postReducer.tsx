import {
  POSTS_GET_SUCCESS,
  POSTS_GET_FAILURE,
  POSTS_GET_REQUEST,
  PostTypes,
} from "../../actions/post/actionTypes";

import Post from "../../../models/post";

interface PostState {
  posts: Array<Post>;
  loading: boolean;
  error: string | null;
}

const inialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (
  state = inialState,
  action: PostTypes
): PostState => {
  switch (action.type) {
    case POSTS_GET_SUCCESS:
      const loadedPosts = [];
      for (const key in action.payload) {
        loadedPosts.push(
          new Post(
            action.payload[key]["id"],
            action.payload[key]["userId"],
            action.payload[key]["title"],
            action.payload[key]["body"]
          )
        );
      }

      return {
        ...state,
        posts: loadedPosts,
        loading: false,
        error: null,
      };
    case POSTS_GET_FAILURE:
      return { ...state, loading: false, error: action.error };
    case POSTS_GET_REQUEST:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};
