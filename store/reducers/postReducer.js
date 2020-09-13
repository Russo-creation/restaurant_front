import * as types from "../types";

const inialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = inialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
