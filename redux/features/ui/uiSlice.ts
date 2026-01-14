import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  language: string;
}

const initialState: UiState = {
  language: "bn",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = uiSlice.actions;

export const language = (state: RootState) => state.ui.language;

export default uiSlice.reducer;
