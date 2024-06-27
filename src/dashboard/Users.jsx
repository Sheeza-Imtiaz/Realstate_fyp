import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUsers,selectLoggedInUsers,deleteLoggedInUser } from './Store';
import Sidebar from './Sidebar';

const Users = () => {
    const loggedInUsers = useSelector(selectLoggedInUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLoggedInUsers());
    }, [dispatch]);
    const handleDeleteUser = (userId) => {
        dispatch(deleteLoggedInUser(userId));
    };
    return (
        <div className='container-fluid' style={{  display: "flex", height: "100vh"}}>
        <div className="sidebar" style={{ flex:"0 0 200px" , borderRight: "1px solid #ddd"}}>
            <Sidebar />
        </div>
            <div className="users" style={{ flex: '1', marginLeft: "60px"}}>
                <h2>Logged-in Users</h2>
                <ul>
                    {loggedInUsers.map((user, index) => (
                        <li key={index}>
                            {user.username}
                            <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;
