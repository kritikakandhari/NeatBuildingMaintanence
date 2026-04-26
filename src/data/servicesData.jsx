import React from 'react';
import { Home as HomeIcon, Building2, Sparkles, Construction, Leaf, PlusCircle } from 'lucide-react';

export const serviceCategories = [
  {
    id: "residential",
    title: "Residential Cleaning",
    icon: <HomeIcon className="w-8 h-8 text-primary" />,
    color: "bg-blue-50 border-blue-100",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Regular house cleaning",
      "Deep cleaning",
      "Move-in / Move-out cleaning",
      "Apartment / condo cleaning",
      "Post-renovation cleaning"
    ],
    description: "Our residential cleaning services are designed to give you back your time. We provide thorough, meticulous cleaning for homes, apartments, and condos across Canada. From routine dusting and vacuuming to deep cleaning of kitchens and bathrooms, our professional team ensures every corner of your home sparkles.",
    benefits: [
      "Vetted, experienced professionals",
      "Customized cleaning plans",
      "100% satisfaction guarantee",
      "Flexible scheduling"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    icon: <Building2 className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50 border-indigo-100",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Office cleaning",
      "Retail store cleaning",
      "Restaurant cleaning",
      "Medical / clinic cleaning",
      "School / daycare cleaning",
      "After-hours cleaning"
    ],
    description: "A clean commercial space promotes employee productivity and leaves a lasting impression on clients. We offer comprehensive commercial cleaning solutions tailored to your business schedule, including after-hours service to ensure zero disruption to your daily operations.",
    benefits: [
      "Dedicated account management",
      "Fully insured and bonded staff",
      "Strict quality control audits",
      "Customized checklists for your facility"
    ]
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 border-purple-100",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Carpet & steam cleaning",
      "Window cleaning (interior/exterior)",
      "Pressure washing (driveways/decks)",
      "Upholstery / sofa cleaning",
      "Tile & grout cleaning"
    ],
    description: "Some jobs require specialized equipment and expertise. Our specialized cleaning services cover the tough tasks like deep carpet extraction, high-pressure washing, and detailed tile and grout restoration, bringing your surfaces back to life.",
    benefits: [
      "Industrial-grade equipment",
      "Expert stain removal techniques",
      "Extends the lifespan of your assets",
      "Safe for delicate surfaces"
    ]
  },
  {
    id: "post-construction",
    title: "Post-Construction",
    icon: <Construction className="w-8 h-8 text-accent" />,
    color: "bg-amber-50 border-amber-100",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Dust & debris removal",
      "Final site cleaning",
      "Paint / stain removal"
    ],
    description: "Construction leaves behind a mess that regular cleaning just can't handle. Our post-construction cleaning crew removes all hazardous dust, stray paint, and debris, preparing your new or renovated space for immediate move-in.",
    benefits: [
      "Thorough HEPA vacuuming",
      "Safe disposal of construction debris",
      "Detailed fine-dust removal",
      "Ready-to-occupy finish"
    ]
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly Cleaning",
    icon: <Leaf className="w-8 h-8 text-secondary" />,
    color: "bg-emerald-50 border-emerald-100",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Green cleaning services",
      "Non-toxic / chemical-free cleaning",
      "Pet & child-safe cleaning"
    ],
    description: "Protect your family, your pets, and the planet. Our eco-friendly cleaning service uses only certified green, non-toxic, and biodegradable products that clean effectively without leaving harmful chemical residues behind.",
    benefits: [
      "100% Non-toxic products",
      "Safe for asthmatics and allergy sufferers",
      "Cruelty-free and biodegradable",
      "Improves indoor air quality"
    ]
  },
  {
    id: "add-ons",
    title: "Add-On Services",
    icon: <PlusCircle className="w-8 h-8 text-pink-500" />,
    color: "bg-pink-50 border-pink-100",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Fridge cleaning",
      "Oven cleaning",
      "Cabinet cleaning",
      "Laundry & folding",
      "Dishwashing",
      "Balcony cleaning"
    ],
    description: "Need a little extra help around the house? Customize your regular cleaning package with our flexible add-on services. From tackling a messy fridge to taking care of the laundry, we handle the chores you hate.",
    benefits: [
      "Highly customizable",
      "Affordable flat rates",
      "Can be added to any package",
      "Saves you hours of extra work"
    ]
  }
];
