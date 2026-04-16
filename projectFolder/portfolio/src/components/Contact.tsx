import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Consultation request received",
      description:
        "Thanks for reaching out. We will respond with next steps within 24 hours.",
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
      content: "Start a chat",
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
    <section id="contact" className="section-shell">
      <div className="pointer-events-none absolute inset-0 mesh-background opacity-65" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Start Here
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Ready to launch your
            <span className="headline-gradient"> next growth system?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Share your goals and we will return with a practical roadmap,
            recommended stack, and investment guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <Card className="glass-card section-ring rounded-2xl border-border/70 p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/16 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {info.title}
                        </p>
                        <p className="text-sm font-semibold text-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              if (info.action) {
                return (
                  <a
                    key={info.title}
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={info.title}>{content}</div>;
            })}

            <Card className="glass-card section-ring rounded-2xl border-border/70 p-5">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/16 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Availability for new builds
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Typical response in under 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="glass-card section-ring rounded-3xl border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Tell us about your project
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Enough detail to understand scope, timeline, and goals is perfect.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 border-border/70 bg-background/35"
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
                        className="mt-2 border-border/70 bg-background/35"
                        placeholder="you@company.com"
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
                      className="mt-2 border-border/70 bg-background/35"
                      placeholder="Company or brand"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-2 border-border/70 bg-background/35"
                        placeholder="Website, app, platform"
                        list="project-types"
                      />
                      <datalist id="project-types">
                        <option value="Business Website" />
                        <option value="Web Application" />
                        <option value="E-Commerce Platform" />
                        <option value="Operations Platform" />
                        <option value="CRM or Internal Tool" />
                        <option value="Other" />
                      </datalist>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-2 border-border/70 bg-background/35"
                        placeholder="Estimated budget range"
                        list="budget-ranges"
                      />
                      <datalist id="budget-ranges">
                        <option value="R2,500 - R5,000" />
                        <option value="R5,000 - R12,000" />
                        <option value="R12,000 - R25,000" />
                        <option value="R25,000+" />
                      </datalist>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-2 border-border/70 bg-background/35"
                      placeholder="ASAP, 1 month, 2-3 months"
                      list="timelines"
                    />
                    <datalist id="timelines">
                      <option value="ASAP" />
                      <option value="Within 1 month" />
                      <option value="2-3 months" />
                      <option value="3+ months" />
                      <option value="Flexible" />
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
                      className="mt-2 min-h-32 border-border/70 bg-background/35"
                      placeholder="What are you trying to build? What business outcomes matter most?"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" variant="hero" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Project Brief
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Prefer a direct conversation?
                    <a
                      href="https://wa.me/27715231720"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-flex items-center text-primary hover:text-primary-glow"
                    >
                      Chat on WhatsApp
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;