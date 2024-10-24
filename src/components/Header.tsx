import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">TB Detection Platform</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};