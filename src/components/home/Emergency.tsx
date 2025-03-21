
import React, { useEffect } from 'react';
import { Phone, Clock, AlertTriangle } from 'lucide-react';

const Emergency = () => {
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
    <section className="py-12 relative overflow-hidden">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden reveal opacity-0">
          {/* Background with overlay */}
          <div className="absolute inset-0 water-gradient z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 py-12 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-yellow-300" size={24} />
                  <span className="text-yellow-100 font-medium">24/7 Emergency Service</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Plumbing Emergency? We're Available Day or Night!
                </h2>
                
                <p className="text-white/90 text-lg mb-6">
                  Don't let plumbing disasters wait. Our emergency response team is on standby 24/7 to handle urgent issues like burst pipes, major leaks, or sewer backups.
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <Clock className="mx-auto mb-2" size={24} />
                    <span className="text-sm">Fast Response</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <AlertTriangle className="mx-auto mb-2" size={24} />
                    <span className="text-sm">Fully Equipped</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                    <Phone className="mx-auto mb-2" size={24} />
                    <span className="text-sm">24/7 Service</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <a 
                  href="tel:+1234567890" 
                  className="btn-emergency text-lg md:text-xl w-full whitespace-nowrap animate-pulse-slow"
                >
                  <Phone className="animate-bounce-subtle" size={24} />
                  <span>(123) 456-7890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
