// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from '../dashboard/Sidebar';

// const Addpro = () => {
//   const getdata=JSON.parse(sessionStorage.getItem('logdata'));
// console.log(getdata.access);
// // const ide=getdata.id;
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     size: '',
//     price: '',
//     product_picture: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: files ? files[0] : value // handle file input
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post(`http://192.168.0.115:8000/real_estate/products/${ide}/`, formDataToSend);
//       console.log(response.data);
//       toast.success('Property added successfully!', {
//         position: toast.POSITION.BOTTOM_RIGHT
//       });
//       // Clear form data after successful submission
//       setFormData({
//         name: '',
//         location: '',
//         size: '',
//         price: '',
//         product_picture: null
//       });
//     } catch (error) {
//       console.error('Error uploading data:', error);
//       toast.error('Failed to add property. Please try again later.', {
//         position: toast.POSITION.BOTTOM_RIGHT
//       });
//     }
//   };

//   return (
//     <>
//       <div className="" style={{ display: 'flex', margin: '0' }}>
//         <div className="sidebar" style={{ flex: '0 0 auto' }}>
//           <Sidebar />
//         </div>
//         <div className="form" style={{ flex: '1', marginLeft: "60px" }}>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">Price</label>
//               <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} id="price" placeholder="" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="location" className="form-label">Location</label>
//               <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} id="location" placeholder="" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="size" className="form-label">Size</label>
//               <input type="text" className="form-control" name="size" value={formData.size} onChange={handleChange} id="size" placeholder="" />
//             </div>
//             <div className="form-group">
//               <label>Profile Photo:</label>
//               <input className="form-control-file" type="file" name="product_picture" accept="image/*" onChange={handleChange} />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Addpro;



import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../dashboard/Sidebar';

const Addpro = () => {
  const getdata = JSON.parse(sessionStorage.getItem('logdata'));
  const accessToken = getdata ? getdata.access : null;

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    size: '',
    price: '',
    beds: '',
    baths: '',
    features: '',
    description: '',
    product_picture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value // handle file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formDataToSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(response.data);
      toast.success('Property added successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      // Clear form data after successful submission
      setFormData({
        name: '',
        location: '',
        size: '',
        price: '',
        beds: '',
        baths: '',
        features: '',
        description: '',
        product_picture: null
      });
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Failed to add property. Please try again later.', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  if (!accessToken) {
    return <div>Error: You must be logged in to add a property.</div>;
  }

  return (
    <>
      <div className="" style={{ display: 'flex', margin: '0' }}>
        <div className="sidebar" style={{ flex: '0 0 auto' }}>
          <Sidebar />
        </div>
        <div className="form" style={{ flex: '1', marginLeft: "60px" }}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} id="price" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} id="location" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">Size</label>
              <input type="text" className="form-control" name="size" value={formData.size} onChange={handleChange} id="size" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="beds" className="form-label">Bedroom</label>
              <input type="text" className="form-control" name="bedroom" value={formData.bedroom} onChange={handleChange} id="bedroom" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="baths" className="form-label">Bathroom</label>
              <input type="text" className="form-control" name="bathroom" value={formData.bathroom} onChange={handleChange} id="bathroom" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="features" className="form-label">Features</label>
              <textarea className="form-control" name="features" value={formData.features} onChange={handleChange} id="features" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} id="description" rows="5"></textarea>
            </div>
            <div className="form-group">
              <label>Profile Photo:</label>
              <input className="form-control-file" type="file" name="product_picture" accept="image/*" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Addpro;

