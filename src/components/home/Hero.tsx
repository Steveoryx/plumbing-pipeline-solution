
import React, { useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract water shapes */}
        <div className="absolute right-0 top-[20%] w-1/3 h-80 bg-plumb-100 rounded-l-full opacity-60 blur-3xl"></div>
        <div className="absolute left-0 bottom-[10%] w-1/2 h-96 bg-plumb-50 rounded-r-full opacity-50 blur-3xl"></div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-plumb-50 opacity-90"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium reveal opacity-0">
                24/7 Emergency Plumbing Services
              </span>
              
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight reveal opacity-0 delay-100">
                Fast & Reliable <span className="text-plumb-600">Plumbing Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 reveal opacity-0 delay-200">
                Professional plumbers ready to solve any plumbing issue with guaranteed satisfaction. Available 24/7 for all your emergency needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 reveal opacity-0 delay-300">
                <a 
                  href="#booking" 
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span>Book a Service</span>
                  <ArrowRight size={18} />
                </a>
                
                <a 
                  href="tel:+19722128699" 
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 reveal opacity-0 delay-400">
                <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-plumb-600 font-bold text-2xl">10+</span>
                  <span className="text-gray-600 text-sm">Years Experience</span>
                </div>
                
                <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-plumb-600 font-bold text-2xl">24/7</span>
                  <span className="text-gray-600 text-sm">Emergency Service</span>
                </div>
                
                <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm sm:col-span-1 col-span-2">
                  <span className="text-plumb-600 font-bold text-2xl">100%</span>
                  <span className="text-gray-600 text-sm">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:order-2 order-1 flex justify-center lg:justify-end reveal opacity-0">
            <div className="relative">
              {/* Main image container with blue gradient border */}
              <div className="rounded-2xl overflow-hidden border-8 border-gradient-to-r from-plumb-300 to-plumb-600 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3] w-full max-w-lg bg-plumb-100 flex items-center justify-center overflow-hidden">
                  {/* Professional plumber stock image */}
                  <img 
                    src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                    alt="Professional plumber fixing pipes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 h-20 w-20 bg-plumb-600 rounded-full opacity-90 blur-lg animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-plumb-400 rounded-full opacity-70 blur-md animate-pulse-slow"></div>
              
              {/* Feature badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full py-2 px-4 shadow-lg transform rotate-3 flex items-center">
                <span className="text-plumb-700 font-semibold mr-1">⭐ Licensed</span>
                <span className="text-gray-600">&</span>
                <span className="text-plumb-700 font-semibold ml-1">Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
