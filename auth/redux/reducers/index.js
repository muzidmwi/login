import { combineReducers } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 리듀서들
});

export default rootReducer;
