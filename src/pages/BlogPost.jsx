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
            
            <h2 className="text-3xl md:text-4xl">The Foundation of a Clean Home</h2>
            <p>
              In today's fast-paced world, the state of our living environment often takes a backseat. However, study after study shows that a clean, organized space is directly linked to mental clarity and reduced stress levels. At Neat Maintenance, we've seen firsthand how a professional deep clean can transform not just a house, but the mood of everyone inside it.
            </p>
            
            {post.contentImages && post.contentImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                {post.contentImages.map((img, idx) => (
                  <div key={idx} className="rounded-[2rem] overflow-hidden h-80 shadow-lg">
                    <img src={img} alt={`Content ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            <h2 className="text-3xl md:text-4xl">Why Professional Expertise Matters</h2>
            <p>
              Many of our clients ask, "What makes a professional clean different from my Saturday morning routine?" The answer lies in the details. It's the microscopic dust in the air ducts, the hidden buildup behind the appliances, and the specific pH-balanced solutions we use for different surfaces. 
            </p>
            <ul>
              <li><strong>Meticulous Attention:</strong> We follow a 50-point checklist for every room.</li>
              <li><strong>Advanced Technology:</strong> Using HEPA-filter vacuums that capture 99.9% of allergens.</li>
              <li><strong>Sustainable Practice:</strong> Our proprietary green solutions are safe for your family and the planet.</li>
            </ul>

            <blockquote className="my-16">
              "We don't just clean for the eyes; we clean for the lungs. A truly clean space is one where you can breathe easy, knowing every surface has been sanitized with care."
            </blockquote>

            <h2 className="text-3xl md:text-4xl">Creating a Sustainable Routine</h2>
            <p>
              Once your space is professionally cleaned, maintaining it becomes much easier. We recommend a simple '15-minute daily reset' to keep the clutter at bay between our visits. Focusing on high-traffic areas like the kitchen counters and the entryway can make a world of difference in how your home feels day-to-day.
            </p>

            <div className="my-16 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 text-center">
              <h3 className="text-2xl font-black mb-4">Interested in a deep clean?</h3>
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
