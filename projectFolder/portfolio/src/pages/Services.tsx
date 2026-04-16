import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Palette,
  Settings,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: "Revenue Websites",
      description:
        "Premium websites designed to position your offer clearly and convert high-intent visitors into leads.",
      features: [
        "Strategic messaging",
        "Conversion-first layouts",
        "SEO fundamentals",
        "Performance optimization",
      ],
      pricing: "From R2,500",
      timeline: "2-4 weeks",
    },
    {
      icon: Smartphone,
      title: "Product Interfaces",
      description:
        "Polished responsive interfaces for customer portals, apps, and internal tools that teams enjoy using.",
      features: [
        "Responsive system UI",
        "Accessibility standards",
        "Interaction design",
        "Component libraries",
      ],
      pricing: "From R3,800",
      timeline: "3-5 weeks",
    },
    {
      icon: Database,
      title: "Backend Integrations",
      description:
        "Secure APIs and data workflows that connect your website or product to real business operations.",
      features: [
        "RESTful APIs",
        "Database architecture",
        "Automation pipelines",
        "Security hardening",
      ],
      pricing: "From R5,500",
      timeline: "3-6 weeks",
    },
    {
      icon: Code2,
      title: "Custom Platforms",
      description:
        "Tailored systems for booking, inventory, CRM, and internal workflows that reduce operational friction.",
      features: [
        "Role-based dashboards",
        "Business logic automation",
        "Scalable architecture",
        "Documentation and handover",
      ],
      pricing: "From R8,500",
      timeline: "5-10 weeks",
    },
    {
      icon: Palette,
      title: "UX and Brand Systems",
      description:
        "A cohesive design language across pages and products so every touchpoint feels unmistakably yours.",
      features: [
        "Experience mapping",
        "Visual direction",
        "Prototype validation",
        "Reusable UI standards",
      ],
      pricing: "From R3,000",
      timeline: "2-4 weeks",
    },
    {
      icon: Settings,
      title: "Workflow Optimization",
      description:
        "Digital process improvement to simplify team operations and increase day-to-day execution speed.",
      features: [
        "Process diagnostics",
        "Tool integration",
        "Automation mapping",
        "Team enablement",
      ],
      pricing: "Tailored scope",
      timeline: "Based on complexity",
    },
  ];

  const deliveryModes = [
    {
      title: "Project Sprint",
      text: "Ideal for clearly scoped outcomes like a website, campaign page, or MVP module.",
    },
    {
      title: "Embedded Partner",
      text: "Ongoing monthly collaboration for roadmap execution, optimization, and growth iterations.",
    },
    {
      title: "Advisory and Rescue",
      text: "Architecture reviews, turnaround plans, and delivery guidance for stalled digital initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="section-shell">
          <div className="absolute inset-0 mesh-background opacity-70" />
          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/85">
                Services
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                End-to-end digital execution
                <span className="headline-gradient"> built for business impact</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                From positioning to production, we design and engineer digital
                systems that drive revenue, improve efficiency, and scale with
                your team.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="glass-card section-ring h-full rounded-3xl border-border/70">
                      <CardHeader className="pb-4">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/16 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground">
                            {service.timeline}
                          </span>
                          <span className="rounded-full bg-primary/16 px-3 py-1 text-xs font-semibold text-primary">
                            {service.pricing}
                          </span>
                        </div>

                        <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle2 className="mr-2 h-4 w-4 shrink-0 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8"
            >
              <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                  Engagement Models
                </p>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Work with us in the format that suits your growth stage
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {deliveryModes.map((mode, index) => (
                  <motion.article
                    key={mode.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="rounded-2xl border border-border/70 bg-background/35 p-5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/18 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{mode.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {mode.text}
                    </p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" variant="hero" className="group" asChild>
                  <a href="/#contact">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;