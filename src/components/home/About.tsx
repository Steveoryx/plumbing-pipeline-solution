
import React, { useEffect } from 'react';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-plumb-50 rounded-bl-full opacity-50 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-plumb-100 rounded-tr-full opacity-60 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1 flex justify-center reveal opacity-0">
            <div className="relative max-w-md">
              {/* Main image with stylized border */}
              <div className="rounded-2xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <div className="aspect-[3/4] w-full bg-plumb-100 flex items-center justify-center overflow-hidden">
                  {/* Professional plumber stock image */}
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional plumber with tools" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-plumb-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-plumb-400 rounded-full opacity-20 blur-2xl"></div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl py-3 px-6 shadow-lg">
                <div className="text-center">
                  <span className="block text-plumb-700 text-3xl font-bold">10+</span>
                  <span className="text-gray-600 text-sm">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium reveal opacity-0">
                About PlumbQuick
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight reveal opacity-0 delay-100">
                Your Trusted Plumbing Professionals Since 2013
              </h2>
              
              <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
                At PlumbQuick, we're committed to providing top-quality plumbing services with integrity and professionalism. Our team of licensed and experienced plumbers has the expertise to handle any plumbing challenge, from minor repairs to major installations.
              </p>
              
              <div className="space-y-4 pt-4 reveal opacity-0 delay-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-plumb-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Licensed & Insured Professionals</h3>
                    <p className="text-gray-600">All our plumbers are fully licensed, insured, and background-checked for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="text-plumb-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Quality Guaranteed</h3>
                    <p className="text-gray-600">We stand behind our work with satisfaction guarantees and warranty on parts and labor.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-plumb-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Prompt & Reliable Service</h3>
                    <p className="text-gray-600">We respect your time with punctual arrivals and efficient work completion.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="text-plumb-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Fair & Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprises - we provide upfront pricing before any work begins.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 reveal opacity-0 delay-400">
                <a href="#booking" className="btn-primary">Schedule a Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
