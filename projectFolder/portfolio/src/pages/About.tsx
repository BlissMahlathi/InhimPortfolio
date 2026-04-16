import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Brain,
  Code,
  Mail,
  MessageCircle,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import myPicture from "@/assets/myPicture.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  const achievements = [
    { icon: Code, number: "50+", label: "Projects delivered" },
    { icon: Users, number: "30+", label: "Business partners" },
    { icon: Award, number: "100%", label: "Execution commitment" },
    { icon: Zap, number: "3x", label: "Faster product cycles" },
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-guided engineering",
      description:
        "We use AI where it accelerates quality, never where it compromises reliability.",
    },
    {
      icon: Target,
      title: "Outcome-first delivery",
      description:
        "Every sprint is tied to measurable business outcomes, not vanity output.",
    },
    {
      icon: TrendingUp,
      title: "Growth-oriented thinking",
      description:
        "We design digital systems to scale with your team, products, and operations.",
    },
    {
      icon: Users,
      title: "Community impact",
      description:
        "Our work helps local businesses become digitally stronger and more competitive.",
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
                About Inhim Trading
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Engineering digital systems
                <span className="headline-gradient"> for real business growth</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We partner with South African businesses to build high-impact
                websites and software that improve operations, clarify offers,
                and drive predictable growth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <Card className="glass-card section-ring rounded-3xl border-border/70 p-6 md:p-8">
                  <CardContent className="p-0">
                    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                      <div className="text-center">
                        <img
                          src={myPicture}
                          alt="Hlulani Bliss Mahlathi"
                          className="mx-auto h-52 w-52 rounded-3xl border border-border/70 object-cover shadow-card"
                        />
                        <h2 className="mt-4 text-2xl font-bold text-foreground">
                          Hlulani Bliss Mahlathi
                        </h2>
                        <p className="text-sm text-primary">Founder & CEO</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Nkowankowa Township, SA
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Our mission</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          We exist to give growing businesses access to premium
                          digital infrastructure that improves performance, team
                          efficiency, and customer experience.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          We combine strategy, design, and engineering into one
                          focused delivery model so projects ship faster and
                          create measurable value.
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
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="grid grid-cols-2 gap-4"
              >
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;

                  return (
                    <Card
                      key={achievement.label}
                      className="glass-card section-ring rounded-2xl border-border/70 p-5"
                    >
                      <CardContent className="p-0">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/16 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-3xl font-extrabold text-foreground">
                          {achievement.number}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {achievement.label}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </motion.div>
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
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Operating principles
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                These principles shape how we collaborate, build, and deliver
                outcomes for each client.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="glass-card section-ring rounded-2xl border-border/70 p-5">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/16 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {value.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
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
              className="section-ring mt-10 rounded-3xl border border-border/70 bg-card/45 p-8 text-center"
            >
              <h3 className="text-3xl font-bold text-foreground">Let’s build together</h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Tell us where your digital infrastructure is currently costing
                you time or growth, and we’ll map the next best move.
              </p>
              <div className="mt-6 flex justify-center">
                <Button size="lg" variant="hero" className="group" asChild>
                  <a href="/#contact">
                    Start Your Project
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

export default AboutPage;