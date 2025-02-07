import { GuestBook } from "@/model/guestbooks";
import { fetchGuestbook, postGuestbook } from "@/service/guestbook";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GuestbookState {
  messages: GuestBook[];
  loading: boolean;
  error: string | null;
}

const initialState: GuestbookState = {
  messages: [],
  loading: false,
  error: null,
};

export const fetchGuestbookMessages = createAsyncThunk(
  "guestbook/fetchMessages",
  async () => {
    const response = await fetchGuestbook();
    return response;
  }
);

export const postGuestbookMessage = createAsyncThunk(
  "guestbook/postMessage",
  async ({ message, color }: { message: string; color: string }) => {
    const response = await postGuestbook(message, color);
    return response.data;
  }
);

const guestbookSlice = createSlice({
  name: "guestbook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuestbookMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGuestbookMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
        state.error = null;
      })
      .addCase(fetchGuestbookMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "에러가 발생했습니다.";
      })
      .addCase(postGuestbookMessage.fulfilled, (state) => {
        state.error = null;
      });
  },
});

export default guestbookSlice.reducer;
