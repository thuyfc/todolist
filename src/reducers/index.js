import todoReducer from "../reducers/reducers";
import { combineReducers } from "redux";

const rootReDucers = combineReducers({
  todoReducer,
});
export default rootReDucers;
