import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calendar,
  FileText,
  Users,
  ShoppingCart,
  Database,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const BusinessSolutions = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Business Analytics Dashboard",
      description:
        "Transform your data into actionable insights with custom analytics dashboards that help you make informed decisions.",
      features: [
        "Real-time reporting",
        "Custom KPIs",
        "Data visualization",
        "Export capabilities",
      ],
      benefits: [
        "Increase efficiency by 40%",
        "Better decision making",
        "Cost reduction",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Analytics",
    },
    {
      icon: Calendar,
      title: "Appointment & Booking System",
      description:
        "Streamline your scheduling with intelligent booking systems that reduce no-shows and improve customer experience.",
      features: [
        "Online booking",
        "Automated reminders",
        "Payment integration",
        "Calendar sync",
      ],
      benefits: [
        "Reduce no-shows by 60%",
        "24/7 booking availability",
        "Automated workflows",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Scheduling",
    },
    {
      icon: FileText,
      title: "Document Management System",
      description:
        "Organize, store, and retrieve your business documents with advanced search and collaboration features.",
      features: [
        "Cloud storage",
        "Version control",
        "Access permissions",
        "Advanced search",
      ],
      benefits: [
        "Save 20+ hours/week",
        "Improved compliance",
        "Better collaboration",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Management",
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description:
        "Build stronger customer relationships with comprehensive CRM solutions tailored to your business needs.",
      features: [
        "Contact management",
        "Sales pipeline",
        "Email automation",
        "Reporting",
      ],
      benefits: [
        "Increase sales by 30%",
        "Better customer retention",
        "Automated follow-ups",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "CRM",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Launch your online store with powerful e-commerce platforms that drive sales and improve customer experience.",
      features: [
        "Product catalog",
        "Payment processing",
        "Inventory management",
        "Order tracking",
      ],
      benefits: [
        "Expand market reach",
        "24/7 sales capability",
        "Automated processes",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-Commerce",
    },
    {
      icon: Database,
      title: "Inventory Management System",
      description:
        "Keep track of your inventory in real-time with automated alerts, reporting, and forecasting capabilities.",
      features: [
        "Real-time tracking",
        "Low stock alerts",
        "Supplier management",
        "Forecasting",
      ],
      benefits: [
        "Reduce waste by 25%",
        "Prevent stockouts",
        "Optimize purchasing",
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      category: "Inventory",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Business Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Solutions That
            <span className="block text-primary">Drive Business Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create custom software solutions that address real business
            challenges, helping you streamline operations and unlock new
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {solution.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <solution.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {solution.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-xs"
                            >
                              <CheckCircle className="w-3 h-3 text-primary mr-1 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          Business Impact:
                        </h4>
                        <ul className="space-y-1">
                          {solution.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-green-600 flex items-center"
                            >
                              <ArrowRight className="w-3 h-3 mr-1 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. We specialize in creating tailored
            solutions that fit your specific needs, workflow, and growth
            objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
