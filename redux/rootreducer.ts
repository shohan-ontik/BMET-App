import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import uiReducer from "./features/ui/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
