import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
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
          <div className="prose prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-dark">
            <p className="text-2xl md:text-3xl text-dark font-medium leading-normal mb-16 italic">
              "{post.excerpt}"
            </p>
            
            {post.id === "spring-cleaning-tips" && (
              <>
                <h2 className="text-3xl md:text-4xl">The Ritual of Renewal</h2>
                <p>
                  Spring isn't just a season; it's a state of mind. After months of closed windows and heavy winter layers, your home deserves to breathe. A proper spring clean goes beyond the surface—it's about clearing out the stagnant energy and hidden dust that accumulated during the cold months.
                </p>
                <h3 className="text-2xl">Phase 1: The Deep Declutter</h3>
                <p>
                  Before the first spray bottle is even opened, we recommend a total declutter. Go through your closets, pantry, and storage areas. If you haven't used it all winter, consider donating it. A clear space makes the actual cleaning much more effective.
                </p>
                <ul>
                  <li><strong>Vertical Dusting:</strong> Start from the ceiling fans and work your way down to the baseboards.</li>
                  <li><strong>Window Therapy:</strong> Clean both sides of the glass to let in maximum natural light.</li>
                  <li><strong>Air Quality:</strong> Replace furnace filters and wash all heavy curtains.</li>
                </ul>
                <blockquote className="my-16">
                  "A clean home is a foundation for a clear mind. When your environment is organized, your productivity and peace of mind follow naturally."
                </blockquote>
              </>
            )}

            {post.id === "benefits-of-commercial-cleaning" && (
              <>
                <h2 className="text-3xl md:text-4xl">The ROI of a Spotless Office</h2>
                <p>
                  Most business owners view cleaning as an expense. We view it as an investment in your team's performance. A clean workspace reduces sick days, improves employee morale, and makes a powerful first impression on visiting clients.
                </p>
                <h3 className="text-2xl">Beyond the Visible Clean</h3>
                <p>
                  High-traffic areas like keyboards, door handles, and communal kitchens are breeding grounds for bacteria. Our commercial team uses hospital-grade disinfectants that are safe for office equipment but lethal for germs.
                </p>
                <ul>
                  <li><strong>Productivity Boost:</strong> Employees focus better when their desks aren't covered in dust.</li>
                  <li><strong>Longevity:</strong> Regular carpet and upholstery care saves thousands in replacement costs.</li>
                  <li><strong>Professionalism:</strong> Your office is your brand's physical manifestation.</li>
                </ul>
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
            <h3 className="text-3xl font-black text-dark mb-12 tracking-tight">More from Neat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group">
                  <div className="relative h-64 overflow-hidden rounded-[2rem] mb-6 shadow-md">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-dark group-hover:text-primary transition-colors leading-tight">{p.title}</h4>
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
