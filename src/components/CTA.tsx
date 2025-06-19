import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's get started with Saleshandy
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Get started with cold emailing in minutes using resources and best practices 
          suggested by cold email experts.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center mx-auto">
          Sign up for free
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;