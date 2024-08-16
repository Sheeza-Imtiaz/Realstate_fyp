import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUsers, selectLoggedInUsers, deleteLoggedInUser } from './Store';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Users = () => {
    const loggedInUsers = useSelector(selectLoggedInUsers);
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchLoggedInUsers());
    }, [dispatch]);

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteLoggedInUser(userId));
        }
    };

    const handleView = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-8'>
                        <h1>Logged-in Users</h1>
                        <table className='table table-bordered' style={{ fontSize: "15px", width:"50%" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    {/* <th>Email</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loggedInUsers.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        {/* <td>{user.email}</td> */}
                                        <td>
                                            <button className="btn btn-sm btn-warning me-3 fs-5" onClick={() => handleView(user)}>
                                                View
                                            </button>
                                            <button className="btn btn-sm btn-danger ml-2 fs-5" onClick={() => handleDeleteUser(user.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {selectedUser && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: '#eef3f0' }}>
                                <h5 className="modal-title">User Details</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID:</strong> {selectedUser.id}</p>
                                <p><strong>Username:</strong> {selectedUser.username}</p>
                                <p><strong>Username:</strong> {selectedUser.email}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;
