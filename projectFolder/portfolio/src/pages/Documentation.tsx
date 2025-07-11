import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Code,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Lightbulb,
  Play,
  Settings,
  Zap,
} from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      icon: Play,
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      articles: [
        "Project Setup & Installation",
        "Configuration Guide",
        "First Steps Tutorial",
        "Environment Setup",
      ],
    },
    {
      icon: Code,
      title: "Development Guide",
      description: "Comprehensive development documentation",
      articles: [
        "Architecture Overview",
        "API Reference",
        "Component Library",
        "Best Practices",
      ],
    },
    {
      icon: Settings,
      title: "Integration",
      description: "How to integrate with existing systems",
      articles: [
        "Database Integration",
        "Third-party APIs",
        "Payment Gateways",
        "Authentication Systems",
      ],
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Make the most of advanced functionality",
      articles: [
        "AI-Powered Tools",
        "Automation Workflows",
        "Custom Integrations",
        "Performance Optimization",
      ],
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: "API Documentation",
      description: "Complete API reference with examples",
      link: "#",
      type: "Web",
    },
    {
      icon: Download,
      title: "SDK Downloads",
      description: "Software development kits for various platforms",
      link: "#",
      type: "Download",
    },
    {
      icon: GitBranch,
      title: "Code Examples",
      description: "Sample projects and code snippets",
      link: "#",
      type: "GitHub",
    },
    {
      icon: BookOpen,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "#",
      type: "Video",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer
              <span className="block text-primary">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to build, integrate, and deploy with our
              platform. From quick start guides to advanced integration
              patterns.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                Quick Start
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Navigation */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Find What You Need</h2>
            <p className="text-muted-foreground">
              Browse our comprehensive documentation or search for specific
              topics
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Getting Started
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              API Reference
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Tutorials
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Integration
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Examples
            </Badge>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Documentation Sections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides covering every aspect of development with our
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {section.title}
                        </CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.articles.map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <span className="text-sm font-medium">{article}</span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Downloads, examples, and tools to accelerate your development
              process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Badge variant="outline">{resource.type}</Badge>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find what you're looking for? Our team is here to help you
                succeed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <GitBranch className="w-4 h-4" />
                  Community Forum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
