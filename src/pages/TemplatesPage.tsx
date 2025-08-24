import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Eye } from 'lucide-react';

const TemplatesPage = () => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Template',
      description: 'A contemporary design with colorful accents and modern typography',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Colorful design', 'Modern typography', 'Professional layout']
    },
    {
      id: 'classic',
      name: 'Classic Template',
      description: 'Traditional and professional design perfect for corporate roles',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Traditional layout', 'Corporate style', 'Clean structure']
    },
    {
      id: 'minimal',
      name: 'Minimal Template',
      description: 'Clean and spacious design that focuses on content',
      image: 'https://images.pexels.com/photos/7688317/pexels-photo-7688317.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Minimalist design', 'Lots of white space', 'Content focused']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your Template
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Select from our professionally designed templates to create a resume that matches your style and industry
          </motion.p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/builder?template=${template.id}`}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                >
                  Use This Template
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Templates Include</h2>
            <p className="text-gray-600">Every template comes with these powerful features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'ATS-Friendly Format',
              'Professional Typography',
              'Multiple Color Schemes',
              'PDF Export Ready',
              'Mobile Responsive',
              'Easy Customization',
              'Industry Optimized',
              'Expert Designed'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-green-100 p-1.5 rounded-full">
                  <FileText className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;