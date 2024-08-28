// Home.js
import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box textAlign="center" marginTop={8}>
        <Typography variant="h2" gutterBottom>
          Welcome to Feedback Form Builder
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Create custom feedback forms to gather insights and improve your services.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={() => navigate('/services')}
        >
          Get Started
        </Button>
      </Box>
      <Grid container spacing={3} marginTop={6}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Easy to Use
          </Typography>
          <Typography color="textSecondary">
            Our platform allows you to create and customize feedback forms with ease, using an intuitive drag-and-drop interface.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Fully Customizable
          </Typography>
          <Typography color="textSecondary">
            Choose from various input types like star ratings, text areas, and more. Tailor your forms to meet your specific needs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Real-Time Analytics
          </Typography>
          <Typography color="textSecondary">
            Track form submissions and view detailed analytics in real-time to make data-driven decisions.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const Home = () => (
//   <Container>
//     <Typography variant="h4">Welcome to Feedback Form Builder</Typography>
//   </Container>
// );

// export default Home;

