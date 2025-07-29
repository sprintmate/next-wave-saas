import React from 'react';
import { CheckCircle, Zap, Shield, Rocket } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const About: React.FC = () => {
  const icons = [CheckCircle, Zap, Shield, Rocket];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteConfig.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.about.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.title}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-teal-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing number of successful companies that trust Nextwave to deliver exceptional SaaS solutions.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;