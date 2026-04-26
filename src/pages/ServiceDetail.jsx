import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { serviceCategories } from '../data/servicesData';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceCategories.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-light">
        <h1 className="text-4xl font-bold text-dark mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary font-bold hover:text-secondary underline">View All Services</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-light min-h-screen pb-20">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
            <div className="max-w-6xl mx-auto">
              <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-white shadow-lg`}>
                  {React.cloneElement(service.icon, { className: 'w-8 h-8 text-primary' })}
                </div>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-dark mb-6">Service Overview</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                {service.description}
              </p>
              
              <h2 className="text-3xl font-bold text-dark mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.items.map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-dark mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 text-lg">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sidebar CTA */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 bg-primary text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Need this service?</h3>
                <p className="text-primary-100 mb-8 relative z-10">
                  Get a free, no-obligation quote tailored specifically for your {service.title.toLowerCase()} needs.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-white text-primary hover:bg-secondary hover:text-white font-bold py-4 rounded-xl transition-colors shadow-lg relative z-10"
                >
                  Request a Quote
                </Link>
                <p className="text-center text-sm text-primary-200 mt-4 relative z-10">
                  Or call us at: <strong>1-800-CLEAN-NOW</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us for this Service */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Us for {service.title}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine industry expertise with top-tier equipment to deliver unmatched results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Specialized Training</h3>
              <p className="text-gray-600">Our staff is specifically trained in the best practices and techniques for this exact service.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Premium Products</h3>
              <p className="text-gray-600">We use high-quality, eco-friendly products that are tough on dirt but safe for your environment.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">We stand by our work. If you're not fully satisfied, we will make it right.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-dark rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Best {service.title}?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Let our professionals handle the hard work so you can focus on what matters most.</p>
              <Link 
                to="/contact" 
                className="inline-block bg-secondary hover:bg-secondary/90 text-dark px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Book Your Cleaning Today
              </Link>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
