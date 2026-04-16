import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Campus Eats Online Store",
      description:
        "A modern online food ordering platform for campus students.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      tags: ["React", "Vite", "E-Commerce"],
      liveUrl: "https://campus-eats-five.vercel.app",
      status: "Live",
      category: "E-Commerce",
      impact: "Enabled fast, convenient food ordering for students.",
    },
    {
      title: "HotelY Service Platform",
      description: "A BnB and hotel service management web app.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "Hospitality"],
      liveUrl: "https://bnb-hotely.onrender.com",
      status: "Live",
      category: "Hospitality",
      impact: "Streamlined guest and service management.",
    },
    {
      title: "Online Mini Store",
      description: "A simple, responsive online mini store.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      tags: ["React", "Netlify", "E-Commerce"],
      liveUrl: "https://phenomenal-torte-764818.netlify.app",
      status: "Live",
      category: "E-Commerce",
      impact: "Enabled quick product launches for small businesses.",
    },
    {
      title: "Hacking Alert Prank",
      description: "A fun web prank app for friends.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=300&fit=crop",
      tags: ["React", "Netlify", "Fun"],
      liveUrl: "https://delicate-concha-2e8ec5.netlify.app",
      githubUrl: "#",
      status: "Live",
      category: "Entertainment",
      impact: "Viral fun among students and friends.",
    },
    {
      title: "Ribs Delivery WebApp",
      description: "A delivery platform for Ribs and fast food.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      tags: ["React", "Vercel", "Delivery"],
      liveUrl: "https://danalphluja.vercel.app",
      status: "Live",
      category: "Delivery",
      impact: "Improved local food delivery logistics.",
    },
    {
      title: "Retema Student Accommodation",
      description: "A web platform for student accommodation listings.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&h=300&fit=crop",
      tags: ["React", "Netlify", "Accommodation"],
      liveUrl: "https://retema.netlify.app",
      status: "Live",
      category: "Accommodation",
      impact: "Simplified student housing search.",
    },
    {
      title: "Student Social Network",
      description: "A social network for university students.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=300&fit=crop",
      tags: ["React", "Vercel", "Social"],
      liveUrl: "https://univensocials.vercel.app",
      status: "Live",
      category: "Social",
      impact: "Connected students across campuses.",
    },
    {
      title: "OGT Residence WebApp",
      description: "A web app for OGT student residence management.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&h=300&fit=crop",
      tags: ["React", "Netlify", "Accommodation"],
      liveUrl: "https://ogtresidence.netlify.app",
      githubUrl: "#",
      status: "Live",
      category: "Accommodation",
      impact: "Streamlined residence operations.",
    },
    {
      title: "Health Care Service Portal",
      description: "A portal for health care service management.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      tags: ["React", "Vercel", "Healthcare"],
      liveUrl: "https://test-tau-green-64.vercel.app",
      status: "Live",
      category: "Healthcare",
      impact: "Improved access to health services.",
    },
    {
      title: "Passion Mogale Borehole Drilling",
      description: "A business site for borehole drilling services.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      tags: ["React", "Netlify", "Business"],
      liveUrl: "https://passionmogale.netlify.app",
      status: "Live",
      category: "Business",
      impact: "Increased local business visibility.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/25";
      case "In Development":
        return "bg-blue-500/10 text-blue-300 border-blue-500/25";
      case "Beta":
        return "bg-yellow-500/10 text-yellow-300 border-yellow-500/25";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Products built for
            <span className="headline-gradient"> measurable outcomes</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A sample of recent solutions delivered for South African businesses,
            startups, and operational teams.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Card className="glass-card section-ring h-full overflow-hidden rounded-3xl border-border/70">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <Badge variant="secondary" className="border border-border/70 bg-background/75 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      {project.impact}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Button variant="premium" size="sm" className="w-full group" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live Project
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
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
          <h3 className="text-3xl font-bold text-foreground">Ready to become the next case story?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We can design, build, and launch your product with clear timelines,
            weekly progress, and measurable business targets.
          </p>
          <Button size="lg" className="group mt-6" variant="hero">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
