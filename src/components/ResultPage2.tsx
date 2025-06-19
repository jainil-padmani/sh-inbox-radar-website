import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, Triangle, MailCheck, MailWarning, Mail, MailX, Lock, Share2, Star } from 'lucide-react';
import SignUpModal from './SignUpModal';
import Header from './Header';
import Footer from './Footer';
import Awards from './Awards';

const ResultPage2 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('deliverability');
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);

  const handleRunNewTestClick = () => {
    navigate('/home2');
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <>
      <Header />
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/home2" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Email Test
            </Link>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Second Time User - Email Deliverability Score
            </h2>
            <p className="text-base text-gray-600">
              Here's where your emails landed across different email service providers.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-1 mx-auto mb-4 flex">
            <button 
              className={`flex-1 py-2 text-center font-semibold rounded-lg ${activeTab === 'deliverability' ? 'text-blue-600 bg-white shadow' : 'text-gray-700'}`}
              onClick={() => setActiveTab('deliverability')}
            >
              Email Deliverability Score
            </button>
            <button 
              className={`flex-1 py-2 text-center font-semibold rounded-lg ${activeTab === 'setup-analysis' ? 'text-blue-600 bg-white shadow' : 'text-gray-700'}`}
              onClick={() => setActiveTab('setup-analysis')}
            >
              Setup Analysis
            </button>
          </div>

          {activeTab === 'deliverability' && (
            <>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Deliverability</h3>
                <div className="flex justify-center items-center gap-4 blur-sm">
                  {/* Inbox Item */}
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 w-60">
                    <div className="flex items-center">
                      <MailCheck className="h-6 w-6 text-green-600 mr-3" />
                      <span className="text-gray-800 font-medium">Inbox</span>
                    </div>
                    <span className="text-green-600 font-bold text-xl">67%</span>
                  </div>

                  {/* Spam Item */}
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 w-60">
                    <div className="flex items-center">
                      <MailWarning className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-gray-800 font-medium">Spam</span>
                    </div>
                    <span className="text-red-600 font-bold text-xl">7%</span>
                  </div>

                  {/* Undelivered Item */}
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 w-60">
                    <div className="flex items-center">
                      <MailX className="h-6 w-6 text-gray-500 mr-3" />
                      <span className="text-gray-800 font-medium">Undelivered</span>
                    </div>
                    <span className="text-gray-500 font-bold text-xl">26%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Inbox Analysis</h3>
                <div className="relative">
                  <div className="bg-gray-50 p-6 mt-4 rounded-lg blur-sm text-gray-700 space-y-2">
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-red-200 h-6 rounded-md w-4/5 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-3/4 mb-2"></p>
                    <p className="bg-red-200 h-6 rounded-md w-2/3 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-4/5 mb-2"></p>
                    <p className="bg-gray-200 h-6 rounded-md w-1/2 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-red-200 h-6 rounded-md w-3/5 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-gray-200 h-6 rounded-md w-2/4 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-red-200 h-6 rounded-md w-4/5 mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-full mb-2"></p>
                    <p className="bg-green-200 h-6 rounded-md w-3/4 mb-2"></p>
                  </div>
                  <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center rounded-lg">
                    <Lock className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800">Sign Up to Unlock Detailed Analysis</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-xs text-center">Get ESP-specific insights and strategies to improve your inbox placement</p>
                    <button 
                      className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium mt-4"
                      onClick={handleRunNewTestClick}
                    >
                      Sign Up to Unlock Full Analysis
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'setup-analysis' && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Setup Analysis</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    See my email
                  </button>
                  <button 
                    className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 flex items-center"
                    onClick={handleRunNewTestClick}
                  >
                    Run a new test <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="space-y-4 blur-sm">
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">Your email server's IP is listed on 1 blacklist(s).</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">Your domain isn't listed in any blacklist. Well done.</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">See blacklists <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">SPF check - we found a valid record</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">DKIM check - We found a record on selector google</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">DMARC check - We found a record</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">Your mail server Reverse DNS is properly configured.</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-800 flex-1">There are MX records on this domain</span>
                    <a href="#" className="text-green-600 text-sm flex items-center ml-auto">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center rounded-lg">
                  <Lock className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">Sign Up to Unlock Setup Analysis</h3>
                  <p className="text-gray-600 text-sm mt-2 max-w-xs text-center">Get detailed insights into your email setup and configuration</p>
                  <button 
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium mt-4"
                    onClick={handleRunNewTestClick}
                  >
                    Sign Up to Unlock Analysis
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Want to improve your email deliverability?</h3>
            <p className="text-gray-600 text-sm mb-6">Sign up for Saleshandy to access advanced email tools, analytics, and deliverability features.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
              Sign Up for Free
            </button>
          </div>

        </div>
        {showSignUpModal && <SignUpModal onClose={handleCloseModal} />}
      </section>
      <Awards />
      <Footer />
    </>
  );
};

export default ResultPage2; 