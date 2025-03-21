
import React, { useEffect } from 'react';
import { Droplet, Wrench, Flame, ShowerHead, Thermometer, WashingMachine, Percent, Gauge, ArrowRight } from 'lucide-react';

const ServicesCard = ({ icon: Icon, title, description, index }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl reveal opacity-0 delay-${index * 100}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="rounded-full bg-gradient-to-br from-plumb-500 to-plumb-700 w-12 h-12 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <a href="#booking" className="inline-flex items-center text-plumb-600 font-medium hover:text-plumb-800 transition-colors group-hover:underline">
          Learn More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: Droplet,
      title: "Leak Repair",
      description: "Fast detection and repair of leaks in pipes, faucets, and fixtures to prevent water damage and waste."
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional removal of clogs and buildup in drains using advanced tools and techniques."
    },
    {
      icon: Flame,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of water heaters to ensure consistent hot water supply."
    },
    {
      icon: ShowerHead,
      title: "Bathroom Plumbing",
      description: "Expert installation and repair of toilets, sinks, showers, and bathtubs for optimal function."
    },
    {
      icon: Thermometer,
      title: "Sewer Line Services",
      description: "Inspection, cleaning, and repair of sewer lines to prevent backups and ensure proper drainage."
    },
    {
      icon: WashingMachine,
      title: "Appliance Installation",
      description: "Professional installation of dishwashers, washing machines, and other water-using appliances."
    },
    {
      icon: Percent,
      title: "Preventive Maintenance",
      description: "Regular inspection and maintenance to prevent costly plumbing emergencies and extend system life."
    },
    {
      icon: Gauge,
      title: "Water Pressure Issues",
      description: "Diagnosis and resolution of low or high water pressure problems for optimal water flow."
    }
  ];

  return (
    <section id="services" className="section relative bg-gradient-to-b from-plumb-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-plumb-100 rounded-br-full opacity-60 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-plumb-50 rounded-tl-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium mb-4 reveal opacity-0">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal opacity-0 delay-100">
            Professional Plumbing Services
          </h2>
          <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
            From emergency repairs to routine maintenance, our licensed plumbers provide comprehensive solutions for all your plumbing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServicesCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal opacity-0 delay-800">
          <a 
            href="#booking" 
            className="btn-primary inline-flex items-center"
          >
            <span>Schedule a Service</span>
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
