import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Consultation request received!",
      description:
        "We'll analyze your requirements and get back to you within 24 hours with a custom proposal.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "blissmahlathi37@gmail.com",
      action: "mailto:blissmahlathi37@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "071 523 1720",
      action: "tel:0715231720",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Quick Chat",
      action: "https://wa.me/27715231720",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nkowankowa Township, SA",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="block text-primary">Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help streamline your operations, establish
            your online presence, and drive growth through custom digital
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Get in Touch
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <Card className="p-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </Card>
              );

              return info.action ? (
                <a
                  key={index}
                  href={info.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}

            {/* Availability */}
            <Card className="p-4 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Availability
                  </h4>
                  <p className="text-green-600 text-sm">
                    Available for new projects
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-card-foreground">
                  Start Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you with a
                  custom proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g., Business Website, Web App, CRM"
                        list="project-types"
                      />
                      <datalist id="project-types">
                        <option value="Business Website" />
                        <option value="Web Application" />
                        <option value="E-Commerce Platform" />
                        <option value="CRM System" />
                        <option value="Management System" />
                        <option value="Mobile App" />
                        <option value="AI/ML Solution" />
                        <option value="Other" />
                      </datalist>
                    </div>
                    <div>
                      <Label htmlFor="budget">Project Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g., R2,000 - R3,500"
                        list="budget-ranges"
                      />
                      <datalist id="budget-ranges">
                        <option value="R2,000 - R3,500" />
                        <option value="R3,600 - R5,000" />
                        <option value="R5,000 - R7,500" />
                        <option value="R8,000 - R12,000" />
                        <option value="R12,000+ (Tailored)" />
                      </datalist>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="e.g., Within 1 month, 2-3 months"
                      list="timelines"
                    />
                    <datalist id="timelines">
                      <option value="ASAP (Rush job)" />
                      <option value="Within 1 month" />
                      <option value="2-3 months" />
                      <option value="3-6 months" />
                      <option value="6+ months" />
                      <option value="Flexible timeline" />
                    </datalist>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-32"
                      placeholder="Describe your business needs and challenges. What problems are you trying to solve? What goals do you want to achieve? Include any specific features or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    variant="cta"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
