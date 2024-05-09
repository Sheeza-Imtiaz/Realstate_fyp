// import React, { useState } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [formData, setFormData] = useState({
//        product_picture: null, // Updated name attribute for the image input field
//     name: '',
//     area: '',
//     size: '',
//     price: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();  
//           formDataToSend.append('product_picture', formData.product_picture); // Updated to match the input name
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('area', formData.area);
//       formDataToSend.append('size', formData.size);
//       formDataToSend.append('price', formData.price);

//       const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (e.target.type === 'file') {
//       if (e.target.files.length > 0) {
//         setFormData({
//           ...formData,
//           [name]: e.target.files[0]
//         });
//       } else {
//         setFormData({
//           ...formData,
//           [name]: null
//         });
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//        <div className="mb-3">
//           <label htmlFor="product_picture" className="form-label">Image</label>
//           <input type="file" className="form-control" name="product_picture" onChange={handleChange} id="product_picture" placeholder="" />
//         </div>   <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price</label>
//           <input type="number" className="form-control" name="price" onChange={handleChange} id="price" placeholder="" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Property</label>
//           <input type="text" className="form-control" name="name" onChange={handleChange} id="name" placeholder="" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="type" className="form-label">Location</label>
//           <input type="text" className="form-control" name="area" onChange={handleChange} id="type" placeholder="" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="size" className="form-label">Size</label>
//           <input type="text" className="form-control" name="size" onChange={handleChange} id="size" placeholder="" />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Admin;



import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    size: '',
    price: '',
    product_picture: null 
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formData);

  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };


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
      const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

   
  // const formDataToSend = new FormData();
  // for (const key in formData) {
  //   formDataToSend.append(key, formData[key]);
  // }

  // try {
  //   const response = await axios.post('http://192.168.0.115:8000/real_estate/products/', formData);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error('Error uploading data:', error);
  // }
  // };

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: files ? files[0] : value // handle file input
  //   }));
  // };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" name="price" onChange={handleChange} id="price" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} id="name" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Location</label>
          <input type="text" className="form-control" name="location" onChange={handleChange} id="type" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">Size</label>
          <input type="text" className="form-control" name="size" onChange={handleChange} id="size" placeholder="" />
        </div>
        <div className="form-group">
        <label>Profile Photo:</label>
        <input className="form-control-file" type="file" name="product_picture" accept="image/*" onChange={handleChange} />
      </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Admin;
