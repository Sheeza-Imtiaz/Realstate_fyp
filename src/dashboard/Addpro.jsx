import React, { useState } from 'react';
import axios from 'axios';
// import { DataProvider } from './contexts/DataContext';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../dashboard/Sidebar';

const Addpro = () => {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    size: '', 
    price: '',
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
      const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formDataToSend);
      console.log(response.data);
      toast.success('Property added successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
      // Clear form data after successful submission
      setFormData({
        name: '',
        area: '',
        size: '',
        price: '',
        product_picture: null
      });
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Failed to add property. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };
  return (
    <>
      <div className="" style={{ display: 'flex', margin:'0'}}>
        <div className="sidebar" style={{ flex: '0 0 auto' }}>
          <Sidebar />
        </div>
        <div className="form" style={{ flex: '1', marginLeft: "60px" }}>
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
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
            <div className="form-group">
              <label>Profile Photo:</label>
              <input className="form-control-file" type="file" name="product_picture" accept="image/*" onChange={handleChange} />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addpro;
