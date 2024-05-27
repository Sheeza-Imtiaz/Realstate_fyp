import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from './Navbar';

const Properties = () => {
const navigate=useNavigate();
  const [stated, upstated] = useState([]);
  useEffect(() => {
    const fetchit = async () => {
      const data = await fetch('http://192.168.0.116:8000/real_estate/products/');
      const resu = await data.json();
      console.log(resu)
      // console.log(resu)
      upstated(resu);
    }
    fetchit();
  }, [])
  console.log(stated);

  const seeit=(id)=>{
    // console.log(id)
    axios.get(`http://192.168.0.116:8000/real_estate/products/${id}/`).then((res)=>{
      // console.log(res.data);
      sessionStorage.setItem('editdata', JSON.stringify(res.data));
      navigate('/mydetail'); 
    })
  }
  return (
<>
<CustomNavbar/>
<div className='container'>
      <div className='row'>
        {stated.map((item, val) => {
          return (
            <>
              {/* <div className='col-md-4 mt-5 newproduct'>
                <div className="card">
                  <img src={item.product_picture} class="card-img-top" alt="checkit" />
                  <div className="card-body" key={val}>
                    <h5 className="card-title">{item.name}</h5>
                    <h4 className="card-title">{item.size}</h4>
                    <h5 className="card-title">{item.color}</h5>
                    <h5 className="card-title">{item.price}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn" style={{backgroundColor:"#236c7e" , color:"white"}} onClick={() => seeit(item.id)}>Details</button>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="" data-bs-target="">
    <div className="position-relative overflow-hidden">
      <img className="img-fluid" src={item.product_picture} alt={item.name} />
      <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#236c7e", fontSize: " 18px", fontWeight: "600" }}>
        {item.name}
      </div>
    </div>
    <div className="p-4">
      <h5 className="mb-3" style={{ color: "#fc9700" }}>${item.price}</h5>
      <h4 className="d-block h5 mb-2">{item.size}</h4>
      <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>{item.color}</p>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button className="btn" style={{ backgroundColor: "#236c7e", color: "white" }} onClick={() => seeit(item.id)}>Details</button>
    </div>
  </div>
</div>

            </>
          )
        })}
      </div>
    </div>
</>
  )
}
export default Properties















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://192.168.0.115:8000/real_estate/products/');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const seeDetails = (id) => {
//     console.log('Fetch details for property ID:', id);
//     // Make API call to fetch details of the property with the given ID
//     // Example: axios.get(`http://192.168.0.115:8000/real_estate/products/${id}`).then((res) => { console.log(res.data); });
//   };

//   return (
//     <div className="container">
//       <div className="row g-4">
//         {properties.map((property) => (
//           <div key={property.id} className="col-lg-4  col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//             <div className="property-item rounded" style={{ height: '70%' }}>
//               <div className="position-relative overflow-hidden">
//                 <img src={property.product_picture} class="card-img-top" alt="checkit" />
//                 <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: '#236c7e', fontSize: '18px', fontWeight: '600' }}>
//                   {property.category}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h5 className="mb-3" style={{ color: '#fc9700' }}>${property.price}</h5>
//                 <h4 className="d-block h5 mb-2">{property.title}</h4>
//                 <p>
//                   <i className="fa fa-map-marker-alt me-2" style={{ color: '#236c7e' }}></i>
//                   {property.address}
//                 </p>
//                 <button className="btn btn-primary" onClick={() => seeDetails(property.id)}>Details</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Properties;
