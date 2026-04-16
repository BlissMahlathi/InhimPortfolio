import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CareersPage = () => {
  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote or Nkowankowa Township",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      description:
        "Build production-ready platforms for businesses solving meaningful operational and growth challenges.",
    },
    {
      title: "UI and UX Designer",
      department: "Design",
      location: "Remote or Nkowankowa Township",
      type: "Full-time",
      experience: "1-3 years",
      skills: ["Figma", "Systems thinking", "Prototyping", "UX Writing"],
      description:
        "Shape high-quality product experiences and design systems for web and mobile products.",
    },
    {
      title: "Junior Developer Internship",
      department: "Engineering",
      location: "Nkowankowa Township",
      type: "Internship",
      experience: "Entry level",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
      description:
        "Learn by shipping real features with mentorship, code review, and clear growth checkpoints.",
    },
  ];

  const culturePillars = [
    {
      icon: Target,
      title: "Outcome ownership",
      description: "We care about shipped impact, not just completed tasks.",
    },
    {
      icon: Users,
      title: "Collaborative execution",
      description: "Design, product, and engineering solve problems together.",
    },
    {
      icon: Sparkles,
      title: "Continuous growth",
      description: "We invest in learning and practical skill progression.",
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
                Careers
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Build products that move
                <span className="headline-gradient"> real businesses forward</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Join a team focused on high-quality execution, practical
                innovation, and measurable impact for companies across South Africa.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {culturePillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.article
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="glass-card section-ring rounded-2xl border-border/70 p-5">
                      <CardContent className="p-0">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/16 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-foreground">{pillar.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {pillar.description}
                        </p>
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
              className="mb-8 text-center"
            >
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Open positions</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Explore current opportunities and grow your career while shipping
                impactful products.
              </p>
            </motion.div>

            <div className="space-y-5">
              {openPositions.map((position, index) => (
                <motion.article
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <Card className="glass-card section-ring rounded-3xl border-border/70">
                    <CardHeader>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <CardTitle className="text-2xl text-foreground">{position.title}</CardTitle>
                          <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            <span className="flex items-center">
                              <Briefcase className="mr-1 h-3.5 w-3.5" />
                              {position.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-3.5 w-3.5" />
                              {position.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3.5 w-3.5" />
                              {position.type}
                            </span>
                          </div>
                        </div>

                        <div className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                          {position.experience}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {position.description}
                      </p>

                      <div className="mb-5 flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <Button className="group" variant="hero" size="sm" asChild>
                        <a href="mailto:careers@hlulanitech.co.za?subject=Application%20for%20position">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </CardContent>
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
                Do not see your role listed?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                We are always open to meeting talented people who align with our
                standards and mission.
              </p>
              <div className="mt-6 flex justify-center">
                <Button variant="premium" size="lg" className="group" asChild>
                  <a href="mailto:careers@hlulanitech.co.za?subject=General%20Application">
                    Send General Application
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

export default CareersPage;