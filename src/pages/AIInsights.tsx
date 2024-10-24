import React from 'react';
import { Brain, Zap, History, BarChart2 } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Insights</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold">Model Performance</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Accuracy</span>
              <span className="font-medium">98.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Precision</span>
              <span className="font-medium">97.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Recall</span>
              <span className="font-medium">96.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h2 className="text-lg font-semibold">Processing Stats</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Average Time</span>
              <span className="font-medium">18.2s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Daily Scans</span>
              <span className="font-medium">247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Queue Size</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <History className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold">Model Version</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Current Version</span>
              <span className="font-medium">v2.3.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Last Updated</span>
              <span className="font-medium">2 days ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Status</span>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-500 rounded">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart2 className="w-6 h-6 text-blue-500" />
          <h2 className="text-lg font-semibold">Detection Trends</h2>
        </div>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-400">Historical data will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;