import React from 'react';
import { Mail, Copy, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero2 = () => {
  const navigate = useNavigate();
  const testEmail = `jyot-soni-53@zohomail.in`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(testEmail);
  };

  const handleSeeExample = () => {
    // Handle see example action
    console.log('See example clicked');
  };

  const handleCheckDeliverability = () => {
    navigate('/results2');
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
                First, copy & send a message to this email address:
              </h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left Column - Seed Account */}
                <div className="md:w-3/5">
                  <div className="bg-gray-50 rounded-lg p-6 relative h-[120px] flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-base font-semibold text-gray-800">Seed account</h4>
                      <button
                        onClick={handleCopyEmail}
                        className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </button>
                    </div>
                    
                    <div className="text-left text-blue-600 text-sm leading-relaxed">
                      {testEmail}
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Action Buttons */}
                <div className="flex flex-col gap-4 md:w-2/5">
                  <button
                    onClick={handleSeeExample}
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-200 border border-gray-300 px-8 py-3 rounded-md hover:bg-white whitespace-nowrap"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    See an example
                  </button>
                  <button
                    onClick={handleCheckDeliverability}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    Check your email deliverability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2; 