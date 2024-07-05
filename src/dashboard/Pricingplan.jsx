import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pricingplan = () => {
    const getdata = JSON.parse(sessionStorage.getItem('logdata'));
    const accessToken = getdata ? getdata.access : null;

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        duration: '',
        number_of_post: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.12.107:8001/real_estate/plans/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log('Pricing data submitted successfully:', response.data);
            toast('Pricing plan added successfully!');
            setFormData({
                name: '',
                price: '',
                duration: '',
                number_of_post: '',
            });
        } catch (error) {
            console.error('Error submitting pricing data:', error);
            toast('Failed to add pricing plan. Please try again later.');
        }
    };

    if (!accessToken) {
        return <div style={{ fontSize: "20px" }}>Error: You must be logged in to add a pricing plan.</div>;
    }

    return (
        <>
            <div className="container-fluid" style={{ display: "flex", height: "100vh" }}>
                <div className="sidebar" style={{ flex: "0 0 250px", borderRight: "1px solid #ddd" }}>
                    <Sidebar />
                </div>
                <div className="form" style={{ flex: "1", padding: "50px", overflowY: "auto" }}>
                    <form onSubmit={handleSubmit}>
                        <h1>Add Pricing Plan</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Duration:</label>
                            <input type="text" className="form-control" id="duration" name="duration" value={formData.duration} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number_of_post" className="form-label">Number of Posts:</label>
                            <input type="number" className="form-control" id="number_of_post" name="number_of_post" value={formData.number_of_post} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn" style={{backgroundColor:"#1e4f5c"}}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </>
    );
};

export default Pricingplan;
