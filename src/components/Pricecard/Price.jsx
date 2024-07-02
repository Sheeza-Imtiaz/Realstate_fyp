import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Price.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51PXfTnHVVjRYq8uUfTLgoHZcubNYV6CqGl0fJcYejZyna849TPPs5h8Bw0SkFguIH7T3dskSEhWhmPgsk1Wcb2Ej00JJu2RcKa');

const Pricing = () => {
    const navigate = useNavigate();
    const [pricingPlans, setPricingPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const logdata = JSON.parse(sessionStorage.getItem('logdata'));

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.12.105:8001/real_estate/plans/');
                console.log(response.data)
                const data=response.data.filter((item)=>item.name !=="Free");
                console.log(data)
                setPricingPlans(data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPricingPlans();
    }, []);

    const handleActivateClick = (plan) => {
        if (logdata) {
            setSelectedPlan(plan);
            setShowModal(true);
        } else {
            alert('Please login first');
            navigate('/login');
        }
    };

    const activatePlan = async (planId, paymentMethodId) => {
        try {
            const response = await axios.post(`http://192.168.12.105:8001/real_estate/plans/${planId}/activate/`, {
                payment_method_id: paymentMethodId,
            });
            console.log('Plan activated successfully:', response.data);
            toast.success('Plan activated successfully!');
            
            const { id, username } = logdata;
            await axios.post('http://192.168.12.105:8001/auth/logout/', { id, username });

            sessionStorage.removeItem();
            navigate('/login');
        } catch (error) {
            console.error('Error activating plan:', error);
            toast.error('Failed to activate plan.');
        }
    };

    return (
        <div className="pricing-container">
            {pricingPlans.map((plan) => (
                <div className="card" key={plan.id}>
                    <h3>{plan.name}</h3>
                    <div className="card-content">
                        <img src="/images/2.png" alt={plan.name} />
                        <h2>${plan.price}/mo</h2>
                        <p>
                            <strong>Price:</strong> ${plan.price}
                        </p>
                        <p>
                            <strong>Duration:</strong> {plan.duration} month(s)
                        </p>
                        <p>
                            <strong>Number of Posts:</strong> {plan.number_of_post}
                        </p>
                        <ul>
                            {plan.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleActivateClick(plan)}>Activate</button>
                    </div>
                </div>
            ))}

            {showModal && selectedPlan && (
                <div className="modal-backdrop fade show">
                    <Elements stripe={stripePromise}>
                        <PaymentModal
                            plan={selectedPlan}
                            onRequestClose={() => setShowModal(false)}
                            onActivate={activatePlan}
                        />
                    </Elements>
                </div>
            )}

            <ToastContainer position="top-right" />
        </div>
    );
};

const PaymentModal = ({ onRequestClose, plan, onActivate }) => {
    const stripe = useStripe();
    const elements = useElements();
    const logdata = JSON.parse(sessionStorage.getItem('logdata'));
    const userId = logdata.id;
    const navigate = useNavigate();
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
            try {
                const response = await axios.patch(`http://192.168.12.105:8001/real_estate/users/${userId}/update-plan/`, {
                    plan_name: plan.name,
                });

                if (response.data.plan === plan.id) {
                    console.log('Payment successful!');
                    toast('Payment successful  Login Again');
                    sessionStorage.removeItem('logdata');
                    sessionStorage.removeItem('token');
                    setTimeout(() => {
                        navigate('/login');
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
                    <button type="submit" className="btn" disabled={!stripe}>
                        Pay ${plan?.price}
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Pricing;
