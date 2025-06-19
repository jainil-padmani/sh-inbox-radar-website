import React from 'react';
import { ArrowRight, Calendar, CreditCard, Shield } from 'lucide-react';

const Awards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by users as a top market leader
          </h2>
          
          {/* G2 Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold">G</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.6 out of 5 on G2</span>
            </div>
          </div>

          {/* Awards */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="bg-purple-100 border-2 border-purple-200 rounded-lg p-4 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-900">High Performer</div>
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded mt-1">
                AMERICAS
              </div>
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded mt-1">
                WINTER 2025
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 border-2 border-orange-200 rounded-lg p-4 mb-2">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-900">High Performer</div>
              <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded mt-1">
                WINTER
              </div>
              <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded mt-1">
                2025
              </div>
            </div>

            <div className="text-center">
              <div className="bg-red-100 border-2 border-red-200 rounded-lg p-4 mb-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-900">Leader</div>
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded mt-1">
                WINTER
              </div>
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded mt-1">
                2025
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 border-2 border-orange-200 rounded-lg p-4 mb-2">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-900">Momentum Leader</div>
              <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded mt-1">
                WINTER
              </div>
              <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded mt-1">
                2025
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 border-2 border-purple-200 rounded-lg p-4 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-900">High Performer</div>
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded mt-1">
                EUROPE
              </div>
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded mt-1">
                WINTER 2025
              </div>
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="mt-16">
            <div className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              />
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                Sign up for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                7-day free trial
              </div>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                SOC 2 Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;