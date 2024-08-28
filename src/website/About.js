// About.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', description: 'John is the visionary behind Feedback Form Builder, with a passion for user experience and data-driven decisions.' },
    { name: 'Jane Smith', role: 'Lead Developer', description: 'Jane is responsible for the robust technical architecture that powers our platform, ensuring reliability and performance.' },
    { name: 'Alice Johnson', role: 'UI/UX Designer', description: 'Alice creates intuitive and aesthetically pleasing designs that make our platform a joy to use.' },
  ];

  return (
    <Container>
      <Box textAlign="center" marginTop={8} marginBottom={4}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          At Feedback Form Builder, we are dedicated to helping businesses gather valuable insights through custom feedback forms. Our mission is to empower organizations with the tools they need to listen to their customers and improve their services.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3} marginTop={2}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box marginTop={6}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography color="textSecondary">
          We believe in the power of feedback to drive meaningful change. Our platform is designed to make it easy for businesses to create, distribute, and analyze feedback forms, enabling them to make data-driven decisions that lead to better customer experiences.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const About = () => (
//   <Container>
//     <Typography variant="h4">About Us</Typography>
//     <Typography>We provide tools to help businesses gather and analyze customer feedback.</Typography>
//   </Container>
// );

// export default About;

