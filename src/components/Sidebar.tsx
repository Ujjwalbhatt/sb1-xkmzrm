import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCog, 
  Brain, 
  Settings,
  Lungs
} from 'lucide-react';

export const Sidebar = () => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/patient', icon: Users, label: 'Patient Portal' },
    { to: '/professional', icon: UserCog, label: 'Professional Portal' },
    { to: '/ai-insights', icon: Brain, label: 'AI Insights' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Lungs className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">TBDetect</span>
        </div>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-6 py-3 text-sm ${
                isActive
                  ? 'bg-gray-800 text-blue-500 border-r-2 border-blue-500'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};