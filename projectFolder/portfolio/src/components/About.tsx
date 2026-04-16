import { Card, CardContent } from "@/components/ui/card";
import myPicture from "@/assets/myPicture.jpg";
import {
  Brain,
  Rocket,
  Target,
  TrendingUp,
  Mail,
  MessageCircle,
  Phone,
  Code,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Code, value: "50+", label: "Projects delivered" },
    { icon: Users, value: "30+", label: "Business partners" },
    { icon: Zap, value: "3x", label: "Faster product cycles" },
    { icon: Award, value: "100%", label: "Client-focused execution" },
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-accelerated delivery",
      description:
        "We use practical AI workflows to move faster while preserving engineering quality and reliability.",
    },
    {
      icon: Rocket,
      title: "Business-first strategy",
      description:
        "Every feature is mapped to a business outcome, whether that is lead generation, retention, or operational speed.",
    },
    {
      icon: Target,
      title: "Operational transformation",
      description:
        "We modernize workflows so teams can execute with less friction and better visibility across departments.",
    },
    {
      icon: TrendingUp,
      title: "Scalable foundations",
      description:
        "Your digital stack is built to evolve as your company grows, without expensive rebuilds.",
    },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            About Inhim Trading
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Building digital systems that make
            <span className="headline-gradient"> teams unstoppable</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We are a South African engineering partner helping ambitious
            businesses modernize how they market, sell, and operate.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card section-ring h-full rounded-3xl border-border/70 p-6 md:p-8">
              <CardContent className="p-0">
                <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                  <div className="text-center">
                    <img
                      src={myPicture}
                      alt="Hlulani Bliss Mahlathi"
                      className="mx-auto h-52 w-52 rounded-3xl border border-border/70 object-cover shadow-card"
                    />
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      Hlulani Bliss Mahlathi
                    </h3>
                    <p className="text-sm text-primary">Founder & CEO</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Nkowankowa Township, SA
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-foreground">
                      The mission
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      We believe local businesses deserve world-class digital
                      systems. Our work combines strategic thinking, modern
                      engineering, and practical execution so teams can operate
                      better and grow with confidence.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Through AI-assisted delivery and product discipline, we
                      deliver enterprise-level quality with speed and clarity.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <a
                        href="tel:0715231720"
                        className="rounded-xl border border-border/70 bg-background/35 p-3 text-sm text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                      >
                        <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                          <Phone className="h-4 w-4 text-primary" />
                          Call
                        </div>
                        071 523 1720
                      </a>
                      <a
                        href="mailto:blissmahlathi37@gmail.com"
                        className="rounded-xl border border-border/70 bg-background/35 p-3 text-sm text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                      >
                        <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                          <Mail className="h-4 w-4 text-primary" />
                          Email
                        </div>
                        blissmahlathi37@gmail.com
                      </a>
                      <a
                        href="https://wa.me/27715231720"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-border/70 bg-background/35 p-3 text-sm text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                      >
                        <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          WhatsApp
                        </div>
                        Quick business chat
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card
                  key={stat.label}
                  className="glass-card section-ring rounded-2xl border-border/70 p-5"
                >
                  <CardContent className="p-0">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/16 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.title}
                className="glass-card section-ring rounded-2xl border-border/70 p-5"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/16 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;