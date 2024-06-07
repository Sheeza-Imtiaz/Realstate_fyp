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
        email: '',
        password: '',
    });

    const [userProperties, setUserProperties] = useState([]);

    useEffect(() => {
        if (userId) {
            axios.get(`http://192.168.0.111:8000/real_estate/users/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then(response => {
                setProfileData({
                    username: response.data.username,
                    email: response.data.email,
                    password: '',
                });
            })
            .catch(error => {
                console.error('Error fetching user profile data:', error);
            });

            
            axios.get(`http://192.168.0.111:8000/real_estate/products/?user_id=${userId}`, {
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
    }, [userId, accessToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://192.168.0.111:8000/real_estate/users/${userId}/`, profileData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.data) {
                toast.success('Profile updated successfully!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        } catch (error) {
            console.error('Error updating profile data:', error);
            toast.error('Failed to update profile. Please try again later.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    if (!accessToken) {
        return <div>Error: You must be logged in to view this page.</div>;
    }

    return (
        <>
            <div className="dashboard-container">
                <div className="userbar-container">
                    <Userbar />
                </div>
                
                <div className="main-content">
                    <div className="properties-section">
                        <h2>My Properties</h2>
                        <ul className="property-list">
                            {userProperties.map(property => (
                                <li key={property.id} className="property-item">
                                <img  alt="" src={property.product_picture}/> 
                                    <h5>{property.name}</h5>
                                    <p><strong>Location:</strong> {property.location}</p>
                                    <p><strong>Price:</strong> {property.price}</p>
                                    <p><strong>Size:</strong> {property.size}</p>
                                    <p><strong>Beds:</strong> {property.beds} Beds, <strong>Baths:</strong> {property.baths} Baths</p>
                                    <p><strong>Features:</strong> {property.features}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Userprofile;
