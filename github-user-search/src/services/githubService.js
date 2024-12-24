import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetch users from GitHub based on search query.
 * @param {string} query - The search query (e.g., username, location, etc.).
 * @param {string} [location] - Optional location filter.
 * @param {number} [minRepos] - Optional minimum repositories filter.
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 */
export const fetchGitHubUsers = async (query, location = '', minRepos = 0) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data; // GitHub API returns results in `response.data`.
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
