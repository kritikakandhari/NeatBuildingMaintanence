import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="bg-light min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Ready for a spotless space? Contact us today for a free quote or to schedule your next cleaning service.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-primary text-white p-10 relative overflow-hidden">
              {/* Circles background */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10">Our Promise</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-secondary">Quality First</h4>
                  <p className="text-primary-100 leading-relaxed">
                    We believe a clean space is a productive space. Our team is dedicated to providing the highest standard of cleanliness using professional-grade, eco-friendly solutions.
                  </p>
                </div>

                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-secondary">Reliable Service</h4>
                  <p className="text-primary-100 leading-relaxed">
                    Trust is the foundation of our business. Every member of our team is fully vetted and trained to respect your privacy and property.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10">
              <h3 className="text-2xl font-bold text-dark mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Service Inquiry" />
                  </div>
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50">
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Post-Construction</option>
                    <option>Eco-Friendly</option>
                    <option>Other (Please specify)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Tell us about your space and specific needs..."></textarea>
                </div>

                <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
