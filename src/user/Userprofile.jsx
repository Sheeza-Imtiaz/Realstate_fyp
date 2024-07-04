import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userbar from '../user/Userbar';
import './Userprofile.css';

const Userprofile = () => {
    const getdata = JSON.parse(sessionStorage.getItem('logdata'));
    const accessToken = getdata ? getdata.access : null;
    const userId = getdata ? getdata.id : null;

    const [profileData, setProfileData] = useState({
        username: '',
        // email: '',
        password: '',
        profile_picture: null,
    });

    const [ setUserProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId && accessToken) {
            axios.get(`http://192.168.12.103:8001/real_estate/users/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => {
                    setProfileData({
                        username: response.data.username,
                        email: response.data.email,
                        password: '',
                        profile_picture: response.data.profile_picture,
                    });
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching user profile data:', error);
                    setLoading(false);
                });

            // Fetch properties added by the user
            axios.get(`http://192.168.12.103:8001/real_estate/products/?user_id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => {
                    setUserProperties(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user properties:', error);
                });
        }
    }, [userId, accessToken, setUserProperties]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleFileChange = (e) => {
    //     setProfileData(prevState => ({
    //         ...prevState,
    //         profile_picture: e.target.files[0],
    //     }));
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = new FormData();
        updatedData.append('username', profileData.username);
        // updatedData.append('email', profileData.email);

        if (profileData.password) {
            updatedData.append('password', profileData.password);
        }

        if (profileData.profile_picture) {
            updatedData.append('profile_picture', profileData.profile_picture);
        }

        try {
            const response = await axios.patch(`http://192.168.12.103:8001/real_estate/users/${userId}/`, updatedData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data) {
                toast('Profile updated successfully!', {
                });
            }
        } catch (error) {
            console.error('Error updating profile data:', error);
            toast.error('Failed to update profile. Please try again later.', {
            });
        }
    };

    if (!accessToken) {
        return <div>Error: You must be logged in to view this page.</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="dashboard-container">
                <div className="userbar-container">
                    <Userbar />
                </div>
                <div className="main-content">
                    <div className="profile-section">
                        <h2>Edit Profile</h2>

                        <form onSubmit={handleSubmit}>
                            {/* <div className="form-group">
                                <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="profile_picture"
                                    onChange={handleFileChange}
                                    id="profile_picture"
                                />
                                {profileData.profile_picture && (
                                    <img
                                        src={URL.createObjectURL(profileData.profile_picture)}
                                        alt="Profile"
                                        className="profile-picture"
                                    />
                                )}
                            </div> */}

                            <div className="form-group">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={profileData.username}
                                    onChange={handleChange}
                                    id="username"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={profileData.email}
                                    // onChange={handleChange}
                                    id="email"
                                    placeholder="Email"
                                    required
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={profileData.password}
                                    onChange={handleChange}
                                    id="password"
                                    placeholder="New Password (if changing)"
                                />
                            </div>

                            <button type="submit" className="btn-profile">Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" />
            </>
    );
};

export default Userprofile;
