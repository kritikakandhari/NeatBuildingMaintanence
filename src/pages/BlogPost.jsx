import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:text-secondary underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pb-32">
        {/* Article Header */}
        <header className="pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-primary mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-black text-dark mb-10 leading-[1.1] tracking-tighter">
              {post.title}
            </h1>


            <div className="pt-10 border-t border-gray-100">
              {/* Author removed as per request */}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="w-full h-[50vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative Side Quote Mark */}
            <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-serif select-none hidden lg:block">"</div>
            
            <p className="text-2xl md:text-4xl text-dark font-black leading-[1.3] mb-16 tracking-tight border-l-4 border-primary pl-8 py-2">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-12 text-gray-700 text-lg md:text-xl leading-relaxed font-medium">

            
            {post.id === "spring-cleaning-tips" && (
              <>
                <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter leading-tight">The Ritual of Renewal</h2>
                <p>
                  Spring isn't just a season; it's a state of mind. After months of closed windows and heavy winter layers, your home deserves to breathe. A proper spring clean goes beyond the surface—it's about clearing out the stagnant energy and hidden dust that accumulated during the cold months.
                </p>
                <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-6">Phase 1: The Deep Declutter</h3>
                  <p className="mb-8">
                    Before the first spray bottle is even opened, we recommend a total declutter. Go through your closets, pantry, and storage areas. If you haven't used it all winter, consider donating it.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { t: 'Vertical Dusting', d: 'Start from the ceiling fans and work your way down to the baseboards.' },
                      { t: 'Window Therapy', d: 'Clean both sides of the glass to let in maximum natural light.' },
                      { t: 'Air Quality', d: 'Replace furnace filters and wash all heavy curtains.' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs mt-1">✓</div>
                        <p><span className="font-black text-dark">{item.t}:</span> {item.d}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <blockquote className="bg-primary text-white p-10 md:p-16 rounded-[3rem] text-2xl md:text-3xl font-black leading-tight italic shadow-2xl shadow-primary/20">
                  "A clean home is a foundation for a clear mind. When your environment is organized, your peace of mind follows naturally."
                </blockquote>

              </>
            )}

            {post.id === "benefits-of-commercial-cleaning" && (
              <>
                <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter leading-tight">The ROI of a Spotless Office</h2>
                <p>
                  Most business owners view cleaning as an expense. We view it as an investment in your team's performance. A clean workspace reduces sick days, improves employee morale, and makes a powerful first impression on visiting clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { t: 'Productivity Boost', d: 'Employees focus better when their desks aren\'t covered in dust.' },
                    { t: 'Cost Savings', d: 'Regular maintenance saves thousands in replacement costs.' },
                    { t: 'Professionalism', d: 'Your office is your brand\'s physical manifestation.' },
                    { t: 'Health First', d: 'Reduce sick days with hospital-grade sanitization.' }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <h4 className="font-black text-primary mb-2 uppercase tracking-widest text-xs">{item.t}</h4>
                      <p className="text-sm md:text-base">{item.d}</p>
                    </div>
                  ))}
                </div>

              </>
            )}

            {post.id === "eco-friendly-cleaning-products" && (
              <>
                <h2 className="text-3xl md:text-4xl">Effective, Ethical, and Essential</h2>
                <p>
                  The myth that "chemical-heavy" means "more clean" is finally dying. Modern plant-based cleaning solutions are just as effective as their traditional counterparts, without the respiratory irritants and environmental impact.
                </p>
                <h3 className="text-2xl">Why We Choose Green</h3>
                <p>
                  At Neat Maintenance, we use proprietary blends of citrus-based degreasers and enzyme-powered cleaners. They are safe for pets, children, and those with sensitive skin.
                </p>
                <ul>
                  <li><strong>No VOCs:</strong> Volatile Organic Compounds can linger in the air for days. We avoid them entirely.</li>
                  <li><strong>Biodegradable:</strong> What goes down the drain shouldn't harm our waterways.</li>
                  <li><strong>Hypoallergenic:</strong> Breathe easy knowing no harsh residues are left behind.</li>
                </ul>
              </>
            )}

            {post.id === "post-construction-cleaning" && (
              <>
                <h2 className="text-3xl md:text-4xl">The Final Stage of Your Renovation</h2>
                <p>
                  The contractors have left, and the paint is dry. But look closely—there's a fine layer of white dust over everything. Construction dust is notorious for its ability to hide in vents, light fixtures, and inside cabinets. 
                </p>
                <h3 className="text-2xl">The 3-Pass Method</h3>
                <p>
                  A standard cleaning isn't enough. We use a three-pass system: the Rough Clean (removing large debris), the Deep Clean (detailed scrubbing), and the Final Polish (ensuring a move-in ready shine).
                </p>
                <ul>
                  <li><strong>HEPA Filtration:</strong> Standard vacuums just blow dust back out. We use industrial HEPA filters.</li>
                  <li><strong>Surface Safety:</strong> Freshly installed marble or wood requires specific, non-abrasive care.</li>
                  <li><strong>Air Duct Purge:</strong> Cleaning the filters and vents is the only way to stop the dust from returning.</li>
                </ul>
              </>
            )}

            {post.id === "carpet-maintenance-secrets" && (
              <>
                <h2 className="text-3xl md:text-4xl">Protecting Your Investment</h2>
                <p>
                  Carpeting is one of the most expensive elements of your interior. Most people wait until they see a stain to call a professional, but by then, the fibers may already be damaged by abrasive dirt.
                </p>
                <h3 className="text-2xl">The Science of Carpet Wear</h3>
                <p>
                  Dirt acts like tiny knives, cutting into carpet fibers every time someone walks over them. Regular steam cleaning (Hot Water Extraction) is the only way to remove these abrasive particles from the deep pile.
                </p>
                <ul>
                  <li><strong>The 'No Shoe' Rule:</strong> 80% of carpet dirt comes from the outdoors.</li>
                  <li><strong>Immediate Spot Care:</strong> Blot, never rub. We'll show you how.</li>
                  <li><strong>Annual Deep Clean:</strong> Essential for maintaining your carpet's warranty and texture.</li>
                </ul>
              </>
            )}

            <div className="my-16 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 text-center">
              <h3 className="text-2xl font-black mb-4">Interested in a professional touch?</h3>
              <p className="text-gray-500 mb-8">Get a customized quote for your home or office in less than 2 minutes.</p>
              <Link to="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-black shadow-lg hover:shadow-xl transition-all">
                Get a Free Quote
              </Link>
            </div>
          </div>


          {/* Related Posts */}
          <div className="mt-32 pt-20 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-dark tracking-tight">More from Neat</h3>
              <Link to="/blog" className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all group/see">
                See all stories <ArrowRight className="w-5 h-5 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group">
                  <div className="relative h-72 md:h-80 overflow-hidden rounded-[2.5rem] mb-6 shadow-xl border border-gray-100">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="text-2xl font-black text-dark group-hover:text-primary transition-colors leading-tight tracking-tight">{p.title}</h4>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
