import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const BusinessSolutions = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Performance Intelligence Dashboard",
      description:
        "Unify operations, sales, and customer data into a single executive dashboard with decision-ready insights.",
      features: [
        "Real-time KPI tracking",
        "Cross-team visibility",
        "Automated reports",
        "Forecast views",
      ],
      benefits: [
        "Faster decision cycles",
        "Reduced reporting overhead",
        "Executive-level clarity",
      ],
      category: "Analytics",
    },
    {
      icon: Calendar,
      title: "Client Booking & Service Flow",
      description:
        "Replace manual scheduling with smart booking journeys, reminders, and seamless handoff to your team.",
      features: [
        "Online booking engine",
        "Automated reminder cadence",
        "Calendar sync",
        "Payment-ready workflows",
      ],
      benefits: [
        "Lower no-show rates",
        "Improved customer convenience",
        "More predictable scheduling",
      ],
      category: "Scheduling",
    },
    {
      icon: FileText,
      title: "Document Operations Hub",
      description:
        "Give teams one secure place to manage files, approvals, and compliance records.",
      features: [
        "Role-based access",
        "Version history",
        "Approval routing",
        "Full-text search",
      ],
      benefits: [
        "Less admin time",
        "Compliance confidence",
        "Faster collaboration",
      ],
      category: "Management",
    },
    {
      icon: Users,
      title: "Customer Lifecycle CRM",
      description:
        "Track leads to retention with custom pipelines, automations, and contextual customer records.",
      features: [
        "Pipeline visibility",
        "Automated follow-ups",
        "Opportunity scoring",
        "Revenue reporting",
      ],
      benefits: [
        "Stronger conversion rates",
        "Improved account continuity",
        "More reliable forecasting",
      ],
      category: "CRM",
    },
  ];

  return (
    <section id="solutions" className="section-shell">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Solution Tracks
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Business systems that remove
            <span className="headline-gradient"> operational drag</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We craft targeted solutions to address your most expensive bottlenecks
            and unlock sustainable growth capacity.
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card className="glass-card section-ring h-full rounded-3xl border-border/70">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/16 px-3 py-1 text-xs font-semibold text-primary">
                      {solution.category}
                    </span>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/55 text-primary">
                    <solution.icon className="h-5 w-5" />
                  </div>

                  <CardTitle className="text-2xl text-card-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Core capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Business impact
                    </p>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="premium" size="sm" className="group w-full">
                    Explore Blueprint
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground">Need a custom system?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We can combine modules from multiple tracks into one integrated
            platform tailored to your team and your market.
          </p>
          <div className="mt-6 flex justify-center">
            <Button size="lg" variant="hero" className="group">
              Request Architecture Session
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
