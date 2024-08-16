import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Card } from 'react-bootstrap';

const ActivatePkg = () => {
    const [activatedPackages, setActivatedPackages] = useState([]);

    useEffect(() => {
        const fetchActivatedPackages = async () => {
            try {
                const response = await axios.get('http://192.168.12.110:8000/real_estate/users/');
                const data = response.data.filter(user => user.role !== 'admin');
                const filteredPackages = data.filter(user => user.plan && user.plan.name !== 'Free');
                setActivatedPackages(filteredPackages);
                console.log(filteredPackages);
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
                {activatedPackages.map(user => (
                    <Card key={user.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>User: {user.username}</Card.Title>
                            <Card.Text>
                                <strong>Package:</strong> {user.plan ? user.plan.name : 'Unknown'}
                            </Card.Text>
                            <Card.Text>
                                <strong>Posts:</strong> {user.plan ? user.plan.number_of_post : 'Unknown'}
                            </Card.Text>
                            <Card.Text>
                                <strong>Date:</strong> {user.plan ? user.plan_date : 'Unknown'}
                            </Card.Text>
                            <Card.Text>
                                <strong>Price:</strong> {user.plan ? user.plan.price : 'Unknown'}
                            </Card.Text>
                            {/* Add image if available */}
                            {user.plan && user.plan.profile_photo && (
                                <Card.Img src={user.plan.profile_photo} alt="Profile" className="img-fluid" />
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ActivatePkg;
