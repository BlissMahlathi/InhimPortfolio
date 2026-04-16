import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  Database,
  Code2,
  Palette,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Revenue Websites",
      description:
        "High-performance websites built to increase inbound leads and communicate your value clearly.",
      features: [
        "Messaging architecture",
        "Conversion-focused UX",
        "SEO foundations",
        "Performance tuning",
      ],
      price: "From R2,500",
      timeline: "2-4 weeks",
    },
    {
      icon: Smartphone,
      title: "Product Interfaces",
      description:
        "Responsive, app-like interfaces that feel polished on mobile and desktop from day one.",
      features: [
        "Cross-device consistency",
        "Design system setup",
        "Accessibility checks",
        "Micro-interactions",
      ],
      price: "From R3,800",
      timeline: "3-5 weeks",
    },
    {
      icon: Database,
      title: "Backend & Integrations",
      description:
        "Reliable APIs and data flows that connect your website to payments, CRMs, and internal tools.",
      features: [
        "REST APIs",
        "Database modeling",
        "Automation pipelines",
        "Security hardening",
      ],
      price: "From R5,500",
      timeline: "3-6 weeks",
    },
    {
      icon: Code2,
      title: "Custom Platforms",
      description:
        "Purpose-built systems for operations, workflow management, and service delivery.",
      features: [
        "Role-based dashboards",
        "Business logic automation",
        "Scalable architecture",
        "Support runway",
      ],
      price: "From R8,500",
      timeline: "5-10 weeks",
    },
    {
      icon: Palette,
      title: "UX & Brand Systems",
      description:
        "A coherent visual and interaction language across your entire digital presence.",
      features: [
        "Experience mapping",
        "Wireframes",
        "Interactive prototypes",
        "Reusable components",
      ],
      price: "From R3,000",
      timeline: "2-4 weeks",
    },
    {
      icon: Settings,
      title: "Workflow Optimization",
      description:
        "We remove bottlenecks by connecting systems and simplifying your internal operations.",
      features: [
        "Process diagnostics",
        "Tool integration",
        "Team enablement",
        "Performance dashboards",
      ],
      price: "Tailored scope",
      timeline: "Based on complexity",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/#contact");
  };

  return (
    <section id="services" className="section-shell">
      <div className="pointer-events-none absolute inset-0 mesh-background opacity-65" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Services
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Build a digital stack that
            <span className="headline-gradient"> compounds your growth</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We design and engineer business-grade products, from marketing
            websites to operational software, with clear ROI targets.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="glass-card section-ring h-full rounded-3xl border-border/70 bg-card/50">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/16 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground">
                        {service.timeline}
                      </span>
                      <span className="rounded-full bg-primary/16 px-3 py-1 text-xs font-semibold text-primary">
                        {service.price}
                      </span>
                    </div>

                    <CardTitle className="text-xl text-card-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {index < 3 && (
                      <div className="mt-6 border-t border-border/60 pt-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/80">
                          Typical project count
                        </p>
                        <p className="mt-1 text-xl font-bold text-foreground">
                          <CountUp end={[46, 32, 38][index]} suffix="+" />
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
            Ready to scope your build?
          </p>
          <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-foreground">
            Tell us your goals and get a practical build roadmap.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We usually respond with architecture recommendations, a delivery
            approach, and pricing ranges within 24 hours.
          </p>
          <div className="mt-7">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
              Book a Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
