import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";
import { authorReducer as authors } from "./authorReducer";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
