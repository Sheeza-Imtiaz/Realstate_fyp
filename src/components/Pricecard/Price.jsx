import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Price.css';

const Pricing = () => {
    const [pricingPlans, setPricingPlans] = useState([]);

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get('http://192.168.0.111:8000/real_estate/plans/');
                setPricingPlans(response.data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPricingPlans();
    }, []);

    return (
        <div className="pricing-container">
            {pricingPlans.map((plan) => (
                <div className="card" key={plan.id}>
                    <h3>{plan.name}</h3>
                    <div className="card-content">
                        <img src="/images/2.png" alt={plan.name} />
                        <h2>${plan.price}/mo</h2>
                        <p><strong>Price:</strong> ${plan.price}</p>
                        <p><strong>Duration:</strong> {plan.duration} month(s)</p>
                        <p><strong>Number of Posts:</strong> {plan.number_of_post}</p>
                        <ul>
                            {plan.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button>Activate</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pricing;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Price.css';

// const Pricing = () => {
//     const [pricingPlans, setPricingPlans] = useState([]);

//     useEffect(() => {
//         const fetchPricingPlans = async () => {
//             try {
//                 const response = await axios.get('http://192.168.0.111:8000/real_estate/plans/');
//                 // console.log(response.data)
//                 setPricingPlans(response.data);
//             } catch (error) {
//                 console.error('Error fetching pricing plans:', error);
//             }
//         };
//         fetchPricingPlans();
//     }, []);
//     console.log(pricingPlans)

//     return (
//         <div className="pricing-container">
//             {pricingPlans.map(plan => (
//                 <div key={plan.id} className="card">
//                     <h3>{plan.name}</h3>
//                     <div className="card-content">
//                         <img src="path-to-icon" alt={plan.name} />
//                         <h2>${plan.price}/mo</h2>
//                         <p><strong>Price:</strong> ${plan.price} (-10%)</p>
//                         <p><strong>Duration:</strong> {plan.duration}</p>
//                         <p><strong>Number of Posts:</strong> {plan.number_of_posts}</p>
//                         <ul>
//                             {plan.features.map((feature, index) => (
//                                 <li key={index}>{feature}</li>
//                             ))}
//                         </ul>
//                         <button>Activate</button>
//                     </div>
//                 </div>
//             ))}
//             <div className="card recommended">
//                 <h3>SEED PROJECTS</h3>
//                 <div className="card-content">
//                     <img src="path-to-seed-icon" alt="Seed Projects" />
//                     <h2>$85/mo</h2>
//                     <p>$900 per year (-10%)</p>
//                     <ul>
//                         <li>Promoted Listings</li>
//                         <li>Better quality of leads</li>
//                         <li>Targeted marketing of listings</li>
//                     </ul>
//                     <button>Get Started!</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <h3>BILLBOARD PROJECTS</h3>
//                 <div className="card-content">
//                     <img src="path-to-billboard-icon" alt="Billboard Projects" />
//                     <h2>$115/mo</h2>
//                     <p>$1200 per year (-12%)</p>
//                     <ul>
//                         <li>Locality level brand promotion</li>
//                         <li>Dedicated space on results page</li>
//                         <li>Enhanced visibility</li>
//                     </ul>
//                     <button>Get Started!</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pricing;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Pricing = () => {
//     const [pricingPlans, setPricingPlans] = useState([]);

//     useEffect(() => {
//         const fetchPricingPlans = async () => {
//             try {
//                 const response = await axios.get('http://192.168.0.111:8000/real_estate/plans/');
//                 setPricingPlans(response.data);
//             } catch (error) {
//                 console.error('Error fetching pricing plans:', error);
//             }
//         };

//         fetchPricingPlans();
//     }, []);

//     return (
//         <div className="pricing-container">

//             <div className="card">
//                 <h3>Pricing Plans</h3>
//                 <div className="card-content">
//                     {pricingPlans.map(plan => (
//                         <div key={plan.id} className="pricing-card">
//                             <h3>{plan.name}</h3>
//                             <h2><strong>Price:</strong> ${plan.price}/mo</h2>
//                             <p><strong>Duration:</strong> {plan.duration}</p>
//                             <p><strong>Number of Posts:</strong> {plan.number_of_posts}</p>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pricing;
