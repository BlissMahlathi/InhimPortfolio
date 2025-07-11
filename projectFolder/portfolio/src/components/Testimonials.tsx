import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Campus Eats Online Store",
      role: "Business",
      company: "campus-eats-five.vercel.app",
      image: "",
      content:
        "Our online food ordering platform for students is now seamless and fast. Orders are up and students love the convenience!",
      rating: 5,
      project: "Campus Eats Online Store",
    },
    {
      name: "HotelY Service Platform",
      role: "BnB & Hotel",
      company: "bnb-hotely.onrender.com",
      image: "",
      content:
        "Managing guests and services is now effortless. The platform is reliable and easy for our staff and guests.",
      rating: 5,
      project: "HotelY Service Platform",
    },
    {
      name: "Retema Student Accommodation",
      role: "Accommodation",
      company: "retema.netlify.app",
      image: "",
      content:
        "Listing and finding student accommodation is so much easier. Our occupancy rates have improved!",
      rating: 5,
      project: "Retema Student Accommodation",
    },
    {
      name: "Ribs Delivery WebApp",
      role: "Delivery",
      company: "danalphluja.vercel.app",
      image: "",
      content:
        "Our food delivery business runs smoother and customers get their orders faster. Highly recommended!",
      rating: 5,
      project: "Ribs Delivery WebApp",
    },
    {
      name: "Student Social Network",
      role: "Social Platform",
      company: "univensocials.vercel.app",
      image: "",
      content:
        "Students are more connected than ever. Engagement and activity on campus have increased thanks to this platform.",
      rating: 5,
      project: "Student Social Network",
    },
    {
      name: "Passion Mogale Borehole Drilling",
      role: "Business",
      company: "passionmogale.netlify.app",
      image: "",
      content:
        "Our business is now visible online and we get more client inquiries every week. Great job!",
      rating: 5,
      project: "Passion Mogale Borehole Drilling",
    },
    {
      name: "Health Care Service Portal",
      role: "Healthcare",
      company: "test-tau-green-64.vercel.app",
      image: "",
      content:
        "Managing health services and appointments is now simple and efficient. Patients and staff both benefit.",
      rating: 5,
      project: "Health Care Service Portal",
    },
    {
      name: "OGT Residence WebApp",
      role: "Accommodation",
      company: "ogtresidence.netlify.app",
      image: "",
      content:
        "Our residence management is now digital and organized. Students and staff love the improvements.",
      rating: 5,
      project: "OGT Residence WebApp",
    },
    {
      name: "Online Mini Store",
      role: "E-Commerce",
      company: "phenomenal-torte-764818.netlify.app",
      image: "",
      content:
        "Launching new products is quick and easy. The store is fast and user-friendly for our customers.",
      rating: 5,
      project: "Online Mini Store",
    },
    {
      name: "Hacking Alert Prank",
      role: "Entertainment",
      company: "delicate-concha-2e8ec5.netlify.app",
      image: "",
      content:
        "A fun and viral prank app that brought lots of laughs to our community!",
      rating: 5,
      project: "Hacking Alert Prank",
    },
    {
      name: "SoS Emergency Native Mobile App",
      role: "Mobile App",
      company: "-",
      image: "",
      content:
        "The SoS app is a lifesaver. Fast, reliable, and easy to use in emergencies.",
      rating: 5,
      project: "SoS Emergency Native Mobile App",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say
            about the impact our solutions have had on their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-primary/5 rounded-2xl p-8 border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
