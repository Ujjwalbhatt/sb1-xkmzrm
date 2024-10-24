import React from 'react';
import { Upload, FileImage, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const PatientPortal = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.tiff', '.dcm']
    },
    onDrop: (files) => console.log('Files dropped:', files)
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Patient Portal</h1>
        <button className="btn btn-primary">Schedule Appointment</button>
      </div>

      <div {...getRootProps()} className={`
        border-2 border-dashed rounded-lg p-12
        flex flex-col items-center justify-center
        transition-colors cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 hover:border-blue-500'}
      `}>
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-2">Drop your chest X-ray here</p>
        <p className="text-sm text-gray-400">or click to select files</p>
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
          <FileImage className="w-4 h-4" />
          <span>Supported formats: DICOM, PNG, JPEG, TIFF</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Scans</h2>
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">No scans uploaded yet</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Important Notes</h2>
          <div className="flex items-start space-x-3 p-4 bg-yellow-500/10 rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-500 font-medium">Preparation Instructions</p>
              <p className="text-sm text-gray-400 mt-1">
                Please remove any jewelry or metal objects before your X-ray scan.
                Wear comfortable clothing without metal fasteners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;