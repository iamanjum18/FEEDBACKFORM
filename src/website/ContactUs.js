// Contact.js
import React from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);  // Replace with actual form submission logic
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        We'd love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
      </Typography>
      <Box marginTop={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField 
                    {...field}
                    label="Your Name" 
                    fullWidth 
                    required 
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField 
                    {...field}
                    label="Your Email" 
                    fullWidth 
                    required 
                    type="email" 
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField 
                    {...field}
                    label="Your Message" 
                    fullWidth 
                    required 
                    multiline 
                    rows={4} 
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;

// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const ContactUs = () => (
//   <Container>
//     <Typography variant="h4">Contact Us</Typography>
//     <Typography>Email: support@feedbackformbuilder.com</Typography>
//   </Container>
// );

// export default ContactUs;

