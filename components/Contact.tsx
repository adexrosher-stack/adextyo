'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import { FaTelegramPlane, FaTiktok, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(''); // For success/error messages

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mgvnwvyg', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Oops! There was a problem sending your message.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem sending your message.');
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/adexrosher', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/adane-tigistu-a622a7378', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: FaTelegramPlane, url: 'https://t.me/@adanerosher', color: 'hover:text-sky-400' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@rosherthesecret', color: 'hover:text-white' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/adexrosher', color: 'hover:text-pink-500' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'adexrosher@gmail.com' },
    { icon: Phone, label: 'Phone', value: '0946505538' },
    { icon: MapPin, label: 'Location', value: 'Addis Abeba, Ethiopia' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Social Links */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{"Let's Talk"}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just say hi, 
                feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-orange-400 font-semibold">{info.label}</p>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              {status && <p className="mb-4 text-orange-400">{status}</p>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
