// src/website/Website.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import FeedbackModal from '../components/FeedbackModal';
import HorizontalNavBar from '../components/HorizontalNavBar';
import { Box } from '@mui/material';

const Website = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HorizontalNavBar />
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <FeedbackModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Website;

// // Website.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import ContactUs from './ContactUs';
// import FeedbackModal from '../components/FeedbackModal';
// import VerticalNavBar from '../components/VerticalNavBar';
// import { Box } from '@mui/material';

// // const Website = () => {
// //   return (
// //     <>
// //       <FeedbackModal />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/contact-us" element={<ContactUs />} />
// //       </Routes>
// //     </>
// //   );
// // };
// const Website = () => {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <VerticalNavBar />
//       <Box sx={{ flexGrow: 1, padding: '20px' }}>
//         <FeedbackModal />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// };

// export default Website;
