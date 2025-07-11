import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Code2,
  Palette,
  Settings,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Modern UI/UX",
      ],
      pricing: "R2,000 - R3,500",
      timeline: "2-6 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Progressive web apps and mobile-friendly solutions that work seamlessly across all devices.",
      features: [
        "Cross-Platform",
        "Offline Capable",
        "Push Notifications",
        "App Store Ready",
      ],
      pricing: "R3,600 - R5,000",
      timeline: "4-8 weeks",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "Robust backend systems, APIs, and database solutions to power your applications.",
      features: [
        "REST APIs",
        "Database Design",
        "Cloud Integration",
        "Security First",
      ],
      pricing: "R5,000 - R7,500",
      timeline: "3-6 weeks",
    },
    {
      icon: Code2,
      title: "Custom Software",
      description:
        "Tailored software solutions to streamline your business processes and boost productivity.",
      features: [
        "Process Automation",
        "Integration",
        "Scalable Architecture",
        "Maintenance",
      ],
      pricing: "R8,000 - R12,000",
      timeline: "6-12 weeks",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly interfaces that convert visitors into customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      pricing: "R2,000 - R3,500",
      timeline: "2-4 weeks",
    },
    {
      icon: Settings,
      title: "Digital Organization",
      description:
        "Help businesses organize their digital workflows and improve operational efficiency.",
      features: [
        "Workflow Optimization",
        "Tool Integration",
        "Training",
        "Support",
      ],
      pricing: "R12,000+ (Tailored)",
      timeline: "1-3 weeks",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Digital
                <span className="block text-primary">
                  Solutions for Business
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From custom websites to complex software systems, we provide
                end-to-end digital solutions that transform how your business
                operates and grows.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-center">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <ArrowRight className="w-3 h-3 mr-2 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Starting from
                          </p>
                          <p className="font-bold text-primary">
                            {service.pricing}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            Timeline
                          </p>
                          <p className="font-semibold">{service.timeline}</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a
              custom quote.
            </p>
            <Button size="lg" className="group">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
