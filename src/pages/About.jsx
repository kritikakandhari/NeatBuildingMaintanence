import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {

  return (
    <PageTransition>
      <div className="bg-light min-h-screen py-20">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Setting the Gold Standard in <span className="text-primary">Canadian Cleaning Services</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a simple mission: to provide unparalleled cleaning services that transform spaces and improve lives. We believe that a clean environment is the foundation for health, happiness, and productivity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What started as a small local team has grown into one of Canada's most trusted building maintenance companies, serving thousands of residential and commercial clients with unwavering dedication to quality.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex-1 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                  <p className="text-sm text-gray-500 font-medium">Satisfaction Guarantee</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex-1 text-center">
                  <h4 className="text-3xl font-bold text-secondary mb-1">24/7</h4>
                  <p className="text-sm text-gray-500 font-medium">Dedicated Support</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Cleaning Team" 
                className="relative rounded-[2rem] shadow-2xl object-cover h-[600px] w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-dark py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard 
                icon={<Target />} 
                title="Excellence" 
                desc="We never cut corners. Every space we touch receives our full meticulous attention."
              />
              <ValueCard 
                icon={<Heart />} 
                title="Care" 
                desc="We care deeply about our clients' health, using eco-friendly products whenever possible."
              />
              <ValueCard 
                icon={<Users />} 
                title="Integrity" 
                desc="Our team is honest, transparent, and treats your space with the utmost respect."
              />
              <ValueCard 
                icon={<Award />} 
                title="Reliability" 
                desc="We show up on time, every time, delivering consistent quality you can count on."
              />
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
  >
    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
      {React.cloneElement(icon, { className: "w-7 h-7" })}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

export default About;
