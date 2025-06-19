import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-[#f8fafc] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Trusted by users as a top market leader</h3>
        <div className="flex flex-col items-center justify-center mt-6 mb-8">
          <div className="flex items-center text-yellow-500 mb-2 text-2xl">
            <span className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2">G</span>
            {[...Array(5)].map((_, i) => (
              <span key={i} className="mx-0.5">★</span>
            ))}
            <span className="ml-2 text-gray-800 text-lg font-semibold">4.6 out of 5 on G2</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* G2 Badges */}
          <div className="bg-white border rounded-lg px-4 py-2 flex flex-col items-center shadow-sm">
            <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mb-1">G</span>
            <span className="text-xs font-semibold text-gray-800">High Performer</span>
            <span className="text-[10px] text-gray-500">AMERICAS</span>
            <span className="text-[10px] text-gray-500">WINTER 2025</span>
          </div>
          <div className="bg-white border rounded-lg px-4 py-2 flex flex-col items-center shadow-sm">
            <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mb-1">G</span>
            <span className="text-xs font-semibold text-gray-800">High Performer</span>
            <span className="text-[10px] text-gray-500">WINTER</span>
            <span className="text-[10px] text-gray-500">2025</span>
          </div>
          <div className="bg-white border rounded-lg px-4 py-2 flex flex-col items-center shadow-sm">
            <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mb-1">G</span>
            <span className="text-xs font-semibold text-gray-800">Leader</span>
            <span className="text-[10px] text-gray-500">WINTER</span>
            <span className="text-[10px] text-gray-500">2025</span>
          </div>
          <div className="bg-white border rounded-lg px-4 py-2 flex flex-col items-center shadow-sm">
            <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mb-1">G</span>
            <span className="text-xs font-semibold text-gray-800">Momentum Leader</span>
            <span className="text-[10px] text-gray-500">WINTER</span>
            <span className="text-[10px] text-gray-500">2025</span>
          </div>
          <div className="bg-white border rounded-lg px-4 py-2 flex flex-col items-center shadow-sm">
            <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mb-1">G</span>
            <span className="text-xs font-semibold text-gray-800">High Performer</span>
            <span className="text-[10px] text-gray-500">EUROPE</span>
            <span className="text-[10px] text-gray-500">WINTER 2025</span>
          </div>
        </div>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Sign up for free
          </button>
        </form>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600 mb-4">
          <span>7-day free trial</span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>SOC 2 Certified</span>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 