import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
    return response.json();
};

const PostsComponent = () => {
  // Use the `useQuery` hook with additional configuration options
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 10000, // Cache data for 10 seconds
    staleTime: 5000, // Mark data as stale after 5 seconds
    refetchOnWindowFocus: false, // Disable refetching when window regains focus
    keepPreviousData: true, // Show previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: '1rem' }}>
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
