import React from 'react';

const TrustLogos = () => {
  const logos = [
    'GoDaddy',
    'CLOUDTALK',
    'VROOZI',
    'integrately',
    'dorik',
    'ContentStudio',
    'Sedin',
    'neptik',
    'opslyft',
    'Revv'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm md:text-base">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;