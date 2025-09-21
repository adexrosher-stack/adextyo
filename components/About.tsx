'use client';

import { useState, useEffect } from 'react';
import { Code, Palette, PenTool, User } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/1920/1080?blur=2)',
          filter: 'brightness(0.3) blur(1px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover my journey through code, creativity, and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Card with Flip Animation */}
          <div className={`flip-card h-96 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flip-card-inner h-full">
              {/* Front - Programming */}
              <div className="flip-card-front">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 h-full flex flex-col items-center justify-center text-white shadow-2xl">
                 <div className="w-32 h-32 mb-6 rounded-full overflow-hidden">
  <img 
    src="/one.png" 
    alt="Programming" 
    className="w-full h-full object-cover"
  />
</div>

                  <h3 className="text-2xl font-bold mb-4">Developer</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-orange-400 font-semibold">Languages & Frameworks:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span className="bg-blue-600 px-3 py-1 rounded">JavaScript</span>
                      <span className="bg-blue-500 px-3 py-1 rounded">React</span>
                      <span className="bg-black px-3 py-1 rounded">Next.js</span>
                      <span className="bg-purple-600 px-3 py-1 rounded">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Back - Creative Skills */}
              <div className="flip-card-back">
                <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl p-8 h-full flex flex-col items-center justify-center text-white shadow-2xl">
                 <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
                    <Palette className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Creative Professional</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-purple-400 font-semibold">Creative Skills:</p>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <span className="bg-red-600 px-3 py-1 rounded">Video Editing</span>
                      <span className="bg-green-600 px-3 py-1 rounded">Content Writing</span>
                      <span className="bg-yellow-600 px-3 py-1 rounded">UI/UX Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Flip Card */}
          <div className={`flip-card h-96 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flip-card-inner h-full">
              {/* Front - About */}
              <div className="flip-card-front">
                <div className="bg-gradient-to-br from-orange-800 to-red-900 rounded-xl p-8 h-full flex flex-col items-center justify-center text-white shadow-2xl">
                  <Code className="w-20 h-20 mb-6 text-orange-300" />
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                  <p className="text-center text-orange-100 leading-relaxed">
                    Passionate about creating digital experiences that combine technical excellence 
                    with creative storytelling. I believe in the power of code to bring ideas to life.
                  </p>
                </div>
              </div>
              
              {/* Back - Philosophy */}
              <div className="flip-card-back">
                <div className="bg-gradient-to-br from-teal-800 to-blue-900 rounded-xl p-8 h-full flex flex-col items-center justify-center text-white shadow-2xl">
                  <PenTool className="w-20 h-20 mb-6 text-teal-300" />
                  <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
                  <p className="text-center text-teal-100 leading-relaxed">
                    Every project is an opportunity to learn, grow, and create something meaningful. 
                    I strive for pixel-perfect designs and clean, efficient code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;