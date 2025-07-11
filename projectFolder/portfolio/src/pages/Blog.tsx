import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in South African Business Development",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the way we build software solutions for local businesses.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "AI & Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      title: "Why Every South African SME Needs a Digital Presence",
      excerpt:
        "Breaking down the barriers and explaining why digital transformation is crucial for small and medium enterprises in SA.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "Business Strategy",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Building Responsive Websites: A Complete Guide",
      excerpt:
        "Learn the best practices for creating websites that work perfectly across all devices and screen sizes.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      title: "Database Design Best Practices for Business Applications",
      excerpt:
        "Essential principles for designing efficient, scalable databases that grow with your business needs.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    },
    {
      title: "The Rise of Progressive Web Apps in Africa",
      excerpt:
        "How PWAs are bridging the gap between web and mobile experiences in emerging markets.",
      author: "Hlulani Bliss Mahlathi",
      date: "2025-01-01",
      readTime: "6 min read",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    },
    {
      title: "Cybersecurity Essentials for Small Businesses",
      excerpt:
        "Protecting your business data and customer information with practical security measures.",
      author: "Hlulani Bliss Mahlathi",
      date: "2024-12-28",
      readTime: "9 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    },
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Business Strategy",
    "Web Development",
    "Backend Development",
    "Mobile Development",
    "Security",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Our Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Insights & Updates
                <span className="block text-primary">from Our Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay up-to-date with the latest trends in technology, business
                development, and digital transformation insights from our
                development team.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on
              technology and business development.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
