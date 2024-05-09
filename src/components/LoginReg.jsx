import React, { useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const LoginReg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_photo: null,
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
      const response = await axios.post('http://192.168.0.115:8000/real_estate/users/', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
              Registration
            </h3>
            <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
            <div className="form-group">
        <label>Profile Photo:</label>
        <input className="form-control-file" type="file"  name="profile_photo" accept="image/*" onChange={handleChange} />
      </div>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                id="username"
                name="username"
                type="text"
                size="lg"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="email"
                name="email"
                type="email"
                size="lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="password"
                name="password"
                type="password"
                size="lg"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {/* Add file input for profile image */}
             
              <button className="mb-4 px-5 p-3 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius: "5px" }}>
                Register
              </button>
            </form>
          </div>
        </MDBCol>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="/images/Sign_up.png"
            alt="Registration"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginReg;

