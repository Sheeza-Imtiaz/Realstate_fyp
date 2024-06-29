import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userbar from '../user/Userbar';
import './Userprofile.css';

const Userprofile = () => {
    const getdata = JSON.parse(sessionStorage.getItem('logdata'));
    const accessToken = getdata ? getdata.access : null;
    const userId = getdata ? getdata.id : null;

    const [setProfileData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [userProperties, setUserProperties] = useState([]);

    useEffect(() => {
        if (userId && accessToken) {
            axios.get(`http://192.168.12.105:8001/real_estate/users/${userId}/`, {
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

            axios.get(`http://192.168.12.105:8001/real_estate/products/?user_id=${userId}`, {
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

    const handleDeleteProperty = async (propertyId) => {
        try {
            await axios.delete(`http://192.168.12.105:8001/real_estate/products/${propertyId}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setUserProperties(prevProperties => prevProperties.filter(property => property.id !== propertyId));
        } catch (error) {
            console.error('Error deleting property:', error);
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
                <div className="container mt-5" style={{ flex: 1 }}>
                    <div className="container properties-section">
                        <h1 className="mb-3">My Properties</h1>
                        <div className='container'>
                            <div className='row'>
                                {userProperties.map((property) => (
                                    <div className="col-lg-4 col-md-6 mb-5 wow fadeInUp" data-wow-delay="0.1s" key={property.id}>
                                        <div className="property-property rounded" style={{ height: "100%" }}>
                                            <div className="position-relative overflow-hidden">
                                                <img className="img-fluid" src={property.product_picture} alt={property.name} />
                                                <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>
                                                    {property.type}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="d-block h5 mb-2">{property.name}</h4>
                                                <div className="p-3 d-flex justify-content-between align-propertys-center">
                                                    <h5 className="mb-2" style={{ color: "#fc9700" }}>${property.price}</h5>
                                                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                                                </div>
                                                <h4 className="d-block h5 mb-2">{property.size}</h4>
                                                <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>{property.location}</p>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <button onClick={() => handleDeleteProperty(property.id)} className="btn">Delete</button>
</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="main-content">
                    <div className="properties-section">
                        <h2>My Properties</h2>
                        <ul className="property-list">
                            {userProperties.map(property => (
                                <div key={property.id} className="propert-property">
                                <img  alt="" src={property.product_picture}/> 
                                    <h5>{property.name}</h5>
                                    <p><strong>Location:</strong> {property.location}</p>
                                    <p><strong>Price:</strong> {property.price}</p>
                                    <p><strong>Size:</strong> {property.size}</p>
                                    <p><strong>Beds:</strong> {property.beds} Beds, <strong>Baths:</strong> {property.baths} Baths</p>
                                    <p><strong>Features:</strong> {property.features}</p>
                                    <button onClick={() => handleDeleteProperty(property.id)} className="btn">Delete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Userprofile;
