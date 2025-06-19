import React from 'react';

interface DKIMSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  dkimRecord?: string;
}

const DKIMSetupModal: React.FC<DKIMSetupModalProps> = ({ isOpen, onClose, dkimRecord }) => {
  const record = dkimRecord || `v=DKIM1; k=rsa;
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCO1au0GCLhoKMaA7RpW+1GQkcYB6TqUfC5OD9dLbkVF6a0+KU2FocEV9f0TW6NShvz5ECZPAYuBqInuTV36g9eazlKhNrENLeeB9oEbWkNSMdIDFSxrW0R/JCuVOjZIPHqjPUxLfyIq3TtsocoTyeJIabPdx5tj/cCeTzsQIDAQAB`;
  const handleCopy = () => {
    navigator.clipboard.writeText(record);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-8 z-10">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">DKIM Set-up</h2>
        <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6 text-sm font-mono text-gray-800 whitespace-pre-wrap overflow-x-auto break-all" style={{maxWidth: '100%'}}>
          {record}
        </div>
        <button
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          onClick={handleCopy}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Copy
        </button>
      </div>
    </div>
  );
};

export default DKIMSetupModal; 