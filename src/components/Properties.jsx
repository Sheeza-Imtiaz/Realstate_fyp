// import React from 'react';

// const Properties = () => {
//   return (
//     <>
//     <div className="container-xxl py-5">
//       <div className="container">
//         <div className="text-center mx-auto mb-5">
//           <h1 className="mb-3">Property Types</h1>
//           <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
//         </div>
//         <div className="row g-4">
//           {/* Apartment */}
//           <div className="col-lg-3 col-sm-6">
//             <a className="cat-item d-block bg-light text-center rounded p-3" href="">
//               <div className="rounded p-4">
//                 <div className="icon mb-3">
//                   <img className="img-fluid"  src="/images/icon-apartment.png"alt="Apartment Icon" />
//                 </div>
//                 <h6>Apartment</h6>
//                 <span>123 Properties</span>
//               </div>
//             </a>
//           </div>
//           {/* Villa */}
//           <div className="col-lg-3 col-sm-6">
//             <a className="cat-item d-block bg-light text-center rounded p-3" href="">
//               <div className="rounded p-4">
//                 <div className="icon mb-3">
//                   <img className="img-fluid" src="/images/icon-villa.png" alt="Villa Icon" />
//                 </div>
//                 <h6>Villa</h6>
//                 <span>123 Properties</span>
//               </div>
//             </a>
//           </div>
//           {/* House */}
//           <div className="col-lg-3 col-sm-6">
//             <a className="cat-item d-block bg-light text-center rounded p-3" href="">
//               <div className="rounded p-4">
//                 <div className="icon mb-3">
//                   <img className="img-fluid" src="/images/icon-house.png" alt="House Icon" />
//                 </div>
//                 <h6>Home</h6>
//                 <span>123 Properties</span>
//               </div>
//             </a>
//           </div>
//           {/* Office */}
//           <div className="col-lg-3 col-sm-6">
//             <a className="cat-item d-block bg-light text-center rounded p-3" href="">
//               <div className="rounded p-4">
//                 <div className="icon mb-3">
//                   <img className="img-fluid" src="/images/icon-deal.png" alt="Office Icon" />
//                 </div>
//                 <h6>Office</h6>
//                 <span>123 Properties</span>
//               </div>
//             </a>
//           </div>
//           {/* Repeat the same structure for other property types */}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Properties;

import React, { useEffect, useState } from 'react'

const Properties = () => {

  const [stated, upstated] = useState([]);
  useEffect(() => {
    const fetchit = async () => {
      const data = await fetch('http://127.0.0.1:8000/product/products/');
      const resu = await data.json();
      // console.log(resu)
      upstated(resu);
    }
    fetchit();
  }, [])
  console.log(stated);
  return (

    <div className='container'>
      <div className='row'>
        abc
        {stated.map((item, val) => {
          return (
            <>
              <div className='col-md-4 mt-5 newproduct'>
                <div class="card">
                  <img src={item.product_picture} class="card-img-top" alt="checkit" />

                  <div class="card-body" key={val}>
                    <h5 class="card-title">{item.name}</h5>
                    <h5 class="card-title">{item.size}</h5>
                    <h5 class="card-title">{item.color}</h5>
                    <h5 class="card-title">{item.price}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </div>


            </>
          )

        })}
      </div>
    </div>

  )
}

export default Properties