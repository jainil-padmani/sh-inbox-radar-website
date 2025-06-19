import React, { useState } from 'react';
import { Mail, Copy, Eye, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [selectedEmails, setSelectedEmails] = useState('');
  const [selectedSeparator, setSelectedSeparator] = useState('semicolon'); // 'semicolon', 'comma', 'newline'
  const navigate = useNavigate();

  const testEmails = [
    `jyot-soni-53@zohomail.in`, `madison.barnes41@yahoo.com`, `sarah.collins183@yahoo.com`, `james.miller5619@outlook.com`, `caleb.owen@inboxradarapp.com`, `hannah.steele@inboxradarapp.com`, `julia.cross@getinboxradar.com`, `marcus.lane@inboxradarapp.com`, `stella.sharp@inboxradar.net`, `naomi.fleming@inboxradartool.com`, `eva.doyle@getinboxradar.org`, `eli.foster@deliverabilityradar.net`, `tristan.bowen@inboxradarapp.com`, `lily.arnold@inboxradarapp.org`, `zoey.bishop@inboxradartool.com`, `blake.miles@getinboxradar.org`, `austin.keller@inboxradartool.com`, `jonah.holt@inboxradar.net`, `sadie.barton@inboxradar.net`, `colin.snyder@deliverabilityradar.net`, `carter.bass@getinboxradar.org`, `ruby.daniels@deliverabilityradar.net`, `paisley.burns@deliverabilityradar.net`, `bryce.lamb@inboxradar.net`, `robert.martinez@inboxradar.org`, `william.moore@getinboxradar.com`, `sarah.long@inboxradarapp.org`
  ];

  const getSeparatedEmails = () => {
    switch (selectedSeparator) {
      case 'semicolon':
        return testEmails.join('; ');
      case 'comma':
        return testEmails.join(', ');
      case 'newline':
        return testEmails.join('\n');
      default:
        return testEmails.join('; ');
    }
  };

  const handleCopyEmails = () => {
    navigator.clipboard.writeText(getSeparatedEmails());
  };

  const handleSeparatorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeparator(event.target.value);
  };

  const handleSeeExample = () => {
    // Handle see example action
    console.log('See example clicked');
  };

  const handleCheckDeliverability = () => {
    const userType = localStorage.getItem('userType');
    let resultPath = '/results1'; // default path

    switch (userType) {
      case 'first-time':
        resultPath = '/results1';
        break;
      case 'second-time':
        resultPath = '/results2';
        break;
      case 'third-time':
        resultPath = '/results3';
        break;
    }

    console.log('Check deliverability clicked - Navigating to', resultPath);
    navigate(resultPath);
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Test Your Email Deliverability With Our Free Tool
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Struggling with low email open rates? Your emails might be landing in spam! Use our free 
            email deliverability test to check your sender reputation, spam score, and inbox placement.
          </p>

          {/* Feature Points */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-600">
            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span>No Signup Required</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span>Instant & Free Email Deliverability Test</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span>Get Actionable Insights In Seconds</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span>Trusted By Thousands Of Users</span>
            </div>
          </div>

          {/* Email Test Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                First, copy & send a message to these email addresses:
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6 relative">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">Seed accounts list</h4>
                  <div className="flex items-center">
                    <select
                      className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 mr-2"
                      value={selectedSeparator}
                      onChange={handleSeparatorChange}
                    >
                      <option value="semicolon">Semicolon (;)</option>
                      <option value="comma">Comma (,)</option>
                      <option value="newline">Newline</option>
                    </select>
                    <button
                      onClick={handleCopyEmails}
                      className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </button>
                  </div>
                </div>
                
                <div className="text-left text-blue-600 text-sm leading-relaxed mb-4 whitespace-pre-wrap max-h-24 overflow-y-auto">
                  {getSeparatedEmails()}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleSeeExample}
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-200 border border-gray-300 px-8 py-3 rounded-md hover:bg-white"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  See an example
                </button>
                <button
                  onClick={handleCheckDeliverability}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Check your email deliverability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;