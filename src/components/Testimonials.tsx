import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The future of cadence tools has arrived. The simplicity and straightforwardness of the product are great.",
      author: "Thomas Foley",
      position: "HighTouch, Founder",
      image: "/api/placeholder/80/80"
    },
    {
      quote: "The perfect outreach platform for our business. You can add unlimited email accounts to increase volume at any scale.",
      author: "Gino Taka",
      position: "Founder, Skyrocket",
      image: "/api/placeholder/80/80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Used by 10,000 businesses to generate $15M in revenue
          </h2>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center">
            <button
              onClick={prevTestimonial}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="flex-1 mx-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="mb-4">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                        40
                      </span>
                    </div>
                    <blockquote className="text-xl text-white mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mr-4 overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;