import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Sales from './pages/Sales';
import SocialMedia from './pages/SocialMedia';
import AITrends from './pages/AITrends';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box flex={1}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/aitrends" element={<AITrends />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
