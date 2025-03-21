
// Data scraped from PlumbQuick's official website (plumbquickinc.com)

export const companyData = {
  // Contact information
  phone: {
    main: "(972) 212-8699",
    emergency: "(972) 212-8699",
    tollfree: "(800) 555-PLUMB" // This is a placeholder as it wasn't found on the site
  },
  
  email: "service@plumbquickinc.com",
  
  // Service areas in Dallas-Fort Worth metroplex
  serviceAreas: [
    "Richardson",
    "Plano",
    "Dallas",
    "Garland",
    "Allen",
    "McKinney",
    "Frisco",
    "Carrollton",
    "Addison",
    "Irving",
    "Lewisville",
    "Flower Mound",
    "Mesquite",
    "Arlington",
    "Fort Worth"
  ],
  
  // Business hours
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    weekends: "9:00 AM - 5:00 PM",
    emergency: "24/7 Emergency Service Available"
  },
  
  // Services offered
  services: [
    {
      id: "leak-repair",
      name: "Leak Detection & Repair",
      description: "State-of-the-art equipment to detect and repair leaks with minimal disruption."
    },
    {
      id: "drain-cleaning",
      name: "Drain Cleaning",
      description: "Professional solutions for clogged or slow drains, from sinks to main sewer lines."
    },
    {
      id: "water-heaters",
      name: "Water Heater Services",
      description: "Installation, repair, and maintenance for all types of water heaters."
    },
    {
      id: "emergency",
      name: "Emergency Plumbing",
      description: "Fast response to plumbing emergencies to prevent water damage and restore service."
    },
    {
      id: "bathroom-kitchen",
      name: "Bathroom & Kitchen Plumbing",
      description: "Full-service plumbing for bathroom and kitchen remodels and repairs."
    },
    {
      id: "sewer-services",
      name: "Sewer Line Services",
      description: "Inspection, cleaning, repair, and replacement of sewer lines."
    }
  ]
};
