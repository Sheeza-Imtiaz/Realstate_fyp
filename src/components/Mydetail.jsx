import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Avatar } from '@mui/material';
// import CustomNavbar from './Navbar';
import Footer from './Footer';


const Mydetail = () => {
  const data = JSON.parse(sessionStorage.getItem('editdata'));
  console.log(data.id);
  return (
    <>
      <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
        <Card>
          <CardMedia
            component="img"
            height="350"
            image="/images/property-3.jpg"
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" component="div" gutterBottom style={{ color: "#236c7e", fontWeight: "600" }}>
                  $480,000
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Est. Mortgage: $3,500/mo
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  213 Hoyne Ave, Chicago, IL 60608
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">7 Beds</Typography>
                  </Grid>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">5 Baths</Typography>
                  </Grid>
                  <Grid item xs={4} style={{ color: "#fc9700", fontWeight: "600" }}>
                    <Typography variant="h6">1,860 Sqft</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#236c7e", fontWeight: "600" }}>
                  ABOUT THIS PROPERTY
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This gem home is where historic charm meets modern convenience! This legal two-flat residence is perfect for anyone looking to house hackers seeking modern character. The home also holds the potential to serve as a single-family home, catering to diverse lifestyles.
                </Typography>
                <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#236c7e", fontWeight: "600" }}>
                  PROPERTY FEATURES
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <ul>
                      <li>5 Bedrooms</li>
                      <li>3 Bathrooms</li>
                      <li>2 Patios</li>
                      <li>2 Garage Spaces</li>
                    </ul>
                  </Grid>
                  <Grid item xs={6}>
                    <ul>
                      <li>Built in 2020</li>
                      <li>20 min from city centre</li>
                      <li>Listed 2 days ago</li>
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
                  border: ' black dotted',
                  width: '100%',
                  height: '100vh',
                  borderRadius: '80px 50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }} mt={33}>
                  <Typography variant="body1" color="text.primary">
                    OPEN HOUSE AVAILABILITY
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>Register</Button>
                  </Box>
                  <Typography variant="body1" color="text.primary" mt={2}>
                    LISTED BY
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Avatar alt="Glenn Marlow Jr." src="./images/s1.png" />
                    <Box ml={2}>
                      <Typography variant="body1">Glenn Marlow Jr.</Typography>
                      <Button variant="outlined" color="primary">Chat with Me</Button>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.primary" mt={2}>
                    Installment rate starting at $2,842
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
