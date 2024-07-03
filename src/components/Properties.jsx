import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Footer from './Footer';

const Properties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [type, setType] = useState('');

  useEffect(() => {
    axios.get('http://192.168.12.108:8001/real_estate/allproducts/')
      .then((res) => {
        setProperties(res.data);
        setFilteredProperties(res.data); // Set initially to all properties
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const seeit = (id) => {
    axios.get(`http://192.168.12.108:8001/real_estate/allproducts/${id}/`)
      .then((res) => {
        sessionStorage.setItem('editdata', JSON.stringify(res.data));
        navigate('/mydetail');
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  };

  const handleFavoriteClick = (e, id) => {
    e.stopPropagation();
    const token = JSON.parse(sessionStorage.getItem('token'));
    const data = JSON.parse(sessionStorage.getItem('logdata'));
    const body = {
      product_id: id,
      user: data.id,
    };

    axios.post(
      'http://192.168.12.108:8001/real_estate/favorites/',
      body,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
          }));
          toast('Added to favorites successfully');
        } else {
          console.error('Failed to update favorites:', res);
          toast('Failed to update favorites');
        }
      })
      .catch((error) => {
        console.error('Error updating favorites:', error);
        toast.error('Error updating favorites');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = properties.filter((property) =>
      property.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <>
      <CustomNavbar />
      <div className="container-fluid mt-5">
        <div className="container property-section">
          <div className="row g-0 gx-5 mb-4">
            <div className="col-lg-6">
              <div className="text-start mx-auto wow slideInLeft" data-wow-delay="0.1s">
                <h1 className="mb3">Property Listing</h1>
                <p>Explore our comprehensive property listings featuring a variety of options tailored to suit different lifestyles and preferences. Whether you're searching for apartments, villas, houses, or offices, each listing provides detailed information to help you find your ideal property.</p>
              </div>
            </div>
            <div className="col-lg-6 justify-content-end">
              <form id="searchForm" onSubmit={handleSubmit} className="justify-content-center d-flex">
                <div className="me-2">
                  <input type="text" className="form-control" id="propertyType" value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Search by type"
                  />
                </div>
                <button type="submit" className="btn-b align-self-end">Search</button>
              </form>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {filteredProperties.map((item) => (
                <div className="col-lg-4 col-md-6 mb-5 wow fadeInUp" data-wow-delay="0.1s" key={item.id}>
                  <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="" data-bs-target="">
                    <div className="position-relative overflow-hidden">
                      <img className="img-fluid" src={item.product_picture} alt={item.name} />
                      <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>
                        {item.type}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="d-block h5 mb-2">{item.name}</h4>
                      <div className="p-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-2" style={{ color: "#fc9700" }}>${item.price}</h5>
                        <i
                          className={`fa fa-heart ${favorites[item.id] ? 'text-warning' : 'text-muted'}`}
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => handleFavoriteClick(e, item.id)}
                        ></i>
                      </div>
                      <h4 className="d-block h5 mb-2">{item.size}</h4>
                      <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>{item.location}</p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button className="btn" style={{ backgroundColor: "#1e4f5c", color: "white" }} onClick={() => seeit(item.id)}>Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <Footer />
    </>
  );
};

export default Properties;
