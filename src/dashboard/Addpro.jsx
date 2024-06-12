import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../dashboard/Sidebar';

const Addpro = () => {
  const getdata = JSON.parse(sessionStorage.getItem('logdata'));
  const accessToken = getdata ? getdata.access : null;

  const [formData, setFormData] = useState({
    type:'',
    name: '',
    location: '',
    size: '',
    price: '',
    beds: '',
    baths: '',
    features: '',
    descriptions: '',
    user_id: getdata ? getdata.id : null,
    product_picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://192.168.0.101:8000/real_estate/products/', formDataToSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data && response.data.user && response.data.user.id) {
        alert('Property added successfully!');
        toast.success('Property added successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        
        setFormData({
          type:'',
          name: '',
          location: '',
          size: '',
          price: '',
          beds: '',
          baths: '',
          features: '',
          descriptions: '',
          user_id: getdata ? getdata.id : null,
          product_picture: null,
        });
      } else {
        alert('Sorry for the inconvenience');
      }
    } catch (error) {
      console.error('Error uploading data:', error);

      if (error.response && Array.isArray(error.response.data)) {
        error.response.data.forEach(errMsg => {
          console.error(`Error: ${errMsg}`);
          alert(`Error: ${errMsg}`);
          toast.error(`Error: ${errMsg}`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
      } else {
        // const errorMsg = 'Failed to add property. Please try again later.';
        // console.error(errorMsg);
        // alert(errorMsg);
        // toast.error(errorMsg, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      }
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
        <div className="form" style={{ flex: '1', marginLeft: "60px"}}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="type" className="form-label">type</label>
              <input type="text" className="form-control" name="type" value={formData.type} onChange={handleChange} id="type" placeholder="" />
            </div>
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
              <input type="text" className="form-control" name="beds" value={formData.beds} onChange={handleChange} id="beds" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="baths" className="form-label">Bathroom</label>
              <input type="text" className="form-control" name="baths" value={formData.baths} onChange={handleChange} id="baths" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="features" className="form-label">Features</label>
              <textarea className="form-control" name="features" value={formData.features} onChange={handleChange} id="features" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="descriptions" className="form-label">Description</label>
              <textarea className="form-control" name="descriptions" value={formData.descriptions} onChange={handleChange} id="description" rows="5"></textarea>
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
