import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Avatar } from '@mui/material';
// import Footer from './Footer';

const Mydetail = () => {
  const data = JSON.parse(sessionStorage.getItem('editdata'));
  console.log(data)


  return (
    <>
      <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
        <Card>
          <CardMedia
            component="img"
            height="350"
            image={data.product_picture || "/images/data-3.jpg"} // Use default image if none is provided
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" component="div" gutterBottom style={{ color: "#236c7e", fontWeight: "600" }}>
                  ${data.price}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Est. Mortgage: $3,500/mo
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {data.location}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">{data.beds} Beds</Typography>
                  </Grid>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">{data.baths} Baths</Typography>
                  </Grid>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">{data.size} Sqft</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#236c7e", fontWeight: "600" }}>
                  ABOUT THIS PROPERTY
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.descriptions}
                </Typography>
                <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#236c7e", fontWeight: "600" }}>
                  PROPERTY FEATURES
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <ul>
                      <li>{data.features}</li>
                    </ul>
                  </Grid>
                </Grid>
                <Typography variant="body1" color="text.primary" mt={2}>
                  LOCATION
                </Typography>
                <Box height="400px">
                  <iframe
                    className="position-relative h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274261047!2d74.00472033834701!3d31.48310365791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714132651819!5m2!1sen!2s"
                    width="750"
                    height="450"
                    frameBorder="0"
                    style={{ minHeight: '400px', border: '0' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Maps Embed"
                  ></iframe>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  border: 'black dotted',
                  width: '100%',
                  height: '80vh',
                  borderRadius: '80px 50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }} mt={33}>
                  <Typography variant="body1" color="#fc9700" fontWeight={600}>
                    OPEN HOUSE AVAILABILITY
                  </Typography>
                  <Box mt={2}>
                    <Button style={{ backgroundColor: "#236c7e" }} variant="contained" sx={{ mr: 2 }}>Register</Button>
                  </Box>
                  <Typography variant="body1" fontWeight={600} mt={2}>
                    LISTED BY
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Avatar alt="profile" src="./images/s1.png" />
                    <Box ml={2}>
                      <Typography variant="body1">{data.user.email}</Typography>
                      <Button variant="outlined" style={{color:'#fc9700', fontWeight:"600"}}>Chat with Me</Button>
                    </Box>
                  </Box>
                  <Typography variant="body1" fontWeight={600} mt={2}>
                    Installment rate starting at <br></br>$2,842
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {/* <div><Footer/></div> */}
    </>
  );
}

export default Mydetail;
