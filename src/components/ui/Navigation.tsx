import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Zap, Eye, Users, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Vault' },
    { path: '/invest', icon: Zap, label: 'Invest' },
    { path: '/oracle', icon: Eye, label: 'Oracle' },
    { path: '/leaderboard', icon: Users, label: 'Leaderboard' }
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CHRONIX VAULT
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <div className="hidden md:block text-right">
                  <p className="text-white text-sm font-medium">{user.displayName}</p>
                  <p className="text-cyan-400 text-xs">₹{user.balance.toLocaleString()}</p>
                </div>
                
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-cyan-400/50"
                />
              </>
            )}
            
            <button
              onClick={handleSignOut}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-800/50 border-t border-gray-700/50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};