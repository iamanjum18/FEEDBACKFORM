import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FormBuilder from './pages/FormBuilder';
import FormDetail from './pages/FormDetail';
import Website from './website/Website';

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/form-builder/:formId?" element={<FormBuilder />} />
      <Route path="/admin/form-detail/:formId" element={<FormDetail />} />
      <Route path="/*" element={<Website />} />
    </Routes>
  </Router>
);

export default App;
