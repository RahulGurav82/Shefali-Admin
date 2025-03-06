'use client';

import React from 'react';
import { Scissors, RefreshCw, Shirt, Hammer, Recycle } from 'lucide-react';

const ServicesPage = () => {
  const phoneNumber = "+918657179075";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Our Tailoring Services</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Handcrafted with care and precision, our services bring your clothing visions to life
            with traditional craftsmanship and modern techniques.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Scissors className="h-10 w-10 text-amber-600" />}
            title="Alterations"
            description="Expert adjustment of your existing garments for the perfect fit. We specialize in hemming, taking in seams, shortening sleeves, and more."
            onCallClick={handleCallClick}
          />
          
          <ServiceCard 
            icon={<Hammer className="h-10 w-10 text-amber-600" />}
            title="Repairs"
            description="Revitalize your favorite pieces with our meticulous repair services. From replacing zippers and buttons to mending tears and reinforcing seams."
            onCallClick={handleCallClick}
          />
          
          <ServiceCard 
            icon={<Shirt className="h-10 w-10 text-amber-600" />}
            title="Custom Clothing"
            description="Bring your vision to life with our bespoke garment creation. Tailored precisely to your measurements and designed to reflect your unique style."
            onCallClick={handleCallClick}
          />
          
          <ServiceCard 
            icon={<RefreshCw className="h-10 w-10 text-amber-600" />}
            title="Restyling"
            description="Transform outdated pieces into contemporary fashion statements. We reimagine and recreate garments to give them renewed purpose and style."
            onCallClick={handleCallClick}
          />
          
          <ServiceCard 
            icon={<Recycle className="h-10 w-10 text-amber-600" />}
            title="Recycling/Upcycling"
            description="Embrace sustainable fashion with our creative repurposing services. Convert unused garments or fabrics into beautiful, functional new items."
            onCallClick={handleCallClick}
          />
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-100 p-4 rounded-full mb-4">
              <Scissors className="h-10 w-10 text-amber-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Custom Consultation</h3>
            <p className="text-neutral-600">
              Schedule a personalized consultation to discuss your specific clothing needs and how our handmade expertise can serve you.
            </p>
            <button 
              onClick={handleCallClick}
              className="mt-6 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="mt-16 bg-amber-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Our Craftsmanship Promise</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto mb-6">
            Every stitch we make reflects our commitment to quality and sustainability. We use ethically sourced materials
            and traditional techniques to create garments that last, reducing fashion waste and honoring the art of tailoring.
          </p>
          <p className="text-lg font-medium text-amber-800">
            To book an appointment, call us at: {" "}
            <a href={`tel:${phoneNumber}`} className="underline hover:text-amber-900">
              +91 86571 79075
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for service cards to maintain consistent styling
const ServiceCard = ({ icon, title, description, onCallClick }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-amber-50 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-6">{description}</p>
      <button 
        onClick={onCallClick}
        className="mt-auto bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServicesPage;