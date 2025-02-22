import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import CampaignList from './pages/CampaignList';
import CampaignDetail from './pages/CampaignDetail';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="/campaigns/:id" element={<CampaignDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
