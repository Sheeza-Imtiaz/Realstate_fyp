import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import CustomNavbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const LoginReg = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_photo: null,
  });

  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_photo' && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://192.168.12.110:8000/real_estate/register/', formDataToSend);
      console.log(response.data);
      toast('Registration Successful');
      setTimeout(() => {
        navigate('/Login');
      }, 3000);
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Registration Failed');
    }
  };

  return (
    <>
      <CustomNavbar />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3 className="fw-normal mb-1 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
                Registration
              </h3>
              <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                <div className="pic form-group mb-2 mx-5 w-100">
                  <label htmlFor="profile_photo">Profile Photo:</label>
                  <input
                    className="form-control-file"
                    type="file"
                    name="profile_photo"
                    id="profile_photo"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {profilePhotoPreview && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                      <img
                        src={profilePhotoPreview}
                        alt="Profile"
                        style={{
                          width: '150px', // Adjust the size as needed
                          height: '150px', // Adjust the size as needed
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #ddd' // Optional: Add a border
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="form-group mb-1 mx-5 w-100">
                  <label htmlFor="username">Username:</label>
                  <MDBInput
                    wrapperClass="mb-1 w-100"
                    id="username"
                    name="username"
                    type="text"
                    size="lg"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-1 mx-5 w-100">
                  <label htmlFor="email">Email address:</label>
                  <MDBInput
                    wrapperClass="mb-1 w-100"
                    id="email"
                    name="email"
                    type="email"
                    size="lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-1 mx-5 w-100">
                  <label htmlFor="password">Password:</label>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    id="password"
                    name="password"
                    type="password"
                    size="lg"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="mb-1 px-5 p-2 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius: "5px" }}>
                  Register
                </button>
              </form>
              <div className="mx-5 w-100 mt-3">
                <span>Already have an account? <NavLink to="/Login" className="link-info">Login here</NavLink></span>
              </div>
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
        <ToastContainer position="top-right" />
      </MDBContainer>
      <Footer />
    </>
  );
};

export default LoginReg;
