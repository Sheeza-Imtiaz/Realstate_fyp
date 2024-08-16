import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdb-react-ui-kit'; // Assuming you have MDBSpinner imported
import CustomNavbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const resp = await axios.post('http://192.168.12.110:8000/real_estate/login/', formData);
      sessionStorage.setItem('logdata', JSON.stringify(resp.data));
      sessionStorage.setItem('token', JSON.stringify(resp.data.access));
      setIsLoggedIn(true);
      setUserData(resp.data);
      if (resp.data.role === "user") {
        toast.success('User Login Successful!', {
          className: "toast-message"
        });
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.success('Admin Login Successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('Incorrect username or password. Please try again.');
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <>
      <CustomNavbar />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
                {isLoggedIn ? `Welcome, ${userData?.username || ''}!` : 'Log in'}
              </h3>
              {!isLoggedIn && (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="mb-1 mx-5 w-100">Email address</label>
                  <MDBInput wrapperClass="mb-1 mx-5 w-100" id="email" name="username" type="text" size="lg" value={formData.username} onChange={handleChange} required />

                  <label htmlFor="password" className="mb-1 mx-5 w-100">Password</label>
                  <MDBInput wrapperClass="mb-4 mx-5 w-100" id="password" name="password" type="password" size="lg" value={formData.password} onChange={handleChange} required />

                  {loading ? (
                    {/* <div className="text-center">
                      <MDBSpinner color="primary" />
                    </div> */}
                  ) : (
                    <>
                      <button className="mb-1 px-5 p-2 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius: "5px" }}>

                      {/* <MDBSpinner color="light" small /> */}
                      {isLoggedIn ? 'Logout' : 'Login'}
                      </button>
                    
                      {!isLoggedIn && (
                        <p className="small mb-1 pb-lg-3 ms-5">
                          <a className="text-muted" href="http://192.168.12.110:8000/real_estate/password_reset/">
                            Forgot password?
                          </a>
                        </p>
                      )}
                      <p className="ms-5">
                        {!isLoggedIn && (
                          <span> Don't have an account?
                            <NavLink to="/LoginReg" className="link-info">Register here</NavLink>
                          </span>
                        )}
                      </p>
                    </>
                  )}
                </form>
              )}
              {isLoggedIn && (
                <MDBBtn className="w-100" size="lg" onClick={handleLogout} style={{ backgroundColor: "#1e4f5c" }}>
                  Logout
                </MDBBtn>
              )}
            </div>
          </MDBCol>
          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              src="/images/login.png"
              alt="Login"
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
}

export default Login;
