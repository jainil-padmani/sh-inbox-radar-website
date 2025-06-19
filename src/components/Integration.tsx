import React from 'react';
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Integration = () => {
  const results = [
    { name: 'Outbound_Prospects_SDR_Team_April.csv', status: 'Valid', percentage: '100%', total: '74 Total Email', color: 'green' },
    { name: 'All active sales team members IKHQ.csv', status: 'Valid', percentage: '60%', total: '2,743 Total Email', color: 'green' },
    { name: 'SDR_TeamA_Prospects_Apr2025.csv', status: 'Valid', percentage: '89%', total: '81 Total Emails', color: 'green' },
    { name: 'Outbound_Leads_SDR_April2025_v1.csv', status: 'Valid', percentage: '87%', total: '58 Total Emails', color: 'green' },
    { name: 'SDR_TeamA_Prospects_Apr2025.csv', status: 'Valid', percentage: '62%', total: '81 Total Emails', color: 'green' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All-in-one Tool for Cold Email Outreach
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              No more jumping between tools. Once your list is verified, move it directly into Saleshandy campaigns.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center">
              Get started for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
            </div>
            
            <div className="space-y-3">
              {results.map((result, index) => (
                <div key={index} className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {result.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-green-600">
                      {result.percentage}
                    </span>
                    <span className="text-sm text-gray-500">
                      {result.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Valid</span>
                </div>
                <span className="text-sm text-gray-600">1637 60%</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Risky</span>
                </div>
                <span className="text-sm text-gray-600">273 10%</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Catch-All</span>
                </div>
                <span className="text-sm text-gray-600">819 30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;