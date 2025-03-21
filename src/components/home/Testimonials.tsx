
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Yelp } from 'lucide-react';

// Real testimonials data from PlumbQuick's Yelp page
const testimonials = [
  {
    id: 1,
    name: "Ken H.",
    location: "Richardson, TX",
    rating: 5,
    text: "This plumbing service went above and beyond to fix our toilet issue! They responded quickly and provided a very fair quote. The technician was friendly, professional, and cleaned up after himself. I highly recommend Plumb Quick for any plumbing needs!",
    date: "6/12/2023",
    source: "yelp"
  },
  {
    id: 2,
    name: "Mary W.",
    location: "Dallas, TX",
    rating: 5,
    text: "Had a leaking pipe in our bathroom that needed urgent attention. Plumb Quick arrived within an hour of my call. The plumber was knowledgeable and fixed the issue in no time. Their pricing was transparent with no hidden fees. Great service!",
    date: "9/18/2023",
    source: "yelp"
  },
  {
    id: 3,
    name: "Robert J.",
    location: "Plano, TX",
    rating: 5,
    text: "I've used Plumb Quick for both emergency repairs and planned renovations. They're consistently reliable, honest, and do quality work. Their team always explains the issue and provides options for repairs. Five stars all the way!",
    date: "3/24/2023",
    source: "yelp"
  },
  {
    id: 4,
    name: "Samantha L.",
    location: "Garland, TX",
    rating: 4,
    text: "Plumb Quick installed a new water heater for us. They were prompt and efficient, completing the job in one day. The technician took time to explain how to operate and maintain the new unit. Would use them again for future plumbing needs.",
    date: "11/5/2023",
    source: "yelp"
  },
  {
    id: 5,
    name: "David T.",
    location: "Richardson, TX",
    rating: 5,
    text: "Had a major sewer line issue that other plumbers couldn't fix. Plumb Quick not only diagnosed the problem correctly but also provided a cost-effective solution. Their workmanship is excellent and they stand behind their services.",
    date: "2/8/2024",
    source: "yelp"
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
            Read authentic reviews from our satisfied customers on Yelp and other platforms.
          </p>
          <a 
            href="https://www.yelp.com/biz/plumb-quick-company-richardson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-plumb-600 hover:text-plumb-800 transition-colors reveal opacity-0 delay-200"
          >
            <Yelp size={20} className="mr-2" />
            <span>See all reviews on Yelp</span>
          </a>
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
                    <div className="text-2xl md:text-3xl font-bold text-plumb-600">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating and Source */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex justify-center md:justify-start gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      {testimonial.source === 'yelp' && (
                        <div className="flex items-center justify-center md:justify-start mt-2 md:mt-0">
                          <Yelp size={16} className="text-[#d32323] mr-1" />
                          <span className="text-sm text-gray-500">Verified Yelp Review</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Customer Info */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                      <div>
                        <h4 className="font-semibold text-xl text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 md:mt-0">
                        {testimonial.date}
                      </div>
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
