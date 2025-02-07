import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSlice {
  isAuthenticated: boolean;
  adminId: string | null;
}

const initialState: AuthSlice = {
  isAuthenticated: false,
  adminId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ adminId: string }>) => {
      state.isAuthenticated = true;
      state.adminId = action.payload.adminId;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.adminId = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
