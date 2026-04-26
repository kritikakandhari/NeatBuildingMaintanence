import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const FAQ = () => {

  const faqs = [
    {
      question: "What areas do you service in Canada?",
      answer: "We currently provide comprehensive cleaning services across major metropolitan areas in Canada including Toronto, Vancouver, Calgary, Montreal, and Ottawa. We are continuously expanding to new regions."
    },
    {
      question: "Are your cleaning products safe for pets and children?",
      answer: "Yes, absolutely! We prioritize your family's health by offering Eco-Friendly Cleaning services using non-toxic, chemical-free products that are completely safe for both pets and children."
    },
    {
      question: "Do I need to provide any cleaning supplies or equipment?",
      answer: "No, our professional cleaning teams arrive fully equipped with all the necessary premium cleaning supplies and state-of-the-art equipment to complete the job to the highest standards."
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer: "Yes, every member of the Neat Maintenance team is rigorously vetted, fully background-checked, and bonded and insured for your complete peace of mind."
    },
    {
      question: "How do I book a service or get a quote?",
      answer: "Booking is simple! You can fill out the form on our Contact page, give us a call at our toll-free number, or send us an email. We provide fast, free, no-obligation quotes tailored to your specific needs."
    },
    {
      question: "What is included in a 'Deep Cleaning' service?",
      answer: "Deep cleaning includes everything in our regular cleaning plus detailed attention to baseboards, inside appliances (fridge/oven), interior windows, deep dusting of hard-to-reach areas, and intensive scrubbing of bathrooms and kitchens."
    }
  ];

  return (
    <PageTransition>
      <div className="bg-light min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
            >
              <MessageCircle className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Find answers to common questions about our services, products, and policies.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
          >
            <h3 className="text-2xl font-bold text-dark mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <a href="/contact" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-primary/30 shadow-md' : 'bg-white/50 border-gray-200 hover:border-gray-300 hover:bg-white'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-dark pr-8">{faq.question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
