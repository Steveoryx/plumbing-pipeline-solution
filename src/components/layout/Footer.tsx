
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-plumb-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Plumb<span className="text-plumb-400">Quick</span>
              </span>
            </div>
            <p className="text-gray-400 mt-4">
              Professional plumbing services with guaranteed satisfaction. Available 24/7 for all your plumbing needs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">Testimonials</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">Book a Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-plumb-400 transition-colors hover-link inline-block">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 text-plumb-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-plumb-400 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 text-plumb-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@plumbquick.com" className="text-gray-400 hover:text-plumb-400 transition-colors">
                    info@plumbquick.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 text-plumb-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">
                    123 Plumbing Street<br />
                    Watertown, NY 10001
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 text-plumb-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Working Hours</p>
                  <p className="text-gray-400">
                    Mon-Fri: 8AM - 8PM<br />
                    Sat-Sun: 9AM - 5PM<br />
                    <span className="text-plumb-400 font-medium">24/7 Emergency Service</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for plumbing tips and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-plumb-500"
                required
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-plumb-600 hover:bg-plumb-700 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} PlumbQuick Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
