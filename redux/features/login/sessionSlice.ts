import {
  deleteSecureValue,
  getSecureValue,
  saveSecureValue,
} from "@/utils/helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SessionState {
  session: string | null;
  isLoading: boolean;
}

const initialState: SessionState = {
  session: null,
  isLoading: true,
};

export const loadSession = createAsyncThunk("session/loadSession", async () => {
  const storedSession = await getSecureValue("token");
  return storedSession;
});

export const signIn = createAsyncThunk(
  "session/signIn",
  async (token: string) => {
    await saveSecureValue("token", token);
    return token;
  }
);

export const signOut = createAsyncThunk("session/signOut", async () => {
  await deleteSecureValue("token");
  return null;
});

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSession.fulfilled, (state, action) => {
        state.session = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.session = action.payload;
        state.isLoading = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.session = null;
        state.isLoading = false;
      });
  },
});

export default sessionSlice.reducer;
