import axios from "axios";

interface CreatePostData {
  title: string;
  content: string;
  category: string;
}

export const createPost = async (postData: CreatePostData) => {
  const response = await axios.post("/api/posts", postData);

  if (response.status !== 200) {
    throw new Error("Failed to create post");
  }

  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get("/api/posts");

  return response.data;
};
