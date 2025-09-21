'use client';

import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} adexrosher.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-orange-500" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-orange-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            Crafted with Next.js, Tailwind CSS, and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;