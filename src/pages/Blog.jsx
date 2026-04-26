import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Import generated images
// Use high-quality real photos for a professional, logo-free look
const springHero = "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop";
const commercialHero = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop";
const constructionHero = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop";
const carpetHero = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop";
const ecoHero = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop";



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


          {/* Featured Post - Stylish Editorial Layout */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-32 group relative"
            >
              <Link to={`/blog/${featuredPost.id}`} className="block">
                <div className="relative h-[500px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                </div>
                
                {/* Overlapping Content Box */}
                <div className="absolute -bottom-10 right-0 md:right-10 bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl max-w-2xl border border-gray-100 group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                      Featured Story
                    </span>
                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-dark mb-6 leading-tight tracking-tighter">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center text-primary font-black text-lg gap-2 group/btn">
                    Read Post <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Staggered Grid for Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-20 md:mt-40">
            {otherPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-xl mb-10 group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-8 left-8">
                      <span className="bg-white/95 backdrop-blur-md text-dark px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="flex items-center gap-4 text-gray-400 font-bold text-xs mb-6 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight tracking-tighter group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
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
