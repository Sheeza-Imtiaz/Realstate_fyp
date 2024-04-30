import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const LoginReg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://192.168.12.108:8000/app1/signup/', formData);
      console.log(resp.data); // Assuming the server returns data
    } catch (error) {
      console.error('Error occurred:', error);
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
            <form onSubmit={handleSubmit}>
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
              <MDBBtn className="mb-4 px-5 mx-5 w-100"  size="lg" type="submit" style={{backgroundColor:"#1e4f5c"}}>
                Register
              </MDBBtn>
            </form>
          </div>
        </MDBCol>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="/images/Sign_up.png"
            alt="Registration image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginReg;







// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginReg = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await axios.post('http://192.168.0.105:8000/restapi/users/', formData);
//       console.log(resp.data); // Assuming the server returns data
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
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
//       </form>
//     </div>
//   );
// };

// export default LoginReg;
