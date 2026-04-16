import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Business Discovery",
      description:
        "We uncover revenue constraints, workflow friction, and customer experience gaps.",
      details: [
        "Stakeholder workshop",
        "Problem framing",
        "Customer journey mapping",
        "Opportunity summary",
      ],
      duration: "Week 1",
    },
    {
      icon: Lightbulb,
      title: "Product Blueprint",
      description:
        "We translate strategy into clear delivery milestones and technical architecture.",
      details: [
        "Solution architecture",
        "Scope prioritization",
        "Roadmap and milestones",
        "KPI definitions",
      ],
      duration: "Week 2",
    },
    {
      icon: Code,
      title: "Build & QA",
      description:
        "Design and engineering move together in short, transparent cycles with weekly demos.",
      details: [
        "Feature sprints",
        "Design QA",
        "Automated testing",
        "Performance checks",
      ],
      duration: "Week 3+",
    },
    {
      icon: Rocket,
      title: "Launch & Iterate",
      description:
        "After launch, we optimize based on analytics, user behavior, and business targets.",
      details: [
        "Release planning",
        "Monitoring setup",
        "Team handover",
        "Growth iterations",
      ],
      duration: "Ongoing",
    },
  ];

  const achievements = [
    { metric: "99.95%", label: "Platform uptime target" },
    { metric: "24h", label: "Average response window" },
    { metric: "1 wk", label: "Sprint cadence" },
    { metric: "3x", label: "Average delivery acceleration" },
  ];

  return (
    <section id="process" className="section-shell">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Delivery Process
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Structured execution,
            <span className="headline-gradient"> visible progress</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Our four-stage model keeps strategy, design, and engineering aligned
            so each release moves your business forward.
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative"
            >
              <Card className="glass-card section-ring h-full rounded-3xl border-border/70">
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-primary/16 px-3 py-1 text-xs font-semibold text-primary">
                      Step {index + 1}
                    </span>
                    <span className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/55 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <ArrowRight className="pointer-events-none absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/40 xl:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8"
        >
          <div className="mb-7 text-center">
            <h3 className="text-2xl font-bold text-foreground">Execution standards</h3>
            <p className="mt-2 text-muted-foreground">
              Operational discipline that helps teams ship with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="rounded-2xl border border-border/60 bg-background/35 p-4 text-center">
                <p className="text-3xl font-extrabold text-primary">{achievement.metric}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.17em] text-muted-foreground">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
