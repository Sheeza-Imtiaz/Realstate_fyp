import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Userbar from './Userbar';

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const token = JSON.parse(sessionStorage.getItem('token'));

    useEffect(() => {
        axios.get('http://192.168.12.103:8001/real_estate/favorites/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setFavorites(res.data);
        }).catch((error) => {
            console.error('Error fetching favorite properties:', error);
        });
    }, [token]);

    // const handleFavoriteClick = (e, id) => {
    //     e.stopPropagation();
    //     const newFavoriteStatus = !favorites[id];
    //     axios.post('http://192.168.12.103:8001/real_estate/favorites/', { propertyId: id }, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((res) => {
    //         if (res.status === 200) {
    //             setFavorites((prevFavorites) => ({
    //                 ...prevFavorites,
    //                 [id]: newFavoriteStatus,
    //             }));
    //         } else {
    //             console.error('Failed to update favorites:', res);
    //         }
    //     }).catch((error) => {
    //         console.error('Error updating favorites:', error);
    //     });
    // };


    const handleRemoveFavorite = (id) => {
        axios.delete(`http://192.168.12.103:8001/real_estate/favorites/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 204) {
                setFavorites((prevFavorites) => prevFavorites.filter((property) => property.id !== id));
            } else {
                console.error('Failed to remove favorite:', res);
            }
        }).catch((error) => {
            console.error('Error removing favorite:', error);
        });
    };

    return (
        <>
            <div className="d-flex">
                <div className='userbar' style={{ width: '250px' }}>
                    <Userbar />
                </div>
                <div className="container mt-5" style={{ flex: 1 }}>
                    <div className="container properties-section">
                        <h1 className="mb-3">My Favorite Properties</h1>
                        <div className='container'>
                            <div className='row'>
                                {favorites.map((item) => (
                                    <div className="col-lg-4 col-md-6 mb-5 wow fadeInUp" data-wow-delay="0.1s" key={item.id}>
                                        <div className="property-item rounded" style={{ height: "100%" }}>
                                            <div className="position-relative overflow-hidden">
                                                <img className="img-fluid" src={item.product.product_picture} alt={item.name} />
                                                <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>
                                                    {item.product.type}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="d-block h5 mb-2">{item.product.name}</h4>
                                                <div className="p-3 d-flex justify-content-between align-items-center">
                                                    <h5 className="mb-2" style={{ color: "#fc9700" }}>${item.product.price}</h5>
                                                    <i
                                                        className={`fa fa-heart ${favorites[item.id] ? 'text-warning' : 'text-muted'}`}
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => handleRemoveFavorite( item.id)}
                                                    ></i>
                                                </div>
                                                <h4 className="d-block h5 mb-2">{item.product.size}</h4>
                                                <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>{item.product.location}</p>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorite;
