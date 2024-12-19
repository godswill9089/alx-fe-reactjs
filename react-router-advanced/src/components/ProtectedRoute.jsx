import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming useAuth is defined in hooks

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Retrieve authentication status using the hook

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
