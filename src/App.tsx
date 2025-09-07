import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import InvestmentWizard from './components/investment/InvestmentWizard';
import AIOracle from './components/oracle/AIOracle';
import Leaderboard from './components/leaderboard/Leaderboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ParticleBackground } from './components/ui/ParticleBackground';
import './styles/globals.css';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg font-bold">Awakening the Vault...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <ParticleBackground />
        <Routes>
          <Route 
            path="/login" 
            element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/invest" 
            element={user ? <InvestmentWizard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/oracle" 
            element={user ? <AIOracle /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/leaderboard" 
            element={user ? <Leaderboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={user ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;