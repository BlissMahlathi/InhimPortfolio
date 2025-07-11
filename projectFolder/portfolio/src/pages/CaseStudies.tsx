import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Restaurant Management Revolution",
      client: "Green Valley Restaurant",
      industry: "Food & Beverage",
      challenge:
        "Manual processes, poor inventory tracking, scheduling conflicts",
      solution:
        "Complete restaurant management system with POS, inventory, and staff scheduling",
      results: [
        "35% reduction in operational costs",
        "50% improvement in inventory accuracy",
        "90% reduction in scheduling conflicts",
        "25% increase in customer satisfaction",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Real-time APIs"],
      timeline: "8 weeks",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      title: "Healthcare Digital Transformation",
      client: "HealthCare Plus Clinic",
      industry: "Healthcare",
      challenge:
        "Paper-based records, manual appointment booking, poor patient communication",
      solution: "HIPAA-compliant patient portal with telemedicine integration",
      results: [
        "60% increase in patient satisfaction",
        "40% reduction in appointment no-shows",
        "75% faster record retrieval",
        "30% increase in appointment bookings",
      ],
      technologies: ["Next.js", "TypeScript", "WebRTC", "HIPAA compliance"],
      timeline: "12 weeks",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    },
    {
      title: "E-Learning Platform Success",
      client: "EduTech Academy",
      industry: "Education",
      challenge:
        "Low student engagement, limited course management, no progress tracking",
      solution:
        "Interactive learning platform with video streaming and progress analytics",
      results: [
        "300% increase in student engagement",
        "85% improvement in course completion rates",
        "50% reduction in administrative workload",
        "200% growth in student enrollment",
      ],
      technologies: ["React", "Firebase", "Video Streaming", "PWA"],
      timeline: "10 weeks",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
      title: "Real Estate CRM Optimization",
      client: "Prime Properties",
      industry: "Real Estate",
      challenge:
        "Lost leads, poor client follow-up, inefficient property management",
      solution: "Comprehensive CRM with virtual tours and automated follow-ups",
      results: [
        "45% increase in sales conversion",
        "60% improvement in lead management",
        "40% reduction in administrative time",
        "80% increase in client retention",
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "3D Tours"],
      timeline: "14 weeks",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
      title: "Logistics Efficiency Breakthrough",
      client: "FastTrack Delivery",
      industry: "Logistics",
      challenge:
        "Poor route planning, delayed deliveries, lack of real-time tracking",
      solution: "Real-time tracking system with AI-powered route optimization",
      results: [
        "30% reduction in delivery times",
        "25% decrease in fuel costs",
        "95% improvement in delivery accuracy",
        "90% reduction in customer complaints",
      ],
      technologies: ["React Native", "GPS Integration", "ML", "Real-time APIs"],
      timeline: "16 weeks",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
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
                Case Studies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real Results for
                <span className="block text-primary">Real Businesses</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries
                transform their operations and achieve remarkable growth through
                our digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl mb-2">
                          {study.title}
                        </CardTitle>
                        <p className="text-primary font-semibold">
                          {study.client}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Timeline: {study.timeline}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-red-600">
                            Challenge:
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600">
                            Solution:
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {study.solution}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-green-600 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            Results:
                          </h4>
                          <ul className="space-y-1">
                            {study.results.map((result, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-green-600 flex items-center"
                              >
                                <ArrowRight className="w-3 h-3 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full group" variant="outline">
                          View Full Case Study
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with proven
              digital solutions.
            </p>
            <Button size="lg" className="group">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
