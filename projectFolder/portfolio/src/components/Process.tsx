import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "We dive deep into your business needs, analyzing current workflows and identifying opportunities for digital transformation.",
      details: [
        "Business audit",
        "Requirements gathering",
        "Competitive analysis",
        "Technical assessment",
      ],
      duration: "1-2 weeks",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "We create a comprehensive roadmap tailored to your goals, ensuring every solution aligns with your business objectives.",
      details: [
        "Solution architecture",
        "Technology selection",
        "Timeline planning",
        "Resource allocation",
      ],
      duration: "1 week",
    },
    {
      icon: Code,
      title: "Development & Testing",
      description:
        "Our expert team brings your vision to life using cutting-edge technologies and agile development methodologies.",
      details: [
        "Agile development",
        "Code reviews",
        "Quality testing",
        "Performance optimization",
      ],
      duration: "2-8 weeks",
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description:
        "We ensure a smooth deployment and provide ongoing support to optimize performance and user experience.",
      details: [
        "Deployment",
        "Performance monitoring",
        "User training",
        "Continuous improvement",
      ],
      duration: "Ongoing",
    },
  ];

  const achievements = [
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "48h", label: "Average Response Time" },
    { metric: "100%", label: "Client Satisfaction" },
    { metric: "3x", label: "ROI Improvement" },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Transform Your
            <span className="block text-primary">Business Digitally</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step methodology ensures your project is delivered on
            time, within budget, and exceeds your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    Step {index + 1}
                  </Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-primary/5 rounded-2xl p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Why Businesses Choose Us
            </h3>
            <p className="text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Development Badge */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">AI-Accelerated Development</h4>
                <p className="text-sm text-muted-foreground">
                  We leverage AI tools for faster, more efficient development
                  cycles
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;
