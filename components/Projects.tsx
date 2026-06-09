'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.',
      image: 'https://picsum.photos/400/300?random=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'School Management System',
      description: 'Developed a web-based platform for managing students, teachers, attendance, grades, schedules, and academic records with role-based access and real-time updates..',
      image: 'https://picsum.photos/400/300?random=2',
      technologies: ['Next.js', 'Tailwind', 'Firebase', 'TypeScript'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Video Streaming Platform',
      description: 'Netflix-like streaming platform with video upload, processing, and adaptive streaming. Built with modern web technologies.',
      image: 'https://picsum.photos/400/300?random=3',
      technologies: ['React', 'Express', 'AWS S3', 'FFmpeg'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool that helps writers create blog posts, social media content, and marketing copy.',
      image: 'https://picsum.photos/400/300?random=4',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent matching system.',
      image: 'https://picsum.photos/400/300?random=5',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness application with workout tracking, nutrition planning, progress analytics, and social features.',
      image: 'https://picsum.photos/400/300?random=6',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      liveDemo: '#',
      github: '#'
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div className={`group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            href={project.liveDemo}
            className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors transform hover:scale-110"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href={project.github}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a 
            href={project.liveDemo}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          
          <a 
            href={project.github}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
