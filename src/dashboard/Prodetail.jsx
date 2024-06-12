import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';

const Prodetail = () => {
    const [stated, upstated] = useState([]);
    const [setUser] = useState(null);
    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('ulogin'));
        if (userData) {
            setUser(userData);
        }
        const fetchit = async () => {
            try {
                const response = await fetch('http://192.168.0.101:8000/real_estate/products/');
                const resu = await response.json();
                upstated(resu);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchit();
    }, );

    const deleteProduct = (productId) => {
        axios.delete(`http://192.168.0.101:8000/real_estate/products/${productId}/`)
            .then((res) => {
                console.log(res.data);
                upstated(prevState => prevState.filter(item => item.id !== productId));
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <div className='container-fluid' style={{ display: 'flex', margin:'0'}}>
            <div className="sidebar" style={{ flex: '0 0 auto' }}>
                <Sidebar />
            </div>
            <div className='container row'>
                {stated.map((item, index) => (
                    <div className='col-md-4 mt-5 newproduct' key={index}>
                        <div className="card">
                            <img src={item.product_picture} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h5 className="card-title">{item.size}</h5>
                                <h5 className="card-title">{item.color}</h5>
                                <h5 className="card-title">{item.price}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Prodetail;