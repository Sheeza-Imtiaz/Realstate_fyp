// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// const Users = () => {
//     const [loggedInUsers, setLoggedInUsers] = useState([]);

//     useEffect(() => {
//         const fetchLoggedInUsers = async () => {
//             try {
//                 const response = await axios.get('http://192.168.0.116:8000/real_estate/users/');
//                 setLoggedInUsers(response.data);
//             } catch (error) {
//                 console.error('Error fetching logged-in users:', error);
//             }
//         };
//         fetchLoggedInUsers();
//     }, []);

//     return (
//         <>
//             <div className="" style={{ display: 'flex', margin: '0' }}>
//                 <div className="sidebar" style={{ flex: '0 0 auto' }}>
//                     <Sidebar />
//                 </div>
//                 <div className="users" style={{ flex: '1', marginLeft: "60px"}}>
//                     <h2>Logged-in Users</h2>
//                     <ul>
//                         {loggedInUsers.map((user, index) => (
//                             <li key={index}>{user.username}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Users;


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
        <div className="container-fluid" style={{ display: 'flex', margin: '0' }}>
            <div className="sidebar" style={{ flex: '0 0 auto' }}>
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
