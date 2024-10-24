import React from 'react';
import { Users, Search, Filter, Download } from 'lucide-react';

const ProfessionalPortal = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Professional Portal</h1>
        <div className="flex gap-3">
          <button className="btn btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="btn btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="input pl-10 w-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <p className="font-medium">No patients in your worklist</p>
                <p className="text-sm text-gray-400">Add patients to get started</p>
              </div>
            </div>
            <button className="btn btn-secondary">Add Patient</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPortal;