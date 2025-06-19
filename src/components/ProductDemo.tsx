import React from 'react';
import { CheckCircle, XCircle, AlertCircle, TrendingDown } from 'lucide-react';

const ProductDemo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingDown className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reduced Bounce Rates
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Too many bounces and email providers stop trusting you. Our email verifier spots invalid, temporary, and 
              catch-all email addresses, so you only send to real, working contacts.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">alex@growthloop.co</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Valid</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
              <div className="text-right text-sm text-gray-600 mt-1">97% Deliverability</div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Result</span>
                <span className="text-green-600 font-medium">Deliverable</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">SMTP Provider</span>
                <span className="text-blue-600 font-medium">Found</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">MX Records</span>
                <span className="text-green-600 font-medium">Found</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Free Mail</span>
                <span className="text-gray-600">No</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Disposable</span>
                <span className="text-gray-600">No</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Accept All</span>
                <span className="text-gray-600">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;