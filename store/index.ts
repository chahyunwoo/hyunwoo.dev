import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import guestBokReducer from "./features/guestbookSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guestbook: guestBokReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
