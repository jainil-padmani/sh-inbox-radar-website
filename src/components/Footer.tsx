import React from 'react';
import { ArrowRight, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: '#e6f7ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lead Finder</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cold Emailing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Email Campaign</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Auto Follow-Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Email Warm-Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Unified Inbox</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sender Rotation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sequence Score</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Agency Portal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Email Deliverability Toolkit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Email Tracking For Gmail</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Email Tracking For Outlook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn Email Finder</a></li>
            </ul>
          </div>

          {/* By Industry Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">By Industry</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lead Generation Agencies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">SaaS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">IT Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Agency</a></li>
            </ul>
            
            <h3 className="text-gray-900 font-semibold mb-4 mt-8">By Need</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Outbound Sales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">HR</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Beginner's Guide to Cold Emailing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cold Email Masterclass</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Playbooks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Wall of Love</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Comparisons</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Product Roadmap</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Product Updates</a></li>
            </ul>

            <h3 className="text-gray-900 font-semibold mb-4 mt-8">Comparison blogs</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lemlist Alternative</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">GMass Alternative</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Klenty Alternative</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Woodpecker Alternative</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Apollo.io Alternative</a></li>
            </ul>
          </div>

          {/* Support & Knowledge Base Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support & Knowledge Base</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cold Email Definitive Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">How to Write a Cold Email</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">How to Write a Follow-up Email</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cold Email Subject Lines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cold Email Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Best Cold Email Software of 2024</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Best B2B Email List Providers for 2024</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lead Generation Definitive Guide</a></li>
            </ul>

            <h3 className="text-gray-900 font-semibold mb-4 mt-8">Support & Knowledge Base</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQs - Email Sequence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQs - Email Tracking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">SMTP Settings</a></li>
            </ul>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mt-6">
              Schedule a Demo
            </button>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Legal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                  We are Hiring
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>

            {/* Certification Badges */}
            <div className="flex space-x-3 mt-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ISO</span>
              </div>
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">SOC</span>
              </div>
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">GDPR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">saleshandy</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <span className="text-sm text-gray-600">© 2023 Rigel. India. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;