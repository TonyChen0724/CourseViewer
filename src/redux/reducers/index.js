import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
