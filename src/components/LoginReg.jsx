import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

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

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;

  //   if (type === 'file') {
  //     setFormData({ 
  //       ...formData,
  //       profile_photo: files[0]
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value
  //     });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // Create FormData object to send form data including files
  //     const formDataToSend = new FormData();
  //     formDataToSend.append('username', formData.username);
  //     formDataToSend.append('email', formData.email);
  //     formDataToSend.append('password', formData.password);
  //     formDataToSend.append('profile_photo', formData.profile_photo); // Append profilephoto

  //     const resp = await axios.post('http://192.168.12.109:8000/real_estate/users/', formDataToSend, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });

  //     console.log(resp.data); // Assuming the server returns data
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //   }
  // };

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
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

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
//       const resp = await axios.post('http://192.168.12.109:8000/real_estate/register/', formData);
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
//               Registration
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <MDBInput
//                 wrapperClass="mb-4 mx-5 w-100"
//                 label="Username"
//                 id="username"
//                 name="username"
//                 type="text"
//                 size="lg"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//               <MDBInput
//                 wrapperClass="mb-4 mx-5 w-100"
//                 label="Email address"
//                 id="email"
//                 name="email"
//                 type="email"
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
//                <button className="mb-4 px-5 p-3 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius:"5px" }}>
//                 Register
//               </button>
//             </form>
//           </div>
//         </MDBCol>
//         <MDBCol sm="6" className="d-none d-sm-block px-0">
//           <img
//             src="/images/Sign_up.png"
//             alt="Registration image"
//             className="w-100"
//             style={{ objectFit: 'cover', objectPosition: 'left' }}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default LoginReg;







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
