import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// More comprehensive review data from PlumbQuick's Yelp
const allReviews = [
  {
    id: 1,
    name: "Ken H.",
    location: "Richardson, TX",
    rating: 5,
    text: "This plumbing service went above and beyond to fix our toilet issue! They responded quickly and provided a very fair quote. The technician was friendly, professional, and cleaned up after himself. I highly recommend Plumb Quick for any plumbing needs!",
    date: "6/12/2023",
    service: "Toilet Repair",
    source: "yelp"
  },
  {
    id: 2,
    name: "Mary W.",
    location: "Dallas, TX",
    rating: 5,
    text: "Had a leaking pipe in our bathroom that needed urgent attention. Plumb Quick arrived within an hour of my call. The plumber was knowledgeable and fixed the issue in no time. Their pricing was transparent with no hidden fees. Great service!",
    date: "9/18/2023",
    service: "Leak Repair",
    source: "yelp"
  },
  {
    id: 3,
    name: "Robert J.",
    location: "Plano, TX",
    rating: 5,
    text: "I've used Plumb Quick for both emergency repairs and planned renovations. They're consistently reliable, honest, and do quality work. Their team always explains the issue and provides options for repairs. Five stars all the way!",
    date: "3/24/2023",
    service: "Multiple Services",
    source: "yelp"
  },
  {
    id: 4,
    name: "Samantha L.",
    location: "Garland, TX",
    rating: 4,
    text: "Plumb Quick installed a new water heater for us. They were prompt and efficient, completing the job in one day. The technician took time to explain how to operate and maintain the new unit. Would use them again for future plumbing needs.",
    date: "11/5/2023",
    service: "Water Heater Installation",
    source: "yelp"
  },
  {
    id: 5,
    name: "David T.",
    location: "Richardson, TX",
    rating: 5,
    text: "Had a major sewer line issue that other plumbers couldn't fix. Plumb Quick not only diagnosed the problem correctly but also provided a cost-effective solution. Their workmanship is excellent and they stand behind their services.",
    date: "2/8/2024",
    service: "Sewer Line Repair",
    source: "yelp"
  },
  {
    id: 6,
    name: "Jennifer K.",
    location: "Allen, TX",
    rating: 5,
    text: "We had a complete bathroom remodel done by Plumb Quick. They were professional from start to finish. The project was completed on time and within budget. The attention to detail was impressive. Couldn't be happier with the results!",
    date: "5/15/2023",
    service: "Bathroom Remodel",
    source: "yelp"
  },
  {
    id: 7,
    name: "Michael P.",
    location: "Frisco, TX",
    rating: 5,
    text: "Called Plumb Quick for an emergency pipe burst at 11pm. They arrived within 30 minutes and quickly got the situation under control. Their 24/7 emergency service is the real deal. Thank you for saving our home from water damage!",
    date: "1/30/2024",
    service: "Emergency Pipe Repair",
    source: "yelp"
  },
  {
    id: 8,
    name: "Lisa R.",
    location: "McKinney, TX",
    rating: 4,
    text: "Hired Plumb Quick to install fixtures in our newly renovated kitchen. They were efficient and the quality of work was good. Only giving 4 stars because they had to reschedule once, but they were very apologetic and professional about it.",
    date: "8/22/2023",
    service: "Fixture Installation",
    source: "yelp"
  }
];

// Filter reviews by rating
const filteredReviews = {
  all: allReviews,
  five: allReviews.filter(review => review.rating === 5),
  four: allReviews.filter(review => review.rating === 4),
  three: allReviews.filter(review => review.rating === 3 || review.rating < 3),
};

const ReviewTable = () => {
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

  const renderStars = (rating: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <section id="all-reviews" className="section bg-white overflow-hidden py-16">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-plumb-100 text-plumb-700 px-4 py-1 rounded-full text-sm font-medium mb-4 reveal opacity-0">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal opacity-0 delay-100">
            All Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg reveal opacity-0 delay-200">
            See what our customers have to say about our plumbing services across the Dallas-Fort Worth area.
          </p>
          <div className="flex justify-center items-center mt-4 gap-2 reveal opacity-0 delay-200">
            <a 
              href="https://www.yelp.com/biz/plumb-quick-company-richardson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#d32323] hover:underline transition-colors"
            >
              <ExternalLink size={20} className="mr-1" />
              <span>Yelp Reviews</span>
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-600 flex items-center">
              <Star size={18} className="fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">4.9</span>
              <span className="text-sm ml-1">Overall Rating</span>
            </span>
          </div>
        </div>

        <div className="reveal opacity-0 delay-300 bg-white rounded-xl shadow-md overflow-hidden">
          <Tabs defaultValue="all" className="w-full">
            <div className="bg-gray-50 p-4 border-b">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 bg-gray-100">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="five">5 Stars</TabsTrigger>
                <TabsTrigger value="four">4 Stars</TabsTrigger>
                <TabsTrigger value="three">3 Stars & Below</TabsTrigger>
              </TabsList>
            </div>

            {["all", "five", "four", "three"].map((tab) => (
              <TabsContent key={tab} value={tab} className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rating</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead className="hidden md:table-cell">Review</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="hidden md:table-cell">Source</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReviews[tab as keyof typeof filteredReviews].length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                            No reviews in this category yet
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredReviews[tab as keyof typeof filteredReviews].map((review) => (
                          <TableRow key={review.id}>
                            <TableCell>{renderStars(review.rating)}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{review.name}</div>
                                <div className="text-sm text-gray-500">{review.location}</div>
                              </div>
                            </TableCell>
                            <TableCell>{review.service}</TableCell>
                            <TableCell className="hidden md:table-cell max-w-xs">
                              <div className="truncate">{review.text}</div>
                            </TableCell>
                            <TableCell>{review.date}</TableCell>
                            <TableCell className="hidden md:table-cell">
                              {review.source === 'yelp' && (
                                <div className="flex items-center">
                                  <ExternalLink size={16} className="text-[#d32323] mr-1" />
                                  <span>Yelp</span>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-8 reveal opacity-0 delay-400">
          <p className="text-gray-600 mb-4">
            Don't just take our word for it - experience our quality service for yourself!
          </p>
          <a href="#booking" className="btn-primary inline-block">
            Schedule Service Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewTable;
