import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Package.css';
import Userbar from '../Userbar';
import { useNavigate } from 'react-router-dom';

const Package = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const logdata = JSON.parse(sessionStorage.getItem('logdata'));
    // const pname = logdata.plan.name;
    const userId = logdata.id;

    const deactivate = async () => {
        const userConfirmed = window.confirm('Are you sure you want to deactivate your current plan?');
        if (userConfirmed) {
            try {
                const response = await axios.patch(`http://192.168.12.108:8001/real_estate/users/${userId}/update-plan/`, {
                    plan_name: 'Free',
                });
                console.log(response);
                sessionStorage.removeItem('logdata');
                sessionStorage.removeItem('token');
                navigate('/');
            } catch (error) {
                console.error('Error deactivating plan:', error);
            }
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://192.168.12.108:8001/real_estate/user_data/');
                setUsername(response.data.username);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="d-flex">
            <div className='userbar' style={{ width: '250px' }}>
                <Userbar username={username} />
            </div>
            <div className="container mt-5" style={{ flex: 1 }}>
                <div className="pricing-container">
                    <div className="card">
                        <h3>{logdata.plan.name}</h3>
                        <div className="card-content">
                            <img src="/images/2.png" alt={logdata.plan.name} />
                            <h2>${logdata.plan.price}/mo</h2>
                            <p><strong>Price:</strong> ${logdata.plan.price}</p>
                            {logdata.plan.name === 'Free' ? (
                                <p>You can post 3 posts for free</p>
                            ) : (
                                <>
                                    <p><strong>Number of Posts:</strong> {logdata.plan.number_of_post}</p>
                                    {/* Render other plan information here */}
                            <button onClick={deactivate}>Unactivate</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
