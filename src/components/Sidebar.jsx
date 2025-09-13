import React, { useState } from 'react';
import Movies from './Movies'; // Import your Home component
import '../components/SidebarStyle.css'
import Login from './Login';
import { useNavigate } from 'react-router-dom'; // Fixed import

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: '⚡', label: 'Dashboard' },
    { icon: '👤', label: 'Team' },
    { icon: '🚀', label: 'Projects' },
    { icon: '🗓️', label: 'Calendar' },
    { icon: '📋', label: 'Documents' },
    { icon: '🎬', label: 'Login to access' }
  ];

  const teams = [
    { id: 'H', name: 'Heroicons', color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
    { id: 'T', name: 'Tailwind Labs', color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
  ];

  const fillDemoCredentials = () => {
    navigate('/movies');
  };

  // Function to render content based on active item
  const renderContent = () => {
    switch(activeItem) {
      case 'Dashboard':
        return (
          <div className="p-8">
            <div className="dashboard-header">
              <h1 className="text-4xl font-bold text-white dashboard-title">Dashboard</h1>
              <button 
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 login-button"
                onClick={fillDemoCredentials} // Fixed onClick placement
              >
                <span>Login</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-2">Total Projects</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-500/30">
                <h3 className="text-xl font-bold text-white mb-2">Team Members</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">12</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-2xl border border-yellow-500/30">
                <h3 className="text-xl font-bold text-white mb-2">Completed</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">18</p>
              </div>
            </div>
          </div>
        );
      
      case 'Team':
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Team Management</h1>
            <p className="text-slate-300 text-lg">Manage your team members here.</p>
            {/* Add your Team component here */}
          </div>
        );
      
      case 'Projects':
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
            <p className="text-slate-300 text-lg">View and manage all your projects.</p>
            {/* Add your Projects component here */}
          </div>
        );
      
      case 'Calendar':
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Calendar</h1>
            <p className="text-slate-300 text-lg">Schedule and track events.</p>
            {/* Add your Calendar component here */}
          </div>
        );
      
      case 'Documents':
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Documents</h1>
            <p className="text-slate-300 text-lg">Access and manage documents.</p>
            {/* Add your Documents component here */}
          </div>
        );
      
      case 'Login to access':
        // return <Login />; // Your Home component with movies will show here
      
      default:
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome</h1>
            <p className="text-slate-300 text-lg">Select an option from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'sidebar-collapsed' : 'sidebar-fixed-width'} h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col shadow-2xl border-r border-purple-500/20 transition-all duration-300 ease-in-out`}>
        {/* Logo and Toggle */}
        <div className="p-8 flex items-center justify-between">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-white text-2xl font-bold">✦</span>
          </div>
          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-300 ml-4"
            >
              <span className="text-white text-lg">←</span>
            </button>
          )}
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-300 absolute right-4 top-8 arjun"
            >
              <span className="text-white text-lg">→</span>
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-6">
          <ul className="space-y-3">
            {menuItems.map((item, index) => {
              const isActive = activeItem === item.label;
              return (
                <li key={index}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`group flex items-center ${isCollapsed ? 'px-3 py-4 justify-center' : 'px-4 py-4'} text-sm font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 w-full text-left relative ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                        : 'text-slate-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/20'
                    }`}
                    title={isCollapsed ? item.label : ''}
                  >
                    <span className={`w-6 h-6 ${isCollapsed ? '' : 'mr-4'} text-xl flex items-center justify-center transition-transform duration-300 ${
                      isActive ? 'transform rotate-12' : 'group-hover:transform group-hover:rotate-12'
                    }`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <>
                        <span className="font-semibold">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </>
                    )}
                    {isCollapsed && isActive && (
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                        {item.label}
                        <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default Sidebar;