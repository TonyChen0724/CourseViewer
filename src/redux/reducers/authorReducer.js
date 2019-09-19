import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export const authorReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.author }];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
