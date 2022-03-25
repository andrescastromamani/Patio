import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const PublicRoutes = ({ children }) => {
    const { token } = useContext(AuthContext);
    if (token) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
}
