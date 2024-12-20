import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUsers = async (searchTerm, location = '', minRepos = 0) => {
  try {
    // Construct the query string for advanced search
    let query = `${searchTerm}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced users:', error);
    throw error;
  }
};
