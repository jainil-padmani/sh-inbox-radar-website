import React from 'react';

interface DeliverabilityLimitModalProps {
  open: boolean;
  onClose: () => void;
}

const DeliverabilityLimitModal: React.FC<DeliverabilityLimitModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl p-8 w-full max-w-md z-10 flex flex-col items-center">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-center mb-2 text-blue-700">You've hit your free verification limit</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Want to get up to 50 Email Verification for free? Register Now
        </p>
        <div className="flex flex-col gap-4 w-full mb-4">
          <button className="flex items-center justify-center border border-blue-300 rounded-lg py-3 px-4 text-base font-medium hover:bg-blue-50 transition">
            <span className="mr-2">🌐</span> Continue with Google
          </button>
          <button className="flex items-center justify-center border border-blue-300 rounded-lg py-3 px-4 text-base font-medium hover:bg-blue-50 transition">
            <span className="mr-2">🪟</span> Continue with Microsoft
          </button>
          <button className="flex items-center justify-center border border-blue-300 rounded-lg py-3 px-4 text-base font-medium hover:bg-blue-50 transition">
            <span className="mr-2">✉️</span> Continue with Email
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mb-2">
          If you continue, you agree to our <a href="#" className="underline">Terms of Service</a>
        </p>
        <p className="text-xs text-gray-500 text-center">
          Already have an account? <a href="#" className="underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default DeliverabilityLimitModal; 