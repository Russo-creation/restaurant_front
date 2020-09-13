import * as types from "../types";

export const fetchposts = () => async (dispatch) => {
  // const res = await axios.get("api/post")

  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
  const resData = await response.json();

  console.log(resData);

  dispatch({
    type: types.GET_POSTS,
    payload: resData,
  });
};
