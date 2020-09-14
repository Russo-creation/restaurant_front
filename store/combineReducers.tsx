import { combineReducers } from "redux";

import { postReducer } from "./reducers/post/postReducer";

export default combineReducers({
  post: postReducer,
});
