
import React, { useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { companyData } from '@/data/companyData';

const ServiceAreas = () => {
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
    <section id="service-areas" className="section bg-gray-50 py-16">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium mb-4 reveal opacity-0">
            Areas We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal opacity-0 delay-100">
            Serving the Greater Dallas-Fort Worth Area
          </h2>
          <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
            PlumbQuick provides expert plumbing services throughout these communities:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Service Areas List */}
          <div className="reveal opacity-0 delay-300">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {companyData.serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin size={16} className="text-plumb-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              {/* Contact info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone size={18} className="text-plumb-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">{companyData.phone.main}</p>
                      <p className="text-gray-500 text-sm">Main Office</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-plumb-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">{companyData.phone.emergency}</p>
                      <p className="text-gray-500 text-sm">24/7 Emergency Line</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Image */}
          <div className="reveal opacity-0 delay-400">
            <div className="rounded-xl overflow-hidden shadow-md bg-white p-4">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-0 bg-plumb-600/5 z-0"></div>
                <div className="relative z-10 text-center p-6">
                  <MapPin size={48} className="text-plumb-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-gray-600">
                    We proudly serve the entire Dallas-Fort Worth metroplex and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
