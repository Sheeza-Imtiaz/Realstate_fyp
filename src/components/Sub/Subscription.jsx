import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Subscription.css';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import aboutFirst from './ss.jpg'; 
import aboutSecond from './ss.jpg'; 
import aboutThird from './ss.jpg';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PXfTnHVVjRYq8uUfTLgoHZcubNYV6CqGl0fJcYejZyna849TPPs5h8Bw0SkFguIH7T3dskSEhWhmPgsk1Wcb2Ej00JJu2RcKa');

const Subscription = () => {
    const [pricingPlans, setPricingPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.12.110:8000/real_estate/plans/');
                const data = response.data.filter((item) => item.name !== "Free");
                setPricingPlans(data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPricingPlans();
    }, []);

    const handleActivateClick = (plan) => {
        setSelectedPlan(plan);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const PaymentModal = ({ plan, onRequestClose }) => {
        const stripe = useStripe();
        const elements = useElements();
        const [address, setAddress] = useState('');

        const handleChange = (e) => {
            setAddress(e.target.value);
        };

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return;
            }

            const cardElement = elements.getElement(CardElement);

            const { error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error(error);
                toast.error('Payment failed.');
            } else {
                const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

                try {
                    const logdata = JSON.parse(sessionStorage.getItem('logdata'));
                    const userId = logdata.id;

                    const response = await axios.patch(`http://192.168.12.110:8000/real_estate/users/${userId}/update-plan/`, {
                        plan_name: plan.name,
                        date: currentDate,
                    });

                    if (response.data.plan.id === plan.id) {
                        console.log('Payment successful!');
                        toast('Payment successful! Login Again');
                        
                        sessionStorage.removeItem('logdata');
                        sessionStorage.removeItem('token');
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 3000);
                        onRequestClose();
                    } else {
                        console.error('Plan update failed');
                        toast.error('Plan update failed.');
                    }
                } catch (error) {
                    console.error('Error processing payment:', error);
                    toast.error('Error processing payment.');
                }
            }
        };

        return (
            <Modal show={true} onHide={onRequestClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Complete Your Purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                value={address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Card Details</label>
                            <CardElement className="form-control" />
                        </div>
                        <button type="submit" className="btn" disabled={!stripe} style={{ backgroundColor: '#1e4f5c' }}>
                            Pay ${plan?.price}
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    };

    return (
        <>
            <CustomNavbar />
            <div className="fixed-background">
                <div className="pp container">
                    <h1 className='text-white'><br />Our Subscription Plans Are<br /></h1>
                    <p className='fs-5'>
                        Welcome to our subscription packages! Our plans are designed to provide you with the flexibility and features you need to manage your properties efficiently. Whether you're just starting out or looking to expand your real estate portfolio, we have the perfect plan for you.
                    </p>
                </div>
            </div>
            <div className="pp container mt-5">
                <div className="row container ">
                    <div className="col-md-6 pb-5 ps-5">
                        <img src={aboutFirst} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        {pricingPlans.length > 0 && (
                            <>
                                <h2>{pricingPlans[0].name} Plan</h2>
                                <ul>
                                    <li>Price: ${pricingPlans[0].price}</li>
                                    <li>Duration: {pricingPlans[0].duration} month(s)</li>
                                    <li>Number of Posts: {pricingPlans[0].number_of_post}</li>
                                    <li style={{ color: '#1e4f5c', fontWeight:'800' }}>Features:</li>
                                    <ul>
                                        <li>Access to basic property management tools</li>
                                        <li>24/7 customer support</li>
                                        <li>Listing in the property directory</li>
                                    </ul>
                                </ul>
                                <button onClick={() => handleActivateClick(pricingPlans[0])}>Activate</button>
                            </>
                        )}
                    </div>
                    <div className="col-md-6 pt-5 d-flex justify-content-center align-items-center flex-column">
                        {pricingPlans.length > 0 && (
                            <>
                                <h2>{pricingPlans[1].name} Plan</h2>
                                <ul>
                                    <li>Price: ${pricingPlans[1].price}</li>
                                    <li>Duration: {pricingPlans[1].duration} month(s)</li>
                                    <li>Number of Posts: {pricingPlans[1].number_of_post}</li>
                                    <li style={{ color: '#1e4f5c', fontWeight:'800' }}>Features:</li>
                                    <ul>
                                        <li>All features in the Basic Plan</li>
                                        <li>Advanced property management tools</li>
                                        <li>Priority customer support</li>
                                        <li>Featured listing in the property directory</li>
                                        <li>Access to marketing tools</li>
                                    </ul>
                                </ul>
                                <button onClick={() => handleActivateClick(pricingPlans[1])}>Activate</button>
                            </>
                        )}
                    </div>
                    <div className="col-md-6 pb-5 pt-5">
                        <img src={aboutSecond} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 pb-5 pt-5">
                        <img src={aboutThird} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        {pricingPlans.length > 0 && (
                            <>
                                <h2>{pricingPlans[2].name} Plan</h2>
                                <ul>
                                    <li>Price: ${pricingPlans[2].price}</li>
                                    <li>Duration: {pricingPlans[2].duration} month(s)</li>
                                    <li>Number of Posts: {pricingPlans[2].number_of_post}</li>
                                    <li style={{ color: '#1e4f5c', fontWeight:'800' }}>Features:</li>
                                    <ul>
                                        <li>All features in the Standard Plan</li>
                                        <li>Premium property management tools</li>
                                        <li>Dedicated account manager</li>
                                        <li>Enhanced marketing tools</li>
                                        <li>Comprehensive analytics and reporting</li>
                                    </ul>
                                </ul>
                                <button onClick={() => handleActivateClick(pricingPlans[2])}>Activate</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {showModal && selectedPlan && (
                <Elements stripe={stripePromise}>
                    <PaymentModal
                        plan={selectedPlan}
                        onRequestClose={handleCloseModal}
                    />
                </Elements>
            )}
            <Footer />
            <ToastContainer position="top-right" />
        </>
    );
};

export default Subscription;
