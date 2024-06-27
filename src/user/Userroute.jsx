import { Navigate } from 'react-router-dom';

const UserRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!sessionStorage.getItem('token');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default UserRoute;