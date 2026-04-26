import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center mb-6 group inline-flex bg-white p-2 rounded-xl transition-transform duration-300 hover:-translate-y-1 shadow-lg">
              <img 
                src="/logo.png" 
                alt="Neat Building Maintenance Logo" 
                className="h-14 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium residential and commercial cleaning services across Canada. We bring shine to your space with eco-friendly and reliable solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social links removed as per request */}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/blog">Our Blog</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/services">Residential Cleaning</FooterLink>
              <FooterLink to="/services">Commercial Cleaning</FooterLink>
              <FooterLink to="/services">Post-Construction</FooterLink>
              <FooterLink to="/services">Eco-Friendly Cleaning</FooterLink>
              <FooterLink to="/services">Specialized Cleaning</FooterLink>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To redefine the standard of clean by combining traditional work ethic with modern, sustainable technology. We aim to create healthier environments for families and businesses across the country.
            </p>
          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Neat Building Maintenance. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-secondary hover:translate-x-1 inline-block transition-all duration-300">
      {children}
    </Link>
  </li>
);

export default Footer;
