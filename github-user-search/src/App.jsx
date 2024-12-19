import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'; // Placeholder for future components

function App() {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
     const response = await axios.get(`https://api.github.com/users/${query}`, {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data from GitHub API:', error);
      setUserData(null); // Reset user data on error
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-6">GitHub User Search</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username"
          className="p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {userData && (
        <div className="flex justify-center mt-4">
          <div className="card p-4 border rounded shadow-lg">
            <h2 className="font-bold text-xl">{userData.name}</h2>
            <p>{userData.bio}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 p-2 bg-green-500 text-white rounded">
                View Profile
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
