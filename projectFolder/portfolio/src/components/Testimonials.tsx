import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Campus Eats Online Store",
      role: "Business",
      company: "campus-eats-five.vercel.app",
      image: "",
      content:
        "Our online food ordering platform for students is now seamless and fast. Orders are up and students love the convenience!",
      rating: 5,
    },
    {
      name: "HotelY Service Platform",
      role: "BnB & Hotel",
      company: "bnb-hotely.onrender.com",
      image: "",
      content:
        "Managing guests and services is now effortless. The platform is reliable and easy for our staff and guests.",
      rating: 5,
    },
    {
      name: "Retema Student Accommodation",
      role: "Accommodation",
      company: "retema.netlify.app",
      image: "",
      content:
        "Listing and finding student accommodation is so much easier. Our occupancy rates have improved!",
      rating: 5,
    },
    {
      name: "Ribs Delivery WebApp",
      role: "Delivery",
      company: "danalphluja.vercel.app",
      image: "",
      content:
        "Our food delivery business runs smoother and customers get their orders faster. Highly recommended!",
      rating: 5,
    },
    {
      name: "Student Social Network",
      role: "Social Platform",
      company: "univensocials.vercel.app",
      image: "",
      content:
        "Students are more connected than ever. Engagement and activity on campus have increased thanks to this platform.",
      rating: 5,
    },
    {
      name: "Passion Mogale Borehole Drilling",
      role: "Business",
      company: "passionmogale.netlify.app",
      image: "",
      content:
        "Our business is now visible online and we get more client inquiries every week. Great job!",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-current text-primary-glow" : "text-muted-foreground/40"
        }`}
      />
    ));

  return (
    <section id="testimonials" className="section-shell">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Client Voice
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Trusted by teams that value
            <span className="headline-gradient"> execution quality</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Real outcomes from business owners who partnered with us to modernize
            operations and ship digital products.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="glass-card section-ring relative h-full rounded-3xl border-border/70">
                <CardContent className="p-6">
                  <Quote className="absolute right-6 top-6 h-7 w-7 text-primary/30" />

                  <div className="mb-4 flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="mt-6 border-t border-border/65 pt-5">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11 border border-border/70">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((namePart) => namePart[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="section-ring rounded-3xl border border-border/70 bg-card/45 p-8"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "100%", label: "Satisfaction focus" },
              { value: "50+", label: "Projects launched" },
              { value: "24h", label: "Average response" },
              { value: "3x", label: "Speed improvement" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/65 bg-background/35 p-4 text-center"
              >
                <p className="text-3xl font-extrabold text-primary">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;