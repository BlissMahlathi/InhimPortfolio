import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in South African Business Development",
      excerpt:
        "How practical AI integration is helping local teams reduce delivery cycles and improve quality of execution.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "AI and Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=680&h=420&fit=crop",
    },
    {
      title: "Why Every South African SME Needs a Digital Presence",
      excerpt:
        "A practical framework for owners building stronger demand generation through digital channels.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "Business Strategy",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=680&h=420&fit=crop",
    },
    {
      title: "Building Responsive Websites: A Complete Guide",
      excerpt:
        "Design and engineering patterns for fast, reliable interfaces across mobile, tablet, and desktop.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=680&h=420&fit=crop",
    },
    {
      title: "Database Design Best Practices for Business Applications",
      excerpt:
        "Key architecture decisions that improve reliability, maintainability, and analytics readiness.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=680&h=420&fit=crop",
    },
    {
      title: "The Rise of Progressive Web Apps in Africa",
      excerpt:
        "Why PWAs remain one of the strongest channels for affordable mobile-grade user experiences.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-01",
      readTime: "6 min read",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=680&h=420&fit=crop",
    },
    {
      title: "Cybersecurity Essentials for Small Businesses",
      excerpt:
        "Practical security controls every growing company should implement before scaling its operations.",
      author: "Hlulani Bliss Mahlathi",
      date: "2024-12-28",
      readTime: "9 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=680&h=420&fit=crop",
    },
  ];

  const [featuredPost, ...otherPosts] = blogPosts;
  const categories = [
    "All",
    "AI and Technology",
    "Business Strategy",
    "Web Development",
    "Backend Development",
    "Mobile Development",
    "Security",
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
                Blog
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Practical insights for teams
                <span className="headline-gradient"> building digital leverage</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Strategy, product, and engineering perspectives from our work
                with South African businesses and growth-focused teams.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "hero" : "premium"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <Card className="glass-card section-ring overflow-hidden rounded-3xl border-border/70">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="min-h-[280px]">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/85">
                      Featured
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <span className="flex items-center">
                        <User className="mr-1 h-3.5 w-3.5" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <div className="mt-6">
                      <Button variant="hero" size="sm" className="group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <Card className="glass-card section-ring h-full overflow-hidden rounded-3xl border-border/70">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/75 px-3 py-1 text-xs font-semibold text-primary">
                        {post.category}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="mb-5 space-y-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        <p className="flex items-center">
                          <User className="mr-1 h-3.5 w-3.5" />
                          {post.author}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <Button variant="premium" className="group w-full" size="sm">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                Get our best insights in your inbox
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Monthly breakdowns on digital growth, product execution, and
                practical engineering decisions.
              </p>

              <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="border-border/70 bg-background/35"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;