import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import CountUp from "@/components/CountUp";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-16 pb-5 flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Development workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-glow/80 to-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-glow">
            Empowering South African Businesses
            <span className="block bg-gradient-to-r from-primary-glow via-primary to-secondary bg-clip-text text-transparent">
              with AI-Powered Digital Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            INHIM Trading delivers custom web and software development that
            accelerates your business growth, streamlines operations, and
            unlocks new opportunities—right here in South Africa.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Code className="w-8 h-8 mb-2 text-primary-glow" />
              <div className="text-2xl font-bold">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-sm text-primary-foreground/80">
                Projects Delivered
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 text-primary-glow" />
              <div className="text-2xl font-bold">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="text-sm text-primary-foreground/80">
                Client Satisfaction
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 mb-2 text-primary-glow" />
              <div className="text-2xl font-bold">
                <CountUp end={2} suffix="x" />
              </div>
              <div className="text-sm text-primary-foreground/80">
                Faster Delivery (AI-Accelerated)
              </div>
            </div>
          </div>

          {/* Trusted By Row (optional, can add logos later) */}
          <div className="mb-10">
            <span className="uppercase tracking-widest text-xs text-primary-foreground/70">
              Trusted by local businesses & startups
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="premium"
              size="xl"
              onClick={scrollToContact}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
