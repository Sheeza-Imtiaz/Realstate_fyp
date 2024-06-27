import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!sessionStorage.getItem('token');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default AdminRoute;