import axios from "axios";

// Base configuration for axios
const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getPosts = async () => {
  try {
    const response = await api.get("/api/posts");
    return response.data;
  } catch (error) {
    console.error("Failed to get posts: ", error);
    throw error;
  }
};

export const createPost = async (newMessage) => {
  try {
    const response = await api.post("/api/posts", newMessage);
    return response.data;
  } catch (error) {
    console.error("Failed to create post: ", error);
    throw error;
  }
};

export const updatePost = async (postId, updatedMessage) => {
  try {
    const response = await api.put(`/api/posts/${postId}`, updatedMessage);
    return response.data;
  } catch (error) {
    console.error("Failed to update post: ", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/api/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete post: ", error);
    throw error;
  }
};
