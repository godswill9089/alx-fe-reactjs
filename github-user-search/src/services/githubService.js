import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com";

export const fetchAdvancedSearchResults = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error;
  }
};
