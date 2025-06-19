import React from 'react';
import { Upload, Settings, Download } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: '1',
      icon: Upload,
      title: 'Upload or Paste',
      description: 'Drag & drop a CSV or paste your emails directly.'
    },
    {
      number: '2',
      icon: Settings,
      title: 'Multi-Layer Verification',
      description: 'We check syntax, domain status, MX records, catch-all domains, and mail server response live.'
    },
    {
      number: '3',
      icon: Download,
      title: 'Get Clean Results',
      description: 'View or download results showing each email as Valid, Risky, or Invalid.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Verify a Single Email or Your Full Email List in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;