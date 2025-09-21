'use client';

import { useState, useEffect } from 'react';
import { 
  Code2, 
  Palette, 
  Video, 
  PenTool, 
  Globe, 
  Database,
  Smartphone,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 80, icon: Code2, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React/Next.js', level: 85, icon: Globe, color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', level: 88, icon: Palette, color: 'from-teal-400 to-teal-600' },
    { name: 'Node.js', level: 80, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'Video Editing', level: 92, icon: Video, color: 'from-red-400 to-red-600' },
    { name: 'Content Writing', level: 95, icon: PenTool, color: 'from-purple-400 to-purple-600' },
    { name: 'Mobile Dev', level: 75, icon: Smartphone, color: 'from-indigo-400 to-indigo-600' },
    { name: 'UI/UX Design', level: 82, icon: Layers, color: 'from-pink-400 to-pink-600' }
  ];

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    const IconComponent = skill.icon;

    return (
      <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Proficiency</span>
            <span className="text-orange-400 font-medium">{animatedLevel}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${animatedLevel}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;