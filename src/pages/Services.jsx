import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { serviceCategories } from '../data/servicesData';
import { ShieldCheck, Clock, MousePointerClick, Sparkles, Star } from 'lucide-react';
const Services = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageTransition>
      <div className="bg-light min-h-screen py-16 relative">
        {/* Services Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-4 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0 order-2 lg:order-1"
            >
              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-[15%] -left-2 sm:left-4 lg:-left-6 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-10 border border-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <MousePointerClick className="text-[#4262ff] w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-dark leading-tight">
                  Instant online<br/><span className="text-[#4262ff]">booking</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[40%] -right-2 sm:right-4 lg:-right-6 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-10 border border-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShieldCheck className="text-[#4262ff] w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-dark leading-tight">
                  Trusted<br/><span className="text-[#4262ff]">professionals</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-[15%] -left-2 sm:left-10 lg:left-0 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-10 border border-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Clock className="text-[#4262ff] w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-dark leading-tight">
                  Get <span className="text-[#4262ff]">24/7</span><br/>Support
                </div>
              </motion.div>

              {/* Main Image */}
              <div className="relative z-0 w-full max-w-lg mx-auto h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent rounded-full blur-3xl -z-10 w-3/4 mx-auto"></div>
                <img 
                  src="/hero-cleaner.png" 
                  alt="Professional Cleaner" 
                  className="w-full h-full object-cover" 
                  style={{ mixBlendMode: 'multiply', objectPosition: 'top' }} 
                />
              </div>
            </motion.div>

            {/* Right Text Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2 text-center lg:text-left relative z-10"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0f2c59] leading-[1.1] tracking-tight relative z-20">
                Clean<br/>with open<br/>hearts <span className="inline-block text-blue-500">💙</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium relative z-20">
                The no-stress way to book the cleaning service you need in minutes. Eliminates back and forth emails. Explore the services below.
              </p>
              <div className="relative z-20">
                <button 
                  onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center bg-[#4262ff] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[0_8px_20px_rgba(66,98,255,0.3)] hover:shadow-[0_8px_25px_rgba(66,98,255,0.4)] transform hover:-translate-y-1"
                >
                  Explore Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </motion.div>
            
          </div>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCategories.map((category, index) => {
              const rotation = index % 2 === 0 ? -1.5 : 1.5;
              return (
              <motion.div 
                key={category.id}
                variants={itemVariants}
                style={{ rotate: rotation }}
                whileHover={{ y: -8, rotate: 0, scale: 1.01, transition: { duration: 0.3 } }}
                className={`flex flex-col rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border bg-white ${category.color.replace('bg-', 'border-').replace('50', '200')}`}
              >
                <div className={`${category.color.split(' ')[0]} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-6">{category.title}</h3>
                <ul className="space-y-3 flex-grow mb-8">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services/${category.id}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-center transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                >
                  View Full Details
                </Link>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
