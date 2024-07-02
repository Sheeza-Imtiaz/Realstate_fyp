// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PaymentModal = ({ onRequestClose, plan }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const logdata=JSON.parse(sessionStorage.getItem('logdata'));
//     const id=logdata?logdata.id:'';




//     const [address, setAddress] = useState('');

//     const handleChange = (e) => {
//         setAddress(e.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.error(error);
//         } else {
//             try {
//                 const plan_id=plan.id;
//                 const response = await axios.patch(`http://192.168.12.105:8001/real_estate/users/${id}/update-plan/`, {
//                     plan_name: plan.name,
//                 });

//                 if (response.data.plan === plan_id) {
//                     console.log('Payment successful!');
//                     toast('Payment successful!');
//                     onRequestClose();
//                 } else {
//                     console.error('Payment failed');
//                     toast.error('Payment failed.');
//                 }
//             } catch (error) {
//                 console.error('Error processing payment:', error);
//                 toast.error('Error processing payment.');
//             }
//         }
//     };

//     return (
//         <div className='mod'>
//         <div className="modal fade show d-block" role="dialog">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Complete Your Purchase</h5>
//                         <button type="button" className="close" onClick={onRequestClose}>
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label htmlFor="address">Address</label>
//                                 <input
//                                     type="text"
//                                     id="address"
//                                     name="address"
//                                     className="form-control"
//                                     value={address}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label>Card Details</label>
//                                 <CardElement className="form-control" />
//                             </div>
//                             <button type="submit" className="btn" disabled={!stripe}>
//                                 Pay ${plan?.price}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default PaymentModal;
