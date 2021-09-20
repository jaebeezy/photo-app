import axios from "axios";

export const config = {
  // axios configuration to gain authorization for api
  baseURL: "https://api.pexels.com/",
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export async function searchPhotos(query) {
  // get request functionality for search bar
  try {
    const response = await axios.get(
      `v1/search?query=${query}&per_page=10`,
      config
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response.status === 429) {
      console.log("too many requests!");
    }
  }
}
