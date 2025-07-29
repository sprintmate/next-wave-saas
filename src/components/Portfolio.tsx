import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative solutions we've built for forward-thinking companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((project, index) => (
            <div
              key={project.name}
              className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-white/90 text-xs font-semibold text-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <button   onClick={() => window.open("https://stackmint.in", "_blank")}
 className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </button>
                  {/* <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors">
                    <Code className="w-4 h-4" />
                    <span>Case Study</span>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;