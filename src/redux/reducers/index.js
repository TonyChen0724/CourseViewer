import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";
import { authorReducer as authors } from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
