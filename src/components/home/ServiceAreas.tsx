
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Map as MapIcon } from 'lucide-react';
import { companyData } from '@/data/companyData';

const ServiceAreas = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
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

    // Initialize map if the element exists
    if (mapRef.current) {
      // Initialize Apple Maps
      const initializeMap = async () => {
        if (window.apple_maps_api_initialized) {
          createMap();
        } else {
          // Wait for the script to load
          window.initializeAppleMaps = createMap;
        }
      };

      const createMap = () => {
        try {
          // Create a MapKit JS map centered on Dallas-Fort Worth
          const map = new window.mapkit.Map(mapRef.current, {
            center: new window.mapkit.Coordinate(32.7767, -96.7970), // Dallas coordinates
            zoom: 10,
            showsMapTypeControl: true,
            mapType: window.mapkit.Map.MapTypes.Standard,
          });

          // Add markers for each service area
          const serviceAreaCoordinates = [
            { name: "Richardson", lat: 32.9483, lng: -96.7299 },
            { name: "Plano", lat: 33.0198, lng: -96.6989 },
            { name: "Dallas", lat: 32.7767, lng: -96.7970 },
            { name: "Garland", lat: 32.9126, lng: -96.6389 },
            { name: "Allen", lat: 33.1031, lng: -96.6739 },
            { name: "McKinney", lat: 33.1972, lng: -96.6397 },
            { name: "Frisco", lat: 33.1507, lng: -96.8236 },
            { name: "Carrollton", lat: 32.9756, lng: -96.8897 },
            { name: "Addison", lat: 32.9612, lng: -96.8295 },
            { name: "Irving", lat: 32.8140, lng: -96.9489 }
          ];

          serviceAreaCoordinates.forEach(area => {
            const coordinate = new window.mapkit.Coordinate(area.lat, area.lng);
            const marker = new window.mapkit.MarkerAnnotation(coordinate, {
              title: area.name,
              subtitle: "Service Area",
              color: "#4A90E2",
              glyphText: "📍"
            });
            map.addAnnotation(marker);
          });

          // Add a marker for the office location
          const officeMarker = new window.mapkit.MarkerAnnotation(
            new window.mapkit.Coordinate(32.9483, -96.7299), // Richardson (assuming office location)
            {
              title: "PlumbQuick Main Office",
              subtitle: companyData.phone.main,
              color: "#D81159",
              glyphImage: { 1: "https://cdn-icons-png.flaticon.com/512/1998/1998108.png" }
            }
          );
          map.addAnnotation(officeMarker);

        } catch (error) {
          console.error("Error initializing Apple Maps:", error);
          // Fallback to static map container
          if (mapRef.current) {
            mapRef.current.innerHTML = `
              <div class="flex flex-col items-center justify-center h-full bg-plumb-50 rounded-lg p-6 text-center">
                <MapIcon size={48} className="text-plumb-600 mb-4" />
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Service Area Map</h3>
                <p class="text-gray-600">We proudly serve the entire Dallas-Fort Worth metroplex.</p>
              </div>
            `;
          }
        }
      };

      // Load Apple Maps API
      if (!document.getElementById('apple-maps-api')) {
        window.apple_maps_api_initialized = false;
        const script = document.createElement('script');
        script.id = 'apple-maps-api';
        script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
        script.async = true;
        script.onload = () => {
          window.mapkit.init({
            authorizationCallback: (done) => {
              // In a real app, you would fetch a token from your server
              // For demo purposes, we're using a placeholder
              done('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXBraXRfand0X3Rva2VuIiwiaWF0IjoxNTE2MjM5MDIyfQ.Su_H5FN4MjmNxBUF_UPb-iAcA_3fC6vAdSJehgfYY5s');
            }
          });
          window.apple_maps_api_initialized = true;
          
          if (window.initializeAppleMaps) {
            window.initializeAppleMaps();
          }
        };
        document.head.appendChild(script);
      }

      initializeMap();
    }

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
          
          {/* Interactive Map */}
          <div className="reveal opacity-0 delay-400">
            <div className="rounded-xl overflow-hidden shadow-md bg-white p-4">
              <div ref={mapRef} className="aspect-[4/3] w-full bg-gray-100 rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-0 bg-plumb-600/5 z-0"></div>
                <div className="relative z-10 text-center p-6">
                  <MapIcon size={48} className="text-plumb-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map</h3>
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
