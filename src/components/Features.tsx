import React from 'react';
import { Inbox, Shield, TrendingDown, Zap, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Inbox,
      title: 'Land in the Primary Inbox',
      description: 'Ensure your emails reach the primary inbox, not spam folders'
    },
    {
      icon: Shield,
      title: 'Protect Sender Reputation',
      description: 'Maintain your sender reputation with verified email addresses'
    },
    {
      icon: TrendingDown,
      title: 'Reduced Bounce Rates',
      description: 'Minimize bounce rates with accurate email verification'
    },
    {
      icon: Zap,
      title: 'Bulk Email Verification',
      description: 'Verify thousands of emails at once with our bulk verification tool'
    },
    {
      icon: Clock,
      title: 'Fast Real-Time Verification',
      description: 'Get instant results with our real-time email verification'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            An Email Checker Built for Outreach Experts Like You
          </h2>
          <p className="text-xl text-gray-600">
            Verified Emails, Higher Deliverability, Better Outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;