import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the tool?",
      answer: "Our email verification tool has a 99%+ accuracy rate, using multiple verification layers including syntax checking, domain validation, and real-time SMTP verification."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, we offer 50 free email verifications when you sign up. After that, you can choose from our flexible pricing plans based on your needs."
    },
    {
      question: "Do you store or save any emails?",
      answer: "We take privacy seriously. We don't store your email lists or verification results. All data is processed securely and deleted after verification."
    },
    {
      question: "Can I verify large email lists?",
      answer: "Absolutely! Our bulk verification feature can handle lists of any size, from hundreds to millions of email addresses."
    },
    {
      question: "What's a risky email?",
      answer: "A risky email is one that might cause delivery issues. This includes catch-all emails, role-based emails, or emails from domains with poor reputation."
    },
    {
      question: "What happens during verification?",
      answer: "We perform multiple checks: syntax validation, domain verification, MX record lookup, and SMTP server response testing to ensure email deliverability."
    },
    {
      question: "What do Valid Risky and Invalid mean?",
      answer: "Valid emails are safe to send to, Invalid emails will bounce, and Risky emails might cause delivery issues or damage your sender reputation."
    },
    {
      question: "How often should I clean my list?",
      answer: "We recommend cleaning your email list every 3-6 months, or before major campaigns to maintain optimal deliverability rates."
    },
    {
      question: "Is there a monthly limit?",
      answer: "Our paid plans come with monthly credit allocations. You can always upgrade or purchase additional credits as needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Master Class</h3>
              <p className="text-blue-100 mb-4">
                Become a cold email master learning cold emailing step-by-step.
              </p>
              <button className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <div className="mt-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                  alt="Master Class"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Need help?</h3>
              <p className="text-gray-300 mb-4">
                Connect over 1:1 call we can help you get started
              </p>
              <button className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center">
                Let's talk <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <div className="mt-4">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                  alt="Need help"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Column - FAQ */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 rounded-lg"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;