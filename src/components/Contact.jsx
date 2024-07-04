import React, { useState } from 'react';
import './style.css';
import Footer from './Footer';
import CustomNavbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch('http://192.168.12.103:8001/real_estate/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          toast('Message Sent Successfully', {
          });
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          toast('Message Not Sent, Try Again');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast('An error occurred while submitting the form.');
      });
  };

  return (
    <>
      <CustomNavbar />
      <div className="container bg-white p-0">
        {/* Spinner and Header */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
              <h1 className="mb-3" style={{ color: "#1e4f5c", fontSize: "50px" }}>Contact Us</h1>
              <p>If you need help with any aspect of our service, our customer support team is available to assist you. Feel free to reach out to us via email or phone, and we’ll get back to you as soon as possible.</p>
            </div>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-light p-3">
                      <div className="d-flex align-items-center bg-white p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)', height: "90px" }}>
                        <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                          <i className="fa fa-map-marker-alt" style={{ color: '#1e4f5c' }}></i>
                        </div>
                        <span>123 Street, Lahore, Pakistan</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="bg-light p-3">
                      <div className="d-flex align-items-center bg-white p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)', height: "90px" }}>
                        <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                          <i className="fa fa-envelope-open" style={{ color: '#1e4f5c' }}></i>
                        </div>
                        <span>Realestate@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-light p-3">
                      <div className="d-flex align-items-center bg-white p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)', height: '90px' }}>
                        <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                          <i className="fa fa-phone-alt" style={{ color: '#1e4f5c' }}></i>
                        </div>
                        <span>+012 345 6789</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274261047!2d74.00472033834701!3d31.48310365791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714132651819!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ minHeight: '400px', border: '0' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps Embed"
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                  <p className="mb-4">Whether you have questions about our services, need assistance with your account, or want to provide feedback, we're here to help. Please fill out the form below, and our team will get back to you as soon as possible. 
                  {/* <a href="https://htmlcodex.com/contact-form"> Download Now </a>. */}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Your Name</label>
                          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Your Email</label>
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                            id="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <label htmlFor="subject">Subject</label>
                          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: '150px' }}
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn w-100 py-3" type="submit" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <Footer />
    </>
  );
}

export default Contact;
