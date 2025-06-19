import React from 'react';

interface SpamTest {
  name: string;
  description: string;
  score: number;
}

interface SpamassassinModalProps {
  isOpen: boolean;
  onClose: () => void;
  tests?: SpamTest[];
  totalScore?: number;
}

const DEFAULT_TESTS: SpamTest[] = [
  { name: 'URIBL_DBL_BLOCKED_OPENDNS', description: 'ADMINISTRATOR NOTICE: The query to', score: 0 },
  { name: 'DKIM_SIGNED', description: 'Message has a DKIM or DK signature, not necessarily valid', score: 0.1 },
  { name: 'DKIM_INVALID', description: 'DKIM or DK signature exists, but is not valid', score: 0.1 },
  { name: 'HTML_MESSAGE', description: 'BODY: HTML included in message', score: 0 },
];

const SpamassassinModal: React.FC<SpamassassinModalProps> = ({ isOpen, onClose, tests, totalScore }) => {
  const testRows = tests || DEFAULT_TESTS;
  const score = totalScore !== undefined ? totalScore : testRows.reduce((sum, t) => sum + t.score, 0);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 z-10">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Spamassassin Test Description</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Spam Test Name</th>
                <th className="py-2 px-4 text-left">Spam Test Description</th>
                <th className="py-2 px-4 text-left">Score: <span className="font-semibold">{score.toFixed(1)}</span></th>
              </tr>
            </thead>
            <tbody>
              {testRows.map((test) => (
                <tr key={test.name} className="border-t">
                  <td className="py-2 px-4 text-blue-700 font-medium">{test.name}</td>
                  <td className="py-2 px-4 text-gray-700">{test.description}</td>
                  <td className={`py-2 px-4 font-semibold ${test.score > 0 ? 'text-red-500' : 'text-green-600'}`}>{test.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpamassassinModal; 