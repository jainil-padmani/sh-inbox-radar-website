import React from 'react';

interface IPBlacklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  ipLabel?: string;
  ipValue?: string;
  description?: string;
}

const BLACKLISTS = [
  { status: 'Ok', name: 'b.barracudacentral.org', url: 'https://b.barracudacentral.org' },
  { status: 'Ok', name: 'zen.spamhaus.org', url: 'https://zen.spamhaus.org' },
  { status: 'Ok', name: 'bl.spamcop.net', url: 'https://bl.spamcop.net' },
  { status: 'Ok', name: 'cbl.abuseat.org', url: 'https://cbl.abuseat.org' },
  { status: 'Ok', name: 'dnsbl-0.uceprotect.net', url: 'https://dnsbl-0.uceprotect.net' },
  { status: 'Ok', name: 'dnsbl-1.uceprotect.net', url: 'https://dnsbl-1.uceprotect.net' },
  { status: 'Ok', name: 'dnsbl-2.uceprotect.net', url: 'https://dnsbl-2.uceprotect.net' },
];

const IPBlacklistModal: React.FC<IPBlacklistModalProps> = ({ isOpen, onClose, title, ipLabel, ipValue, description }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl max-w-xl w-full p-8 z-10">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-2">{title || 'IPs Blacklist Check'}</h2>
        {ipLabel && ipValue && (
          <div className="mb-4 text-sm text-gray-700">
            <span className="font-medium">{ipLabel} </span>
            <span className="font-mono font-bold">{ipValue}</span>
          </div>
        )}
        <div className="bg-green-100 border border-green-200 text-green-800 rounded p-3 mb-4 text-sm flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span><b>100% Pass</b> - You are not on any blacklists!<br/>{description || 'We checked across all known blacklists using our blacklist checker.'}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Blacklist</th>
              </tr>
            </thead>
            <tbody>
              {BLACKLISTS.map((bl, idx) => (
                <tr key={bl.name} className="border-t">
                  <td className="py-2 px-4 text-green-600 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {bl.status}
                  </td>
                  <td className="py-2 px-4">
                    <a href={bl.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{bl.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IPBlacklistModal; 