import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircuitBoard,
  Globe,
  Sparkles,
  ShieldCheck,
  TimerReset,
  TrendingUp,
  PlayCircle,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const titleWordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  const headline = [
    "We",
    "Engineer",
    "Revenue-Ready",
    "Digital",
    "Experiences",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/#${id}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleWordRefs.current, {
        transformPerspective: 500,
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          titleWordRefs.current,
          {
            y: 44,
            opacity: 0,
            rotateX: -80,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.08,
          }
        )
        .fromTo(
          subtitleRef.current,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        )
        .fromTo(
          badgeRef.current,
          {
            y: 16,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  const proofs = [
    {
      label: "Products shipped",
      value: <CountUp end={57} suffix="+" />,
    },
    {
      label: "Avg. launch speed",
      value: <CountUp end={3} suffix="x" />,
    },
    {
      label: "Client retention",
      value: <CountUp end={98} suffix="%" />,
    },
  ];

  const operatingModel = [
    {
      icon: ShieldCheck,
      title: "Strategic architecture",
      text: "We design systems around conversion, operations, and long-term scale.",
    },
    {
      icon: TimerReset,
      title: "Faster execution",
      text: "AI-accelerated build cycles remove bottlenecks without sacrificing quality.",
    },
    {
      icon: TrendingUp,
      title: "Measurable growth",
      text: "Every release is mapped to outcomes: leads, retention, and operational lift.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 mesh-background" />
      <div className="absolute inset-0 grid-fade opacity-85" />
      <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 pb-14 pt-8 sm:pb-16 sm:pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div
              ref={badgeRef}
              className="mb-6 hidden w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary/85 sm:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI delivery lab for ambitious brands
            </div>

            <h1 className="max-w-4xl text-[2rem] font-extrabold leading-[1.04] text-foreground sm:text-5xl lg:text-7xl">
              {headline.map((word, index) => (
                <span
                  key={word + index}
                  ref={(element) => {
                    titleWordRefs.current[index] = element;
                  }}
                  className={`mr-3 inline-block ${
                    word === "Revenue-Ready" || word === "Experiences"
                      ? "headline-gradient"
                      : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={subtitleRef}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl"
            >
              INHIM Trading builds premium websites and business platforms that
              improve how teams sell, deliver, and grow. We blend strategy,
              product design, and engineering to create systems that perform in
              the real world.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Start a Project Sprint
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="premium"
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                <PlayCircle className="h-5 w-5" />
                View Case Stories
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4"
            >
              {proofs.map((proof) => (
                <div
                  key={proof.label}
                  className="section-ring rounded-2xl bg-background/35 p-3.5 sm:p-4"
                >
                  <p className="text-xl font-extrabold text-foreground sm:text-3xl">
                    {proof.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{proof.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="glass-card section-ring rounded-3xl p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
              Operating model
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground">
              From business challenge to shipped result
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We run lean product squads focused on measurable outcomes, with
              transparent milestones and practical decision support.
            </p>

            <div className="mt-8 space-y-5">
              {operatingModel.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/18 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-border/70 bg-background/35 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Live momentum
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <p className="flex items-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    <CircuitBoard className="mr-1.5 h-3.5 w-3.5 text-primary" />
                    In delivery
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">12</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <p className="flex items-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    <Globe className="mr-1.5 h-3.5 w-3.5 text-primary" />
                    Active clients
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">31</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
