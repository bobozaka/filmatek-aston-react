import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUserAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
