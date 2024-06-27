import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// import styles from './Dashboard.module.css';

function Dashboard() {
    const [users, setUsers] = useState(0);
    const [properties, setProperties] = useState(0);
    const [messages, setMessages] = useState(0);
    const [pricingCards, setPricingCards] = useState(0);

    useEffect(() => {
        async function fetchData(url, setter) {
            const response = await fetch(url);
            const data = await response.json();
            setter(data.length);
        }

        fetchData('http://192.168.12.102:8001/real_estate/users/', setUsers);
        fetchData('http://192.168.12.102:8001/real_estate/allproducts/', setProperties);
        fetchData('http://192.168.12.102:8001/real_estate/contact/', setMessages);
        fetchData('http://192.168.12.102:8001/real_estate/plans/', setPricingCards);
    }, []);

    return (
        <>
        <div><Sidebar /></div>
            
            <div className='container'>
                <div className="row  p-5">
                    <div className="col-md-4 ">
                        <div class="card" style={{ }} >
                            <div class="card-body">
                                <h5 class="card-title">Number Of Users</h5>
                                <p class="card-text">{users}</p>
                                {/* <NavLink to='/enrolluser' className='btn text-white'>View</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div class="card" >
                            <div class="card-body ">
                                <h5 class="card-title">Property Listing</h5>
                                <p class="card-text">{properties}</p>
                                {/* <NavLink to='/alluser' className='btn text-white'>View</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Messages</h5>
                                <p class="card-text">{messages}</p>
                                {/* <NavLink to='/admissionlist' className='btn text-white'>View</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Pricing Cards</h5>
                                <p class="card-text">{pricingCards}</p>
                                {/* <NavLink to='/teacher' className='btn text-white'>View</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Number Of </h5>
                                <p class="card-text">{}</p>
                                {/* <NavLink to='/courses' className='btn text-white'>View</NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
