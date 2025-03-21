
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-plumb-600 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-heading font-bold text-2xl text-plumb-900">
            Plumb<span className="text-plumb-600">Quick</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-plumb-600 transition-colors hover-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call Button */}
        <a
          href="tel:+1234567890"
          className="hidden md:flex items-center gap-2 bg-plumb-600 text-white font-medium rounded-full py-2 px-5 hover:bg-plumb-700 transition-colors"
        >
          <Phone size={18} className="animate-bounce-subtle" />
          <span>Call Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-plumb-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 transform md:hidden overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-plumb-600 transition-colors py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 bg-plumb-600 text-white font-medium rounded-full py-3 px-5 hover:bg-plumb-700 transition-colors mt-4"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
