import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, AppBar, Toolbar, styled } from '@mui/material';
import  logo  from '../assets/logo.jpeg'; 

// Styled link component
const StyledLink = styled(Link)(({ theme, isActive }) => ({
  textDecoration: 'none',
  color: isActive ? 'white' : theme.palette.text.primary,
  backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
  borderRadius: '5px',
  padding: '8px 16px',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

const HorizontalNavBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        {/* <Link to="/" style={{ display: 'flex', alignItems: 'center' }}> */}
            <img
              src={logo}
              alt="Logo"
              style={{ height: '40px', marginRight: '20px' }} // Adjust height and margin as needed
            />
          {/* </Link> */}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {[
            { text: 'Home', path: '/' },
            {text:'About',path:'/about'},
            { text: 'Services', path: '/services' },
            { text: 'Contact Us', path: '/contact-us' },
          ].map(({ text, path }) => (
            <StyledLink
              key={path}
              to={path}
              isActive={location.pathname === path}
            >
              {text}
            </StyledLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalNavBar;
