'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+918657179075";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="bg-neutral-800 text-neutral-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="mb-4 text-neutral-300">
              We create handmade clothing with attention to detail and sustainable practices. Our skilled tailors bring your visions to life with quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-neutral-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/" className="text-neutral-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/" className="text-neutral-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#alterations" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Alterations
                </Link>
              </li>
              <li>
                <Link href="/services#repairs" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Repairs
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Custom Clothing
                </Link>
              </li>
              <li>
                <Link href="/services#restyling" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Restyling
                </Link>
              </li>
              <li>
                <Link href="/services#upcycling" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  Recycling/Upcycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-amber-400" />
                <span>10, Ambika Nagar, Devicha Pada, Kalyan Dombivali, Dombivli, Maharashtra 421202</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-amber-400" />
                <button 
                  onClick={handleCallClick} 
                  className="text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  +91 86571 79075
                </button>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-amber-400" />
                <a href="mailto:shefalideshpande@ygamil.com" className="text-neutral-300 hover:text-amber-400 transition-colors">
                  shefalideshpande@ygamil.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-neutral-900 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400 mb-2 md:mb-0">
            © {currentYear} Your Tailoring Brand. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-neutral-400">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;