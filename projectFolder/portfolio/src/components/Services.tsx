import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  Database,
  Code2,
  Palette,
  Settings,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/CountUp";

const Services = () => {
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
      price: "R2,000 - R3,500",
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
      price: "R3,600 - R5,000",
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
      price: "R5,000 - R7,500",
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
      price: "R8,000 - R12,000",
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
      price: "R2,000 - R3,500",
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
      price: "R12,000+ (Tailored)",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {service.price}
                    </span>
                  </div>
                  {/* Animated stat for each service (example: project count) */}
                  {index === 0 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={50} suffix="+" /> Projects
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={20} suffix="+" /> Apps
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={30} suffix="+" /> APIs
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={15} suffix="+" /> Solutions
                    </div>
                  )}
                  {index === 4 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={40} suffix="+" /> Designs
                    </div>
                  )}
                  {index === 5 && (
                    <div className="mt-2 text-lg font-bold text-primary">
                      <CountUp end={10} suffix="+" /> Workflows
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="premium"
            size="lg"
            onClick={scrollToContact}
            className="group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
