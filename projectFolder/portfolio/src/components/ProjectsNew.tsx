import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Management Suite",
      description:
        "Complete restaurant management system with POS, inventory tracking, staff scheduling, and customer analytics.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Real-time"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      category: "Business Management",
      impact: "Reduced operational costs by 35%",
    },
    {
      title: "Healthcare Patient Portal",
      description:
        "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine integration.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      tags: ["Next.js", "TypeScript", "HIPAA", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      category: "Healthcare",
      impact: "Improved patient satisfaction by 60%",
    },
    {
      title: "E-Learning Platform",
      description:
        "Interactive online learning platform with course management, progress tracking, and live streaming capabilities.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      tags: ["React", "Firebase", "Video Streaming", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      category: "Education",
      impact: "Expected 3x engagement increase",
    },
    {
      title: "Real Estate CRM",
      description:
        "Comprehensive real estate management platform with property listings, client management, and virtual tour integration.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Express", "MongoDB", "3D Tours"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      category: "Real Estate",
      impact: "Increased sales conversion by 45%",
    },
    {
      title: "Logistics Tracking System",
      description:
        "Real-time package tracking and fleet management system with route optimization and delivery notifications.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      tags: ["React Native", "GPS", "Real-time", "ML"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      category: "Logistics",
      impact: "Reduced delivery time by 30%",
    },
    {
      title: "AI Content Management",
      description:
        "Smart content management system with AI-powered content generation, SEO optimization, and automated publishing.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["Python", "AI/ML", "Next.js", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      category: "AI/ML",
      impact: "Expected 5x content production speed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "In Development":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Beta":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Projects,
            <span className="block text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful business solutions that have
            transformed operations and driven growth for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center text-green-700 dark:text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Live
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed
            their businesses with our solutions.
          </p>
          <Button size="lg" className="group">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
