import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import sessionReducer from "./features/login/sessionSlice";
import uiReducer from "./features/ui/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  session: sessionReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
