// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
// import CustomNavbar from './Navbar';
// // import Login from './Login';

// const LoginReg = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     profile_photo: null,
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
//       const response = await axios.post('http://192.168.0.117:8000/real_estate/register/', formDataToSend);
//       console.log(response.data);
//       // Handle successful registration here
//       navigate('/Login'); // Navigate to login page
//     } catch (error) {
//       console.error('Error uploading data:', error);
//     }
//   };

//   return (
//     <>
//       <CustomNavbar />
//       <MDBContainer fluid>
//         <MDBRow>
//           <MDBCol sm="6">
//             <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
//               <h3 className="fw-normal mb-1 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
//                 Registration
//               </h3>
//               <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
//                 <div className="form-group mb-2 mx-5 w-100">
//                   <label>Profile Photo:</label>
//                   <input className="form-control-file" type="file" name="profile_photo" accept="image/*" onChange={handleChange} />
//                 </div>
//                 <MDBInput
//                   wrapperClass="mb-1 mx-5 w-100"
//                   label="Username"
//                   id="username"
//                   name="username"
//                   type="text"
//                   size="lg"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                 />
//                 <MDBInput
//                   wrapperClass="mb-1 mx-5 w-100"
//                   label="Email address"
//                   id="email"
//                   name="email"
//                   type="email"
//                   size="lg"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <MDBInput
//                   wrapperClass="mb-1 mx-5 w-100"
//                   label="Password"
//                   id="password"
//                   name="password"
//                   type="password"
//                   size="lg"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 {/* Add file input for profile image */}
//                 <button className="mb-1 px-5 p-2 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius: "5px" }}>
//                   Register
//                 </button>
//               </form>
//               <div className="mx-5 w-100 mt-3">
//                 Already have an account? <Link to="/Login">Login here</Link>
//               </div>
//             </div>
//           </MDBCol>
//           <MDBCol sm="6" className="d-none d-sm-block px-0">
//             <img
//               src="/images/Sign_up.png"
//               alt="Registration"
//               className="w-100"
//               style={{ objectFit: 'cover', objectPosition: 'left' }}
//             />
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default LoginReg;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import CustomNavbar from './Navbar';

const LoginReg = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_photo: null,
    plan:'Free'
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
      const response = await axios.post('http://192.168.0.117:8000/real_estate/register/', formDataToSend);
      console.log(response.data);
      // Handle successful registration here
      navigate('/Login'); // Navigate to login page
    } catch (error) {
      console.error('Error uploading data:', error);
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
                <div className="form-group mb-2 mx-5 w-100">
                  <label htmlFor="profile_photo">Profile Photo:</label>
                  <input
                    className="form-control-file"
                    type="file"
                    name="profile_photo"
                    id="profile_photo"
                    accept="image/*"
                    onChange={handleChange}
                  />
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
                Already have an account? <Link to="/Login">Login here</Link>
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
      </MDBContainer>
    </>
  );
};

export default LoginReg;
