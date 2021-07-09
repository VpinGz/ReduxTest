import { combineReducers } from "redux";
import courses from "./couresReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
