
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    text: "PlumbQuick arrived within an hour of my call when I had a major leak. Their technician was professional, courteous, and fixed the issue quickly. I'm incredibly grateful for their prompt service!",
    image: null // placeholder for customer image
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I've used PlumbQuick for both emergency repairs and bathroom remodeling. Their team is always knowledgeable and provides options to fit my budget. Highly recommend their services!",
    image: null
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Chicago, IL",
    rating: 4,
    text: "My water heater stopped working on a Sunday evening, and PlumbQuick was there first thing Monday morning. They installed a new, more efficient unit and even helped me apply for a rebate. Great service!",
    image: null
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Austin, TX",
    rating: 5,
    text: "After struggling with low water pressure for months, PlumbQuick diagnosed and fixed the issue in just one visit. The difference is amazing! Fair pricing and excellent work.",
    image: null
  },
  {
    id: 5,
    name: "Jessica Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "I've been using PlumbQuick for all my rental properties for years. They're reliable, honest, and do quality work every time. Their preventive maintenance program has saved me thousands in potential repairs.",
    image: null
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-plumb-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium mb-4 reveal opacity-0">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal opacity-0 delay-100">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
            Don't just take our word for it. See what our satisfied customers have to say about our plumbing services.
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 opacity-10 z-0">
            <Quote size={120} />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg z-10 reveal opacity-0 delay-300">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
                >
                  {/* Avatar */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-plumb-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-2xl md:text-3xl font-bold text-plumb-600">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Customer Info */}
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-plumb-100 transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-plumb-100 transition-colors z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2 reveal opacity-0 delay-400">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-plumb-600 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
