// Services.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Create Custom Feedback Forms',
      description: 'Create tailored feedback forms with a variety of input options to suit your specific needs.',
      link: '/admin/form-builder',
    },
    {
      title: 'Custom Feedback Form ',
      description: 'Monitor the performance of your forms with detailed analytics, including submission rates and feedback trends.',
      link: '/admin/dashboard',
    },
    {
      title: 'User Management',
      description: 'Easily manage user submissions and feedback with our user-friendly admin panel.',
      link: '/admin/dashboard',
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} marginTop={2}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  onClick={() => navigate(service.link)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const Services = () => (
//   <Container>
//     <Typography variant="h4">Our Services</Typography>
//     <Typography>Custom feedback form creation and data analysis.</Typography>
//   </Container>
// );

// export default Services;

