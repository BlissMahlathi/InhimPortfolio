import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes across various industries including restaurants, healthcare, education, real estate, logistics, and more. Our solutions are particularly well-suited for small to medium enterprises looking to digitize their operations.",
    },
    {
      question: "How much does a website or software project cost?",
      answer:
        "Project costs vary based on complexity and requirements. Basic websites start from R50,000, while custom software solutions typically range from R100,000 to R500,000+. We provide detailed quotes after understanding your specific needs during our consultation.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timeline depends on project scope. Simple websites take 2-6 weeks, while complex software systems can take 6-16 weeks. We provide accurate timelines during project planning and keep you updated throughout development.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support packages including bug fixes, security updates, feature enhancements, and technical support. Our team ensures your systems remain secure and up-to-date.",
    },
    {
      question: "Can you help migrate our existing systems?",
      answer:
        "Absolutely! We specialize in helping businesses transition from manual processes or outdated systems to modern digital solutions. We ensure smooth data migration and minimal disruption to your operations.",
    },
    {
      question: "Do you work with clients outside of Limpopo?",
      answer:
        "Yes, while we're based in Nkowankowa Township, we work with clients throughout South Africa and internationally. Most of our collaboration happens remotely, with occasional on-site visits when needed.",
    },
    {
      question: "What makes your AI-assisted development different?",
      answer:
        "We leverage AI tools to accelerate development while maintaining high code quality. This allows us to deliver projects faster and more cost-effectively without compromising on functionality or security.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes! We include user training as part of our project delivery. We ensure your team is comfortable using the new systems and provide documentation and ongoing support.",
    },
    {
      question: "Can you integrate with our existing tools and systems?",
      answer:
        "Most definitely! We specialize in creating solutions that integrate seamlessly with your existing business tools, CRM systems, payment processors, and other software you already use.",
    },
    {
      question:
        "What if we need changes or updates after the project is complete?",
      answer:
        "We offer flexible maintenance plans and can implement changes or new features as your business evolves. We believe in long-term partnerships with our clients.",
    },
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
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Got Questions?
                <span className="block text-primary">We Have Answers</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our services, processes,
                and how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center text-left">
                        <HelpCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help
              you with any questions about our services.
            </p>
            <Button size="lg" className="group">
              Contact Us Directly
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
