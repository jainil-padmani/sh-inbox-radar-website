import React from 'react';
import { X, Mail } from 'lucide-react';

interface SignUpModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl relative max-w-sm mx-auto w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Sign up for free</h2>
        <p className="text-center text-gray-600 text-sm mb-6">Want to get up to more free check for free ? Register Now</p>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <img src="https://www.saleshandy.com/wp-content/uploads/2023/10/google-icon.png" alt="Google" className="h-5 w-5 mr-3" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <img src="https://www.saleshandy.com/wp-content/uploads/2023/10/microsoft-icon.png" alt="Microsoft" className="h-5 w-5 mr-3" />
            Continue with Microsoft
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <Mail className="h-5 w-5 mr-3 text-gray-600" />
            Continue with Email
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          If you continue, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
        </p>
        <p className="text-center text-gray-500 text-xs mt-2">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal; 