import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import './Priceed.css';

const Priceed = () => {
    const [pricingPlans, setPricingPlans] = useState([]);

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.12.107:8001/real_estate/plans/');
                setPricingPlans(response.data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPricingPlans();
    }, []);

    const handleDeleteClick = async (planId) => {
        try {
            await axios.delete(`http://192.168.12.107:8001/real_estate/plans/${planId}/`);
            setPricingPlans(pricingPlans.filter((plan) => plan.id !== planId));
            alert('Plan deleted successfully!');
        } catch (error) {
            console.error('Error deleting plan:', error);
            alert('Failed to delete plan.');
        }
    };

    return (
        <div className="d-flex">
            <div className='sidebar' style={{ width: '250px' }}>
                <Sidebar />
            </div>
            <div className="container mt-5 ms-5" style={{ flex: 1 }}>
                <div className="pricing-container">
                    {pricingPlans.map((plan) => (
                        <div className="card" key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className="card-content">
                                <img src="/images/2.png" alt={plan.name} />
                                <h2>${plan.price}/mo</h2>
                                <p><strong>Price:</strong> ${plan.price}</p>
                                <p><strong>Duration:</strong> {plan.duration} month(s)</p>
                                <p><strong>Number of Posts:</strong> {plan.number_of_post}</p>
                                <ul>
                                    {plan.features?.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <button className="bg-danger" onClick={() => handleDeleteClick(plan.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Priceed;
