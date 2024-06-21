import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';

const PricingForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [number_of_post, setNumberOfPosts] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pricingData = {
            name,
            price: parseFloat(price),
            duration,
            number_of_post: parseInt(number_of_post),
        };

        try {
            const response = await axios.post('http://192.168.0.108:8000/real_estate/plans/', pricingData);
            console.log('Pricing data submitted successfully:', response.data);
            setName('');
            setPrice('');
            setDuration('');
            setNumberOfPosts('');
        } catch (error) {
            console.error('Error submitting pricing data:', error);
        }
    };

    return (
        <div className="" style={{ display: 'flex', margin: '0' }}>
            <div className="sidebar" style={{ flex: '0 0 auto' }}>
                <Sidebar />
            </div>
            <div className="form" style={{ flex: '1', marginLeft: "60px" }}>
                <form className="pricing-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div>
                        <label>Duration:</label>
                        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                    </div>
                    <div>
                        <label>Number of Posts:</label>
                        <input type="number" value={number_of_post} onChange={(e) => setNumberOfPosts(e.target.value)} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PricingForm;
