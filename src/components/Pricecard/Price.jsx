import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Price.css';

const Pricing = () => {
    const [pricingPlans, setPricingPlans] = useState([]);

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.12.102:8001/real_estate/plans/');
                setPricingPlans(response.data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPricingPlans();
    }, []);

    return (
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
                        <button>Activate</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pricing;
