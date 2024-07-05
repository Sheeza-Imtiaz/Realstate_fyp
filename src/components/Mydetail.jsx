import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Avatar } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Footer from './Footer';
import CustomNavbar from "./Navbar";
import Tooltip from '@mui/material/Tooltip';


const Mydetail = () => {
  const data = JSON.parse(sessionStorage.getItem('editdata'));
  console.log(data)

  const rows = [
    { date: '2024-07-01', time: '08:00 AM' },
    { date: '2024-07-02', time: '10:30 AM' },
  ];


  return (
    <>
      <div>
        <CustomNavbar />
        <Box sx={{ maxWidth: 1200, margin: 'auto', padding: '2' }}>
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={data.product_picture || "/images/data-3.jpg"}
              alt="Product"
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h5" component="div" gutterBottom style={{ color: "#1e4f5c", fontWeight: "600" }}>
                    ${data.price}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Lahore, Pakistan
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
                  <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#1e4f5c", fontWeight: "600" }}>
                    ABOUT THIS PROPERTY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.descriptions}
                  </Typography>
                  <Typography variant="body1" color="text.primary" mt={2} style={{ color: "#1e4f5c", fontWeight: "600" }}>
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
                    <Box>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell>Time</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.time}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer> {/* <Button style={{ backgroundColor: "#1e4f5c" }} variant="contained" sx={{ mr: 2 }}>Register</Button> */}
                    </Box>
                    <Typography variant="body1" fontWeight={600} mt={2}>
                      LISTED BY
                    </Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                      <Avatar alt="pro" src={data.user.profile_photo} />
                      <Box ml={2}>
                        <Typography variant="body1">{data.username}</Typography>
                        <Typography variant="body1">{data.user.email}</Typography>

                        <Tooltip title="  Ph.no +92XXX-XXXXXX1 " placement="top">
                          <Button variant="outlined" style={{ color: '#fc9700', fontWeight: "600", marginTop: '10px' }}>Info</Button>
                        </Tooltip>                      </Box>
                    </Box>
                    <Typography variant="body1" fontWeight={600} mt={2}>
                      You also get to the<br></br>Installment rate.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <div><Footer /></div>

      </div>
    </>

  );
}

export default Mydetail;
