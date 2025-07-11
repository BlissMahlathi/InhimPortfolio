import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import myPicture from "@/assets/myPicture.jpg";
import {
  Code,
  Zap,
  Users,
  Award,
  Brain,
  Rocket,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Github,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Zap, value: "3x", label: "Faster Development" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "Vue.js",
    "Express",
    "GraphQL",
    "Firebase",
    "AI/ML Tools",
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description:
        "We harness the power of artificial intelligence to accelerate development cycles, improve code quality, and deliver innovative solutions that set your business apart.",
    },
    {
      icon: Rocket,
      title: "Business-First Approach",
      description:
        "Every line of code serves a business purpose. We focus on creating solutions that directly impact your bottom line and operational efficiency.",
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description:
        "We don't just build software; we transform how your business operates, helping you organize workflows and establish a powerful digital presence.",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Solutions",
      description:
        "Our solutions are built to scale and adapt, ensuring your technology grows with your business and stays ahead of the competition.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Businesses
            <span className="block text-primary">Through Smart Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a forward-thinking development start-up dedicated to helping
            businesses organize their operations, establish powerful online
            presence, and unlock growth through custom digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet the Founder</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn about the visionary behind the innovative solutions that
              transform businesses
            </p>
          </div>

          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={myPicture}
                    alt="Hlulani Bliss Mahlathi"
                    className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3">
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Hlulani Bliss Mahlathi
                </h4>
                <p className="text-primary font-semibold mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Director at INHIM Trading (Pty) Ltd
                </p>
                <p className="text-sm text-muted-foreground">
                  Based in Nkowankowa Township
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As the founder and CEO, I'm passionate about bridging the
                    digital divide and helping businesses in our community
                    harness the power of technology. With experience as a
                    director at INHIM Trading (Pty) Ltd, I understand the unique
                    challenges that businesses face in our region.
                  </p>
                  <p>
                    My mission is to make professional web development and
                    software solutions accessible to businesses of all sizes,
                    from small local enterprises to growing companies. I believe
                    that every business deserves a strong digital presence and
                    efficient operational systems.
                  </p>
                  <p>
                    Through AI-assisted development and modern technologies, we
                    deliver enterprise-level solutions at affordable prices,
                    helping businesses streamline their operations and reach new
                    heights of success.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">071 523 1720</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">blissmahlathi37@gmail.com</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Hlulani Bliss Mahlathi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="w-4 h-4 text-primary" />
                      <span className="text-sm">BlissMahlathi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We believe every business deserves access to powerful digital
                tools that streamline operations and drive growth. Our start-up
                was founded on the principle that technology should serve
                business goals, not complicate them.
              </p>
              <p>
                By combining traditional development expertise with AI-powered
                acceleration, we deliver custom websites and software solutions
                faster and more efficiently than ever before. This approach
                allows us to offer enterprise-level quality at startup-friendly
                prices.
              </p>
              <p>
                Whether you need to organize your business logs, establish an
                online presence, or automate complex workflows, we create
                tailored solutions that make your business more efficient and
                competitive in today's digital landscape.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Tech Stack</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use modern, battle-tested technologies to ensure your project
              is built on solid foundations that can scale with your business.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
