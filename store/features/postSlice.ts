import { createPost, fetchPosts } from "@/service/posts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  slug: string;
  published: boolean;
  authorId: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  currentPost: Post | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  currentPost: null,
};

export const createNewPost = createAsyncThunk(
  "posts/create",
  async (postData: { title: string; content: string; category: string }) => {
    const response = await createPost(postData);
    return response;
  }
);

export const fetchAllPosts = createAsyncThunk("posts/fetchAll", async () => {
  const response = await fetchPosts();
  return response;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 게시글 생성
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
        state.currentPost = action.payload;
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "게시글 작성에 실패했습니다.";
      })
      // 게시글 목록 조회
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "게시글 목록을 불러오는데 실패했습니다.";
      });
  },
});

export const { clearError } = postSlice.actions;
export default postSlice.reducer;
