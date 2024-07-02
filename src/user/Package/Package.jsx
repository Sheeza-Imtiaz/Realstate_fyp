import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Package.css';
import Userbar from '../Userbar';
import { useNavigate } from 'react-router-dom';

const Package = () => {
    const [ setPricingPlans] = useState([]);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();


    const logdata = JSON.parse(sessionStorage.getItem('logdata'));
    const userId = logdata.id;

    const deactivate = async () => {
        const userConfirmed = window.confirm('Are you sure you want to deactivate your current plan?');
        if (userConfirmed) {
            try {
                const response = await axios.patch(`http://192.168.12.105:8001/real_estate/users/${userId}/update-plan/`, {
                    plan_name: 'Free',
                });
                console.log(response);
                sessionStorage.removeItem('logdata');
                sessionStorage.removeItem('token');
                // setIsLoggedIn(false);
                navigate('/');
                
                // Optionally update the UI or logdata here to reflect the new plan
            } catch (error) {
                console.error('Error deactivating plan:', error);
            }
        }
    };

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.12.105:8001/real_estate/plans/');
                setPricingPlans(response.data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };

        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://192.168.12.105:8001/real_estate/user_data/');
                setUsername(response.data.username);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchPricingPlans();
        fetchUserData();
    }, [setPricingPlans]);

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
                            <p><strong>Number of Posts:</strong> {logdata.plan.number_of_post}</p>
                            <button onClick={deactivate}>Unactivate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
