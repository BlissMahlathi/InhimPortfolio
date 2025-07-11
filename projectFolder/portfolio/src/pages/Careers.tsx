import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CareersPage = () => {
  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Nkowankowa Township",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      description:
        "Join our team to build innovative web applications and software solutions for South African businesses.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Nkowankowa Township",
      type: "Full-time",
      experience: "1-3 years",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      description:
        "Help create beautiful and intuitive user experiences for our client projects.",
    },
    {
      title: "Junior Developer (Internship)",
      department: "Engineering",
      location: "Nkowankowa Township",
      type: "Internship",
      experience: "Entry level",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
      description:
        "Perfect opportunity for recent graduates or students to gain real-world development experience.",
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Limpopo Province",
      type: "Part-time",
      experience: "1-2 years",
      skills: ["Sales", "Communication", "CRM", "Local Market Knowledge"],
      description:
        "Help us connect with more businesses in the region and expand our impact.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities and career advancement paths",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description:
        "Work with passionate professionals in a supportive environment",
    },
    {
      icon: MapPin,
      title: "Flexible Location",
      description: "Remote work options with local community engagement",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours and time for personal development",
    },
  ];

  const values = [
    "Innovation through technology",
    "Community-focused development",
    "Continuous learning and growth",
    "Quality and excellence in delivery",
    "Collaboration and teamwork",
    "Ethical business practices",
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
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build the Future of
                <span className="block text-primary">South African Tech</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our mission to transform businesses through technology.
                Work on meaningful projects that make a real difference in our
                community while growing your career.
              </p>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-muted-foreground mb-8">
                We're not just building software - we're building the future of
                business in South Africa. Our team is passionate about creating
                solutions that make a real impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {values.map((value, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Explore opportunities to join our growing team
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {position.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Badge variant="outline">{position.experience}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {position.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full sm:w-auto group">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">How to Apply</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-muted-foreground text-sm">
                    Send your CV and cover letter to our email
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Initial Interview</h3>
                  <p className="text-muted-foreground text-sm">
                    Phone or video call to discuss your background
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Technical Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    Practical task or portfolio review
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold mb-2">Ready to Join Us?</h3>
                <p className="text-muted-foreground mb-4">
                  Send your application to:{" "}
                  <strong>careers@hlulanitech.co.za</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Include your CV, a brief cover letter, and links to your
                  portfolio or previous work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
