import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(author => {
        dispatch(loadAuthorSuccess(author));
      })
      .catch(error => {
        throw error;
      });
  };
}