// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await axios.post(
//         "http://192.168.0.105:8000/restapi/users/",
//         formData
//       );
//       console.log(resp.data); // Assuming the server returns data
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//         {/* <button onClick={shiza}>create new</button> */}
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { Link, NavLink } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    loggedIn: false // Add loggedIn state to track login status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://192.168.12.108:8000/app1/login/', formData);
      console.log(resp.data); // Assuming the server returns data
      // If login is successful, set loggedIn to true
      setFormData({
        ...formData,
        loggedIn: true
      });
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  // useHistory to Admin component if loggedIn is true
  if (formData.loggedIn) {
    return <useHistory to="/admin" />;
  }

  return (
    <MDBContainer fluid>
    <MDBRow>
          <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
              Log in
              </h3>
          <form onSubmit={handleSubmit}>
            <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="email"
                name="username"
                type="text"
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
              <MDBBtn className="mb-4 px-5 mx-5 w-100"  size="lg" type="submit" style={{backgroundColor:"#1e4f5c"}}>
                            Login
              </MDBBtn>
              <p className="small mb-5 pb-lg-3 ms-5">
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </p>
              <p className="ms-5">
  Don't have an account? <NavLink to="/LoginReg" className="link-info">Register here</NavLink>
</p>
            </form>
          </div>
        </MDBCol>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="/images/login.png"
            alt="Login image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import { Link, NavLink } from "react-router-dom";


// function Login() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await axios.post('http://192.168.0.104:8000/restapi/api/login/', formData);
//       console.log(resp.data); // Assuming the server returns data
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <MDBContainer fluid>
//       <MDBRow>
//         <MDBCol sm="6">
//           <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
//             <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
//               Log in
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <MDBInput
//                 wrapperClass="mb-4 mx-5 w-100"
//                 label="Email address"
//                 id="email"
//                 name="username"
//                 type="text"
//                 size="lg"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <MDBInput
//                 wrapperClass="mb-4 mx-5 w-100"
//                 label="Password"
//                 id="password"
//                 name="password"
//                 type="password"
//                 size="lg"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <MDBBtn className="mb-4 px-5 mx-5 w-100"  size="lg" type="submit" style={{backgroundColor:"#6c64fb"}}>
//                 Login
//               </MDBBtn>
//               <p className="small mb-5 pb-lg-3 ms-5">
//                 <a className="text-muted" href="#!">
//                   Forgot password?
//                 </a>
//               </p>
//               <p className="ms-5">
//   Don't have an account? <NavLink to="/LoginReg" className="link-info">Register here</NavLink>
// </p>
//             </form>
//           </div>
//         </MDBCol>
//         <MDBCol sm="6" className="d-none d-sm-block px-0">
//           <img
//             src="/images/login.png"
//             alt="Login image"
//             className="w-100"
//             style={{ objectFit: 'cover', objectPosition: 'left' }}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Login;


// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function Login() {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>

//         <MDBCol sm='6'>
//           <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

//             <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

//             <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
//             <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

//           </div>

//         </MDBCol>

//         <MDBCol sm='6' className='d-none d-sm-block px-0'>
//         <img src="/images/login.png" alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Login;