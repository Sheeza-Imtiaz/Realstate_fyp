import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import styles from './Dashboard.module.css';

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

        fetchData('http://192.168.12.108:8001/real_estate/users/', setUsers);
        fetchData('http://192.168.12.108:8001/real_estate/allproducts/', setProperties);
        fetchData('http://192.168.12.108:8001/real_estate/contact/', setMessages);
        fetchData('http://192.168.12.108:8001/real_estate/plans/', setPricingCards);
    }, []);

    const data = {
        labels: ['Users', 'Properties', 'Messages', 'Pricing Cards'],
        datasets: [
            {
                label: 'Counts',
                data: [users, properties, messages, pricingCards],
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <div className="dashboardContainer d-flex">
                <div className='sidebar' style={{ width: '250px' }}>
                    <Sidebar />
                </div>
                <div className={styles.dashboardContent}>
                    <div className="row p-5">
                        <div className="col-md-4 mb-5">
                            <div className="card" style={{ backgroundColor: "#e3ffd7" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Number Of Users</h5>
                                    <p className="card-text">{users}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card" style={{ backgroundColor: "#ddc2ff" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Property Listing</h5>
                                    <p className="card-text">{properties}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card" style={{ backgroundColor: "#cdd3ff" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Messages</h5>
                                    <p className="card-text">{messages}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card" style={{ backgroundColor: "	#e4fff6" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Pricing Cards</h5>
                                    <p className="card-text">{pricingCards}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4" style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                        <div className="cards" >
                            <div className="card-body">
                                <h5 className="card-title">Data Overview</h5>
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>

    );
}

export default Dashboard;
