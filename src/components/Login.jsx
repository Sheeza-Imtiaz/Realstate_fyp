// import React, { useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
// import Admin from './Admin';


// function Login() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const history = useNavigate(); 

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
//       const resp = await axios.post('http://192.168.12.108:8000/app1/login/', formData);
//       console.log(resp.data); 

//       history('/Admin');
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
//               <MDBBtn className="mb-4 px-5 mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c" }}>
//                 Login
//               </MDBBtn>
//               <p className="small mb-5 pb-lg-3 ms-5">
//                 <a className="text-muted" href="#!">
//                   Forgot password?
//                 </a>
//               </p>
//               <p className="ms-5">
//                 Don't have an account? <NavLink to="/LoginReg" className="link-info">Register here</NavLink>
//               </p>
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







import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch user data after login
      // fetchUserData();
    }
  }, [isLoggedIn]);

  // const fetchUserData = async () => {
  //   try {
  //     const resp = await axios.get('http://192.168.12.108:8000/app1/userdata/');
  //     setUserData(resp.data);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://192.168.12.109:8000/real_estate/login/', formData);
      console.log(resp.data);
      setIsLoggedIn(true);
      history('/Home');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
              {isLoggedIn ? `Welcome, ${userData?.username || ''}!` : 'Log in'}
            </h3>
            {!isLoggedIn && (
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
                <button className="mb-4 px-5 p-3 text-white mx-5 w-100" size="lg" type="submit" style={{ backgroundColor: "#1e4f5c", borderRadius: "5px" }}>
                  {isLoggedIn ? 'Logout' : 'Login'}
                </button>
                {!isLoggedIn && (
                  <p className="small mb-5 pb-lg-3 ms-5">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                )}
                <p className="ms-5">
                  {!isLoggedIn && (
                    <span>
                      Don't have an account? <NavLink to="/LoginReg" className="link-info">Register here</NavLink>
                    </span>
                  )}
                </p>
              </form>
            )}
            {isLoggedIn && (
              <MDBBtn className=" w-100" size="lg" onClick={handleLogout} style={{ backgroundColor: "#1e4f5c" }}>
                Logout
              </MDBBtn>
            )}
            
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
