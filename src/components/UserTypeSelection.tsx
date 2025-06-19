import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleUserTypeSelect = (userType: string) => {
    // Store the user type in localStorage or state management if needed
    localStorage.setItem('userType', userType);
    // Navigate to the appropriate home page
    switch (userType) {
      case 'first-time':
        navigate('/home1');
        break;
      case 'second-time':
        navigate('/home2');
        break;
      case 'third-time':
        navigate('/home3');
        break;
      default:
        navigate('/home1');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Email Radar</h1>
          <p className="text-gray-600">Please select your user type to continue</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleUserTypeSelect('first-time')}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            <span className="mr-2">👋</span>
            First Time User
          </button>

          <button
            onClick={() => handleUserTypeSelect('second-time')}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
          >
            <span className="mr-2">🔄</span>
            Second Time User
          </button>

          <button
            onClick={() => handleUserTypeSelect('third-time')}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
          >
            <span className="mr-2">⭐</span>
            Third Time User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection; 