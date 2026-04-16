import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ExternalLink, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Restaurant Management Revolution",
      client: "Green Valley Restaurant",
      industry: "Food and Beverage",
      challenge:
        "Manual stock tracking and staff coordination were causing delays, waste, and revenue leakage.",
      solution:
        "We built an integrated operations platform for POS workflows, inventory visibility, and team scheduling.",
      results: [
        "35% reduction in operational overhead",
        "50% improvement in inventory accuracy",
        "90% drop in scheduling conflicts",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Realtime APIs"],
      timeline: "8 weeks",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=420&fit=crop",
    },
    {
      title: "Healthcare Digital Transformation",
      client: "HealthCare Plus Clinic",
      industry: "Healthcare",
      challenge:
        "Paper workflows and manual booking produced long patient wait times and missed follow-ups.",
      solution:
        "We delivered a secure patient portal with online bookings, reminders, and digital records workflows.",
      results: [
        "60% increase in patient satisfaction",
        "40% reduction in missed appointments",
        "75% faster record retrieval",
      ],
      technologies: ["Next.js", "TypeScript", "WebRTC", "Compliance-first design"],
      timeline: "12 weeks",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=420&fit=crop",
    },
    {
      title: "E-Learning Platform Success",
      client: "EduTech Academy",
      industry: "Education",
      challenge:
        "Low engagement and fragmented content delivery were limiting learner completion rates.",
      solution:
        "We built an interactive learning platform with progress analytics and structured learning flows.",
      results: [
        "300% increase in engagement",
        "85% improvement in completion rates",
        "50% reduction in admin load",
      ],
      technologies: ["React", "Firebase", "Streaming", "PWA"],
      timeline: "10 weeks",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=420&fit=crop",
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
                Case Studies
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Delivery stories with
                <span className="headline-gradient"> measurable impact</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                A closer look at how we partnered with teams to solve operational
                bottlenecks and unlock new growth through software.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Card className="glass-card section-ring overflow-hidden rounded-3xl border-border/70">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="relative min-h-[280px]">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full border border-border/70 bg-background/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                          {study.industry}
                        </div>
                      </div>

                      <div className="p-6 md:p-8">
                        <CardHeader className="p-0">
                          <CardTitle className="text-2xl text-foreground md:text-3xl">
                            {study.title}
                          </CardTitle>
                          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                            {study.client} · {study.timeline}
                          </p>
                        </CardHeader>

                        <CardContent className="mt-6 space-y-5 p-0">
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                              Challenge
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {study.challenge}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                              Solution
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {study.solution}
                            </p>
                          </div>

                          <div>
                            <h3 className="flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                              <TrendingUp className="mr-2 h-4 w-4" />
                              Results
                            </h3>
                            <ul className="mt-2 space-y-2">
                              {study.results.map((result) => (
                                <li
                                  key={result}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <CheckCircle2 className="mr-2 h-4 w-4 shrink-0 text-primary" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Button variant="premium" className="group" size="sm">
                            View Full Breakdown
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}
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
              className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8 text-center"
            >
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Ready to become the next case story?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                We can map your operational pain points and design a practical
                delivery plan around your growth goals.
              </p>
              <div className="mt-6 flex justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/#contact">
                    Start Your Transformation
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

export default CaseStudiesPage;