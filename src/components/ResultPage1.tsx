import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, Triangle, MailCheck, MailWarning, Mail, MailX, Lock, Share2, Star } from 'lucide-react';
import SignUpModal from './SignUpModal';
import IPBlacklistModal from './IPBlacklistModal';
import SPFSetupModal from './SPFSetupModal';
import DKIMSetupModal from './DKIMSetupModal';
import DMARCSetupModal from './DMARCSetupModal';
import SpamassassinModal from './SpamassassinModal';

const ResultPage1 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('deliverability');
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);
  const [showIPBlacklistModal, setShowIPBlacklistModal] = React.useState(false);
  const [isDomainExpanded, setIsDomainExpanded] = React.useState(false);
  const [showSPFModal, setShowSPFModal] = React.useState(false);
  const [showDKIMModal, setShowDKIMModal] = React.useState(false);
  const [showDMARCModal, setShowDMARCModal] = React.useState(false);
  const [showSpamassassinModal, setShowSpamassassinModal] = React.useState(false);

  const handleRunNewTestClick = () => {
    navigate('/home2');
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link to="/home1" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Email Test
          </Link>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            First Time User - Email Deliverability Score
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
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Deliverability</h3>
            <div className="flex justify-center items-center gap-4">
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
        )}

        {activeTab === 'setup-analysis' && (
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8${showIPBlacklistModal ? ' filter blur-sm pointer-events-none select-none' : ''}`}>
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
            <div className="space-y-4">
              <div className={`flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition${isDomainExpanded ? ' rounded-b-none border-b-0' : ''}`} onClick={() => setShowIPBlacklistModal(true)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">Your email server's IP is listed on 1 blacklist(s).</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>
              </div>
              <div className={`flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition${isDomainExpanded ? ' rounded-b-none border-b-0' : ''}`} onClick={() => setIsDomainExpanded((prev) => !prev)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">Your domain isn't listed in any blacklist. Well done.</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">
                  See blacklists
                  <svg className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${isDomainExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </div>
              {isDomainExpanded && (
                <div className="bg-white border border-t-0 rounded-b-lg shadow p-6 animate-fade-in">
                  <h2 className="text-lg font-semibold mb-2">Domains Blacklist Check</h2>
                  <div className="mb-4 text-sm text-gray-700">
                    <span className="font-medium">Your domain IP address is </span>
                    <span className="font-mono font-bold">162.249.5.158</span>
                  </div>
                  <div className="bg-green-100 border border-green-200 text-green-800 rounded p-3 mb-4 text-sm flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><b>100% Pass</b> - You are not on any blacklists!<br/>We checked across all known blacklists using our blacklist checker.</span>
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
                        {[
                          { status: 'Ok', name: 'b.barracudacentral.org', url: 'https://b.barracudacentral.org' },
                          { status: 'Ok', name: 'zen.spamhaus.org', url: 'https://zen.spamhaus.org' },
                          { status: 'Ok', name: 'bl.spamcop.net', url: 'https://bl.spamcop.net' },
                          { status: 'Ok', name: 'cbl.abuseat.org', url: 'https://cbl.abuseat.org' },
                          { status: 'Ok', name: 'dnsbl-0.uceprotect.net', url: 'https://dnsbl-0.uceprotect.net' },
                          { status: 'Ok', name: 'dnsbl-1.uceprotect.net', url: 'https://dnsbl-1.uceprotect.net' },
                          { status: 'Ok', name: 'dnsbl-2.uceprotect.net', url: 'https://dnsbl-2.uceprotect.net' },
                        ].map((bl) => (
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
              )}
              <div className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition" onClick={() => setShowSPFModal(true)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">SPF check - we found a valid record</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition" onClick={() => setShowDKIMModal(true)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">DKIM check - We found a record on selector google</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition" onClick={() => setShowDMARCModal(true)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">DMARC check - We found a record</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition" onClick={() => setShowSpamassassinModal(true)}>
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 flex-1">Spamassassin Score Analysis</span>
                <span className="text-green-600 text-sm flex items-center ml-auto hover:underline focus:outline-none">Details <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deliverability' && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 relative">
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
              {/* Share your results section */}
              <div className="border-t border-gray-200 pt-8 mt-8 text-center">
                <h3 className="text-base font-semibold text-gray-700 mb-4">Share your results</h3>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full bg-gray-50">
                    <Share2 className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
                {/* Rating Section */}
                <div className="flex flex-col items-center mt-6">
                  <div className="flex items-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current mx-1" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">4.6 out of 5 on G2</span>
                </div>
              </div>
            </div>
          </>
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
      <IPBlacklistModal
        isOpen={showIPBlacklistModal}
        onClose={() => setShowIPBlacklistModal(false)}
        title="IPs Blacklist Check"
        ipLabel="Your Email sending IP is"
        ipValue="2a00:1450:4864:20::234"
        description="We checked 2a00:1450:4864:20::234 across all known blacklists using our blacklist checker."
      />
      <SPFSetupModal isOpen={showSPFModal} onClose={() => setShowSPFModal(false)} spfRecord="v=spf1 a mx include:spf.sendinblue.com include:helpscoutemail.com include:_spf.google.com ~all" />
      <DKIMSetupModal isOpen={showDKIMModal} onClose={() => setShowDKIMModal(false)} dkimRecord={`v=DKIM1; k=rsa;\np=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCO1au0GCLhoKMaA7RpW+1GQkcYB6TqUfC5OD9dLbkVF6a0+KU2FocEV9f0TW6NShvz5ECZPAYuBqInuTV36g9eazlKhNrENLeeB9oEbWkNSMdIDFSxrW0R/JCuVOjZIPHqjPUxLfyIq3TtsocoTyeJIabPdx5tj/cCeTzsQIDAQAB`} />
      <DMARCSetupModal isOpen={showDMARCModal} onClose={() => setShowDMARCModal(false)} dmarcRecord="v=DMARC1; p=none; sp=none; rua=mailto:dmarc@mailinblue.com!10m; ruf=mailto:dmarc@mailinblue.com!10m; rf=afrf; pct=100; ri=86400" />
      <SpamassassinModal isOpen={showSpamassassinModal} onClose={() => setShowSpamassassinModal(false)} />
    </section>
  );
};

export default ResultPage1; 