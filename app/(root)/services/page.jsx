'use client';

import React, { useState } from 'react';
import { Scissors, RefreshCw, Shirt, Hammer, Recycle } from 'lucide-react';

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

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
            description="Expert adjustment of your existing garments for the perfect fit."
            onBookNowClick={toggleForm}
          />
          
          <ServiceCard 
            icon={<Hammer className="h-10 w-10 text-amber-600" />}
            title="Repairs"
            description="Revitalize your favorite pieces with our meticulous repair services."
            onBookNowClick={toggleForm}
          />
          
          <ServiceCard 
            icon={<Shirt className="h-10 w-10 text-amber-600" />}
            title="Custom Clothing"
            description="Bring your vision to life with our bespoke garment creation."
            onBookNowClick={toggleForm}
          />
          
          <ServiceCard 
            icon={<RefreshCw className="h-10 w-10 text-amber-600" />}
            title="Restyling"
            description="Transform outdated pieces into contemporary fashion statements."
            onBookNowClick={toggleForm}
          />
          
          <ServiceCard 
            icon={<Recycle className="h-10 w-10 text-amber-600" />}
            title="Recycling/Upcycling"
            description="Embrace sustainable fashion with our creative repurposing services."
            onBookNowClick={toggleForm}
          />
        </div>

        {/* Contact Form */}
        {showForm && <ContactForm onClose={toggleForm} />}

      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, onBookNowClick }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-amber-50 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-6">{description}</p>
      <button 
        onClick={onBookNowClick}
        className="mt-auto bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

// Contact Form Component
const ContactForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 hover:text-gray-800">&times;</button>
        <h2 className="text-xl font-semibold text-neutral-800 mb-4">Book a Service</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="fb5c4463-6e7d-4475-b2aa-dbc0e95ec70a" />
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Service Required</label>
            <select name="service" required className="mt-1 p-2 w-full border border-gray-300 rounded">
              <option value="Alterations">Alterations</option>
              <option value="Repairs">Repairs</option>
              <option value="Custom Clothing">Custom Clothing</option>
              <option value="Restyling">Restyling</option>
              <option value="Recycling/Upcycling">Recycling/Upcycling</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              required 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              rows="3"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesPage;
