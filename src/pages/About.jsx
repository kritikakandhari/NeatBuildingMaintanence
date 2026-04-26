import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, Shield, Sparkles, Zap, Leaf } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen">
        
        {/* Hero Section - Split Layout */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">
                  <Sparkles className="w-4 h-4" /> Who we are
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-dark mb-8 leading-[1.05] tracking-tighter">
                  Crafting <span className="text-primary">Neat</span> <br /> Environments.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-xl">
                  We don't just clean spaces; we restore clarity. Neat Maintenance was born from the belief that a truly professional service should be felt, not just seen.
                </p>
                
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary shadow-sm">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-dark leading-none mb-1">Fully Insured</p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Peace of Mind</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary shadow-sm">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-dark leading-none mb-1">Eco-Conscious</p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Sustainable Care</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl z-10">
                  <img 
                    src="/blog/commercial.png" 
                    alt="Professional cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative floating box */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white">
                      <Zap className="w-7 h-7 fill-current" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-dark">100%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quality Promise</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-dark mb-6 tracking-tighter">The Neat Approach</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                Our philosophy is simple: attention to detail is not an option—it's the foundation of everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Target className="w-8 h-8" />, 
                  title: "Precision", 
                  desc: "We follow a 50-point checklist for every service to ensure nothing is missed."
                },
                { 
                  icon: <Heart className="w-8 h-8" />, 
                  title: "Passion", 
                  desc: "Our team takes pride in transforming spaces from cluttered to crystal clear."
                },
                { 
                  icon: <Award className="w-8 h-8" />, 
                  title: "Premium", 
                  desc: "We use high-end equipment and hospital-grade solutions for superior results."
                }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100/50"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-4">{val.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Image Grid */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8">
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl group">
                  <img 
                    src="/blog/spring.png" 
                    alt="Our experts" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent flex items-end p-12">
                    <h3 className="text-3xl font-black text-white">The Expertise You Deserve.</h3>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl group">
                  <img 
                    src="/blog/construction.png" 
                    alt="Cleaning detail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl group">
                  <img 
                    src="/blog/carpet.png" 
                    alt="Office cleaning" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="md:col-span-8 text-center bg-primary rounded-[3rem] p-12 flex flex-col justify-center items-center">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Ready to experience <br /> the Neat difference?
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-full font-black shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  Contact Us Today
                </motion.button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;

