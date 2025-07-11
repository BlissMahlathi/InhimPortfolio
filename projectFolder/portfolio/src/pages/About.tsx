import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import myPicture from "@/assets/myPicture.jpg";

const AboutPage = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI" },
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Focused Approach",
      description:
        "We prioritize understanding your unique business needs and challenges to deliver solutions that truly make a difference.",
    },
    {
      icon: Target,
      title: "Results-Driven Solutions",
      description:
        "Every project is designed with clear objectives and measurable outcomes that align with your business goals.",
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description:
        "We maintain the highest standards in code quality, design, and project delivery to ensure long-term success.",
    },
    {
      icon: Globe,
      title: "Innovation & Technology",
      description:
        "We leverage the latest technologies and AI-assisted development to deliver cutting-edge solutions efficiently.",
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
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Businesses Through
                <span className="block text-primary">Smart Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a forward-thinking development company dedicated to
                helping South African businesses organize their operations,
                establish powerful online presence, and unlock growth through
                custom digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Learn about the visionary behind the innovative solutions that
                  transform businesses
                </p>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-6">
                      <img
                        src={myPicture}
                        alt="Hlulani Bliss Mahlathi"
                        className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Hlulani Bliss Mahlathi
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      Founder & CEO
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Director at INHIM Trading (Pty) Ltd
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Based in Nkowankowa Township, South Africa
                    </p>

                    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                      <p>
                        As the founder and CEO, I'm passionate about bridging
                        the digital divide and helping businesses in our
                        community harness the power of technology. With
                        experience as a director at INHIM Trading (Pty) Ltd, I
                        understand the unique challenges that South African
                        businesses face in today's digital landscape.
                      </p>
                      <p>
                        My mission is to make professional web development and
                        software solutions accessible to businesses of all
                        sizes, from small local enterprises to growing
                        companies. I believe that every business deserves a
                        strong digital presence and efficient operational
                        systems.
                      </p>
                      <p>
                        Through AI-assisted development and modern technologies,
                        we deliver enterprise-level solutions at affordable
                        prices, helping businesses streamline their operations
                        and reach new heights of success.
                      </p>
                    </div>

                    <Button className="group">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-muted-foreground">
                Numbers that speak to our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and drive our
                commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our
              digital solutions.
            </p>
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
