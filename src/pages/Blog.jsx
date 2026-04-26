import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Import generated images
// Use locally saved generated images
const springHero = "/blog/spring.png";
const commercialHero = "/blog/commercial.png";
const constructionHero = "/blog/construction.png";
const carpetHero = "/blog/carpet.png";
const ecoHero = "/blog/eco.png";


export const blogPosts = [
  {
    id: "spring-cleaning-tips",
    title: "The Ultimate Spring Cleaning Checklist: 2026 Edition",
    excerpt: "Winter is over, and it's time to breathe new life into your home. Our expert cleaners share their secret checklist for a deep clean that lasts all season long.",
    category: "Residential",
    date: "April 12, 2026",
    readTime: "5 min read",
    image: springHero,
    featured: true
  },
  {
    id: "benefits-of-commercial-cleaning",
    title: "Why a Clean Office is Your Best Productivity Hack",
    excerpt: "A cluttered desk is a cluttered mind. Discover how professional office cleaning can reduce employee sick days and boost focus by up to 20%.",
    category: "Commercial",
    date: "March 28, 2026",
    readTime: "7 min read",
    image: commercialHero
  },
  {
    id: "eco-friendly-cleaning-products",
    title: "The Truth About Green Cleaning: Does It Really Work?",
    excerpt: "Many people think eco-friendly means less effective. We're debunking the myths and showing you the science behind sustainable cleaning.",
    category: "Eco-Friendly",
    date: "March 15, 2026",
    readTime: "4 min read",
    image: ecoHero
  },
  {
    id: "post-construction-cleaning",
    title: "Moving In? Why Post-Construction Cleaning is Non-Negotiable",
    excerpt: "Renovations leave behind microscopic dust that can trigger allergies. Learn why a standard vacuum isn't enough for your new space.",
    category: "Residential",
    date: "February 20, 2026",
    readTime: "6 min read",
    image: constructionHero
  },
  {
    id: "carpet-maintenance-secrets",
    title: "How to Extend Your Carpet's Life by 5 Years",
    excerpt: "Carpets are an investment. Our pro cleaners share the maintenance schedule you need to follow to keep them looking brand new.",
    category: "Maintenance",
    date: "February 10, 2026",
    readTime: "5 min read",
    image: carpetHero
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(p => p.featured);
  const otherPosts = blogPosts.filter(p => !p.featured);

  return (
    <PageTransition>
      <div className="bg-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl md:text-7xl font-black text-dark mb-4 md:mb-6 tracking-tighter">
              Inside <span className="text-primary">Neat</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium">
              Expert advice on maintenance, sustainability, and creating a healthier living environment.
            </p>
          </div>


          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-24 group cursor-pointer"
            >
              <Link to={`/blog/${featuredPost.id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
                      Featured Story
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-gray-400 font-bold text-sm mb-6 uppercase tracking-widest">
                    <span>{featuredPost.date}</span>
                    <span className="w-2 h-2 rounded-full bg-primary/30"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-[1.1] group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center text-primary font-black text-lg gap-2">
                    Read the Full Story <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid for Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {otherPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-[350px] overflow-hidden rounded-[2rem] shadow-lg mb-8">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-32 bg-[#0f172a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Get the best of Neat <br /><span className="text-primary">in your inbox.</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Join 2,000+ subscribers for weekly cleaning tips and exclusive offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary transition-colors text-lg"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
