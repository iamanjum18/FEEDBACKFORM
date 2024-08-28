// src/components/VerticalNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';

const VerticalNavBar = () => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '100vh',
        bgcolor: 'background.paper',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ margin: '20px 0' }}>
        Navigation
      </Typography>
      <List>
        <ListItem>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact Us
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default VerticalNavBar;
