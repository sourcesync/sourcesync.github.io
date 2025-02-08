import React from 'react';
import { LayoutGrid, Atom, Rocket, Mail, NewspaperIcon } from 'lucide-react';

const Website = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <LayoutGrid className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Armijo Innovations</span>
            </div>
            <div className="flex space-x-4">
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#press" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Press Releases</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative text-white py-32">
        <img src="/api/placeholder/1920/600" alt="Hero background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Advanced AI Solutions for Tomorrow's Challenges</h1>
          <p className="text-2xl mb-8">Pioneering AI applications in aerospace, photonics, and quantum computing</p>
        </div>
      </div>

      {/* Core Areas */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-md h-96">
            <img src="/api/placeholder/400/400" alt="Aerospace" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative h-full p-6 flex flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Aerospace AI</h3>
              <p className="text-white text-center">Advanced navigation systems and autonomous flight control powered by cutting-edge AI algorithms.</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md h-96">
            <img src="/api/placeholder/400/400" alt="Photonics" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative h-full p-6 flex flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <LayoutGrid className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Photonics</h3>
              <p className="text-white text-center">AI-optimized optical systems for next-generation communications and sensing applications.</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md h-96">
            <img src="/api/placeholder/400/400" alt="Quantum Computing" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative h-full p-6 flex flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <Atom className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Quantum Computing</h3>
              <p className="text-white text-center">Pioneering quantum algorithms and control systems enhanced by machine learning.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-blue-600 mr-2" />
              <h2 className="text-3xl font-bold">Contact Us</h2>
            </div>
            <p className="text-center text-gray-600 mb-8">
              Ready to explore how our AI solutions can transform your business? Get in touch with our team.
            </p>
            <div className="text-center">
              <a href="mailto:contact@armijoinnovations.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div id="press" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-8">
          <NewspaperIcon className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold">Press Releases</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Armijo Innovations Announces Breakthrough in Quantum ML</h3>
            <p className="text-gray-600 mb-4">Our team has achieved a significant milestone in combining quantum computing with machine learning...</p>
            <p className="text-sm text-gray-500">February 1, 2025</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">New Partnership with Leading Aerospace Manufacturer</h3>
            <p className="text-gray-600 mb-4">Armijo Innovations partners with industry leader to develop next-generation autonomous navigation systems...</p>
            <p className="text-sm text-gray-500">January 15, 2025</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <LayoutGrid className="h-6 w-6" />
              <span className="font-bold">Armijo Innovations</span>
            </div>
            <div className="text-sm">
              © 2025 Armijo Innovations. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;