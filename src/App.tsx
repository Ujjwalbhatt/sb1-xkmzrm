import React from 'react';
import { Activity, Users, Brain, Settings as SettingsIcon } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientPortal from './pages/PatientPortal';
import ProfessionalPortal from './pages/ProfessionalPortal';
import AIInsights from './pages/AIInsights';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-xl font-bold text-blue-500">
                  TB Detection
                </Link>
                <div className="flex space-x-4">
                  <Link to="/" className="nav-link">
                    <Activity className="w-5 h-5" />
                    <span>Patient Portal</span>
                  </Link>
                  <Link to="/professional" className="nav-link">
                    <Users className="w-5 h-5" />
                    <span>Professional</span>
                  </Link>
                  <Link to="/ai-insights" className="nav-link">
                    <Brain className="w-5 h-5" />
                    <span>AI Insights</span>
                  </Link>
                  <Link to="/settings" className="nav-link">
                    <SettingsIcon className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<PatientPortal />} />
            <Route path="/professional" element={<ProfessionalPortal />} />
            <Route path="/ai-insights" element={<AIInsights />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;