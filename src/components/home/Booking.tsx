
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Send } from 'lucide-react';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Leak Repair',
    'Drain Cleaning',
    'Water Heater Service',
    'Bathroom Plumbing',
    'Sewer Line Service',
    'Appliance Installation',
    'Preventive Maintenance',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setDate('');
      setTime('');
      setMessage('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

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
    <section id="booking" className="section bg-gradient-to-b from-plumb-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-plumb-100 rounded-br-full opacity-60 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-plumb-50 rounded-tl-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium mb-4 reveal opacity-0">
            Book a Service
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal opacity-0 delay-100">
            Schedule Your Plumbing Service
          </h2>
          <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
            Fill out the form below to book an appointment with our professional plumbers. We'll get back to you promptly to confirm your service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden reveal opacity-0 delay-300">
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Booking Request Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for choosing PlumbQuick. We'll contact you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Book Another Service
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                        <User size={18} className="text-plumb-600" />
                        <span>Full Name</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                        <Phone size={18} className="text-plumb-600" />
                        <span>Phone Number</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                        <Mail size={18} className="text-plumb-600" />
                        <span>Email Address</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    {/* Service Type */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-gray-700 font-medium flex items-center gap-2">
                        <span>Service Type</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-gray-700 font-medium flex items-center gap-2">
                        <Calendar size={18} className="text-plumb-600" />
                        <span>Preferred Date</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <label htmlFor="time" className="text-gray-700 font-medium flex items-center gap-2">
                        <Clock size={18} className="text-plumb-600" />
                        <span>Preferred Time</span>
                      </label>
                      <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent"
                        required
                      >
                        <option value="" disabled>Select a time</option>
                        <option value="morning">Morning (8AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium flex items-center gap-2">
                      <MessageSquare size={18} className="text-plumb-600" />
                      <span>Additional Details</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-plumb-500 focus:border-transparent h-32"
                      placeholder="Please describe your plumbing issue or any special requirements..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Schedule Service</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-center text-gray-500 text-sm">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
