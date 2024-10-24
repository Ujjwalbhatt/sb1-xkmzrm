import React from 'react';
import { Bell, Lock, Globe, Monitor } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-400">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-400">Add an extra layer of security</p>
              </div>
              <button className="btn btn-secondary">Enable</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold">Language & Region</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select className="input w-full">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Chinese</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Monitor className="w-6 h-6 text-yellow-500" />
            <h2 className="text-lg font-semibold">Display</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Theme</label>
              <select className="input w-full">
                <option>Dark</option>
                <option>High Contrast</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;