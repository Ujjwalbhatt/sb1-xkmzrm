import React from 'react';
import { 
  Users, 
  Activity, 
  Clock, 
  AlertTriangle,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Patients', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Detection Rate', value: '98.7%', icon: Activity, color: 'bg-green-500' },
    { label: 'Avg. Processing Time', value: '18.2s', icon: Clock, color: 'bg-purple-500' },
    { label: 'Critical Cases', value: '23', icon: AlertTriangle, color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-3 bg-gray-900 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm">New scan uploaded for Patient #{1000 + i}</p>
                  <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">System Status</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">AI Model Status</span>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-500 rounded">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">API Response Time</span>
              <span className="text-sm">124ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Storage Usage</span>
              <span className="text-sm">67.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;