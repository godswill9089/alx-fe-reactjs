import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="border rounded-lg p-4">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-center text-xl font-semibold mt-2">
            {userData.name || "No Name Provided"}
          </h2>
          <p className="text-center text-gray-600">@{userData.login}</p>
          <p className="text-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
