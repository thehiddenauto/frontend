import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import Generator from './Generator.jsx';
import VideoClipper from './VideoClipper.jsx';
import AdvancedVideoGenerator from './AdvancedVideoGenerator.jsx';
import Library from './Library.jsx';
import ProfileSettings from './ProfileSettings.jsx';
import SocialConnector from './SocialConnector.jsx';
import Pricing from './Pricing.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Billing from './Billing.jsx';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="p-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-xl font-bold">🎯 Influencore</Link>
            <Link to="/generator" className="hover:text-blue-400 transition-colors">Generator</Link>
            <Link to="/clipper" className="hover:text-blue-400 transition-colors">Video Clipper</Link>
            <Link to="/advanced-video" className="hover:text-blue-400 transition-colors">🎬 Veo 3 & Sora</Link>
            <Link to="/library" className="hover:text-blue-400 transition-colors">Library</Link>
            <Link to="/social" className="hover:text-blue-400 transition-colors">Social</Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
            <Link to="/login" className="hover:text-blue-400 transition-colors">Sign In</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/clipper" element={<VideoClipper />} />
        <Route path="/advanced-video" element={<AdvancedVideoGenerator />} />
        <Route path="/library" element={<Library />} />
        <Route path="/social" element={<SocialConnector />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
