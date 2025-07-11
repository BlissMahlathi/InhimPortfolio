import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Star,
  Users,
  Zap,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Github,
} from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Mon-Fri, 8AM-6PM SAST",
      contact: "071 523 1720",
      responseTime: "Immediate",
      badge: "Priority",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Quick chat support for urgent issues",
      availability: "24/7 automated, Mon-Fri live",
      contact: "Hlulani Bliss Mahlathi",
      responseTime: "< 1 hour",
      badge: "Fast",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed technical assistance",
      availability: "24/7 submission",
      contact: "blissmahlathi37@gmail.com",
      responseTime: "< 4 hours",
      badge: "Detailed",
    },
    {
      icon: Github,
      title: "GitHub Issues",
      description: "Report bugs and request features",
      availability: "24/7 community support",
      contact: "BlissMahlathi",
      responseTime: "< 24 hours",
      badge: "Community",
    },
  ];

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        "How do I start a new project?",
        "What technologies do you use?",
        "What's included in the basic package?",
        "How long does development take?",
      ],
    },
    {
      title: "Pricing & Billing",
      questions: [
        "What payment methods do you accept?",
        "Are there any hidden fees?",
        "Can I change my package later?",
        "Do you offer refunds?",
      ],
    },
    {
      title: "Technical Support",
      questions: [
        "How do I deploy my website?",
        "Can you help with hosting?",
        "What if I need changes after launch?",
        "Do you provide maintenance?",
      ],
    },
  ];

  const serviceStats = [
    { icon: Clock, value: "< 1 hour", label: "Average Response Time" },
    { icon: Star, value: "98%", label: "Customer Satisfaction" },
    { icon: Users, value: "24/7", label: "Support Availability" },
    { icon: Zap, value: "100%", label: "Issue Resolution" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Support Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to
              <span className="block text-primary">Help You Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the support you need, when you need it. Our dedicated team is
              committed to ensuring your project's success every step of the
              way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Start Live Chat
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get help, whether you need quick answers or
              detailed technical assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {option.title}
                          </CardTitle>
                          <CardDescription>
                            {option.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{option.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          Availability:
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {option.availability}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Contact:</span>
                        <span className="text-sm text-muted-foreground">
                          {option.contact}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          Response Time:
                        </span>
                        <span className="text-sm text-primary font-medium">
                          {option.responseTime}
                        </span>
                      </div>
                      <Separator />
                      <Button className="w-full gap-2">
                        <IconComponent className="w-4 h-4" />
                        Contact Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Describe your issue or question, and we'll get back to you with
                a solution
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input placeholder="+27 XX XXX XXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input placeholder="Brief description of your inquiry" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Please describe your issue or question in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="urgent" className="rounded" />
                  <label htmlFor="urgent" className="text-sm">
                    This is urgent and requires immediate attention
                  </label>
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. For detailed documentation,
              visit our FAQ page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <div
                      key={qIndex}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{question}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <BookOpen className="w-4 h-4" />
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Status & Updates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">System Status</h2>
            <p className="text-muted-foreground">
              All systems operational. Last updated:{" "}
              {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Website & Applications</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Email Support</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Development Services</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    Operational
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
