import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const ActivatePkg = () => {
    const [activatedPackages, setActivatedPackages] = useState([]);

    useEffect(() => {
        const fetchActivatedPackages = async () => {
            try {
                const response = await axios.get('http://192.168.12.108:8001/real_estate/users/');
                const data = response.data.filter(user => user.role !== 'admin');
                const filteredPackages = data.filter(user => user.plan && user.plan.name !== 'Free');
                setActivatedPackages(filteredPackages);
            } catch (error) {
                console.error('Error fetching activated packages:', error);
            }
        };

        fetchActivatedPackages();
    }, []);

    return (
        <div className="d-flex">
            <div className='sidebar' style={{ width: '250px' }}>
                <Sidebar />
            </div>
            <div className="container mt-5 ms-5" style={{ flex: 1 }}>
                <h2>Activated Packages</h2>
                <ul>
                    {activatedPackages.map(user => (
                        <li key={user.id}>
                            <strong>User:</strong> {user.username} - 
                            <strong>Package:</strong> {user.plan ? user.plan.name : 'Unknown'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ActivatePkg;
