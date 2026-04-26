import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import heroCleaning from '../assets/hero_cleaning_new.png';
import CatchTheTrashGame from '../components/CatchTheTrashGame';
import { serviceCategories } from '../data/servicesData';

const Home = () => {
  const [showGame, setShowGame] = useState(true);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCleaning} 
            alt="Sparkling Clean Living Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent"></div>
        </div>

        {/* Render game only within the hero section */}
        {showGame && <CatchTheTrashGame onComplete={() => setShowGame(false)} />}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-center text-white mx-auto flex flex-col items-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-medium text-sm mb-6">
              #1 Cleaning Service in Canada
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Spotless Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Zero Stress.
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl text-center">
              Experience the premium standard of clean. From residential homes to commercial buildings, we bring a meticulous touch to every corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(30,58,138,0.4)] hover:shadow-[0_0_30px_rgba(30,58,138,0.6)] flex items-center justify-center gap-2 group"
              >
                Book a Cleaning
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-sm uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
        </motion.div>
      </section>
      
      {/* Moving Brand Values Banner */}
      <section className="py-10 bg-primary overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center gap-16 px-8"
          >
            <MarqueeItem text="Eco-Friendly Products" />
            <MarqueeItem text="Fully Insured & Vetted" />
            <MarqueeItem text="Satisfaction Guaranteed" />
            <MarqueeItem text="Pet-Friendly Cleaning" />
            <MarqueeItem text="Customizable Plans" />
            <MarqueeItem text="Professional Equipment" />
            {/* Duplicate for seamless loop */}
            <MarqueeItem text="Eco-Friendly Products" />
            <MarqueeItem text="Fully Insured & Vetted" />
            <MarqueeItem text="Satisfaction Guaranteed" />
            <MarqueeItem text="Pet-Friendly Cleaning" />
            <MarqueeItem text="Customizable Plans" />
            <MarqueeItem text="Professional Equipment" />
          </motion.div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-24 bg-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Neat Maintenance?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just clean, we care for your space as if it were our own.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-primary" />}
              title="Trusted & Insured"
              desc="All our professionals are fully vetted, background-checked, and insured for your complete peace of mind."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Star className="w-10 h-10 text-accent" />}
              title="Premium Quality"
              desc="We use top-tier, eco-friendly products and meticulous techniques to ensure a flawless clean every time."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Clock className="w-10 h-10 text-secondary" />}
              title="Reliable & On-Time"
              desc="Your time is valuable. We arrive when scheduled and complete the job efficiently without cutting corners."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Interactive Scroll Quote Section */}
      <ScrollQuote />

      {/* Services Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">Comprehensive Cleaning Solutions</h2>
            </div>
            <Link to="/services" className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2 group">
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="text-primary font-medium hover:text-secondary transition-colors flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section - Vertical Timeline */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2c59] mb-4">How We Work With You</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              Our streamlined process ensures your space is spotless in no time.
            </p>
          </div>
          
          <div className="relative space-y-6 md:space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-7 md:left-9 top-8 bottom-8 w-[2px] bg-gray-100 hidden sm:block"></div>
            
            {[
              { id: '01', title: 'Consultation', desc: 'A quick talk to understand your space and priorities.' },
              { id: '02', title: 'Strategy', desc: 'Custom planning with the right team and equipment.' },
              { id: '03', title: 'Delivery', desc: 'Meticulous execution with professional attention.' },
              { id: '04', title: 'Review', desc: 'Final walkthrough to ensure every corner is "Neat".' }
            ].map((step, index) => (
              <motion.div 
                key={step.id}
                initial="initial"
                whileInView="hover"
                whileHover="hover"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 md:gap-8 relative cursor-pointer"
              >


                {/* Process Circle */}
                <div className="relative flex-shrink-0">
                  <motion.div 
                    variants={{
                      initial: { backgroundColor: "#f9fafb", borderColor: "#f3f4f6", color: "#9ca3af" },
                      hover: { backgroundColor: "#1eb882", borderColor: "#1eb882", color: "#ffffff", scale: 1.05 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center border-2 shadow-sm font-black text-lg"
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="pt-2 md:pt-4">
                  <motion.h3 
                    variants={{
                      initial: { color: "#0f2c59" },
                      hover: { color: "#1eb882" }
                    }}
                    className="text-xl md:text-2xl font-black mb-1 leading-tight"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-sm md:text-base text-gray-500 leading-snug max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-24 bg-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              role="Homeowner"
              text="Neat Maintenance completely transformed my home. Their attention to detail is unmatched, and the team is so friendly and professional."
            />
            <TestimonialCard 
              name="David Chen"
              role="Office Manager"
              text="Switching to Neat for our commercial cleaning was the best decision. Our office has never looked better, and our employees noticed immediately."
            />
            <TestimonialCard 
              name="Emma Thompson"
              role="Real Estate Agent"
              text="I use them for all my move-in/move-out cleanings. They are reliable, thorough, and always leave the properties sparkling for new buyers."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for a Cleaner Space?</h2>
            <p className="text-xl text-primary-100 mb-10 text-white/80">
              Join thousands of satisfied customers across Canada who trust Neat Maintenance.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-dark px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
  >
    <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);




const TestimonialCard = ({ name, role, text }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
  >
    <div className="flex text-secondary mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-6">"{text}"</p>
    <div>
      <h4 className="font-bold text-dark">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </motion.div>
);
const ScrollQuote = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 5%"]
  });

  const quote = "We don't just clean your space. We transform it into a haven of peace, productivity, and absolute purity.";
  const words = quote.split(" ");

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white relative flex items-center justify-center overflow-hidden border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            const color = useTransform(scrollYProgress, [start, end], ["#e2e8f0", "#1eb882"]); 
            
            return (
              <motion.span key={i} style={{ opacity, color }} className="inline-block mr-2 md:mr-3 mb-2">
                {word}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};
const MarqueeItem = ({ text }) => (
  <div className="flex items-center gap-4">
    <div className="w-2 h-2 rounded-full bg-secondary"></div>
    <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">{text}</span>
  </div>
);


export default Home;
