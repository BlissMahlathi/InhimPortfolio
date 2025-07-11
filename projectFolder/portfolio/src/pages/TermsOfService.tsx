import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Scale,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone,
  DollarSign,
  Users,
  Lock,
  Gavel,
} from "lucide-react";

const TermsOfService = () => {
  const keyTerms = [
    {
      icon: FileText,
      title: "Service Agreement",
      description:
        "Defines the scope of web development and software services we provide.",
    },
    {
      icon: DollarSign,
      title: "Payment Terms",
      description:
        "Clear pricing structure with payments in South African Rand (ZAR).",
    },
    {
      icon: Shield,
      title: "Warranties",
      description:
        "Our commitment to quality and post-launch support guarantees.",
    },
    {
      icon: Users,
      title: "Client Responsibilities",
      description: "What we need from you to ensure project success.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="block text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              These terms govern your use of our web development and software
              services. Please read them carefully before engaging our services.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-green-500" />
                South African Law
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Terms Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the main aspects of our service agreement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTerms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{term.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {term.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Acceptance of Terms
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      By engaging INHIM Trading (Pty) Ltd for web development or
                      software services, you agree to be bound by these Terms of
                      Service. These terms constitute a legally binding
                      agreement between you (the "Client") and us (the "Service
                      Provider").
                    </p>
                    <p className="text-muted-foreground">
                      If you do not agree to these terms, please do not proceed
                      with our services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Description */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Services Description
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We provide the following services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Custom website development and design</li>
                      <li>Web application development</li>
                      <li>E-commerce solutions</li>
                      <li>Business automation software</li>
                      <li>Database design and management</li>
                      <li>Website maintenance and support</li>
                      <li>Digital consultation and strategy</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Specific services will be detailed in individual project
                      proposals and contracts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-primary" />
                    Payment Terms
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Pricing and Currency
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>
                          All prices are quoted in South African Rand (ZAR)
                        </li>
                        <li>Prices include VAT where applicable</li>
                        <li>Custom quotes provided for each project</li>
                        <li>Prices are valid for 30 days from quote date</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Payment Schedule
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>
                          50% deposit required before project commencement
                        </li>
                        <li>Remaining 50% due upon project completion</li>
                        <li>
                          For projects over R10,000: payment in agreed
                          milestones
                        </li>
                        <li>Payment terms: 7 days from invoice date</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Accepted Payment Methods
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Bank transfer (EFT)</li>
                        <li>Cash payments (for local clients)</li>
                        <li>PayPal (international clients)</li>
                        <li>Other methods by arrangement</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-1">
                            Late Payment
                          </h4>
                          <p className="text-sm text-amber-800">
                            Overdue payments may result in project suspension
                            and additional charges of 2% per month.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Client Responsibilities */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Client Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      To ensure project success, clients are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>
                        Providing clear project requirements and specifications
                      </li>
                      <li>
                        Supplying necessary content (text, images, logos) in a
                        timely manner
                      </li>
                      <li>Making timely payments as per agreed schedule</li>
                      <li>
                        Providing feedback and approvals within agreed
                        timeframes
                      </li>
                      <li>Ensuring accuracy of provided information</li>
                      <li>Maintaining confidentiality of access credentials</li>
                      <li>Communicating changes or concerns promptly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Intellectual Property
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Client Ownership
                      </h3>
                      <p className="text-muted-foreground">
                        Upon full payment, clients own all custom code, designs,
                        and content created specifically for their project.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Third-Party Components
                      </h3>
                      <p className="text-muted-foreground">
                        Some projects may include third-party libraries,
                        frameworks, or components subject to their own licenses.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Portfolio Rights
                      </h3>
                      <p className="text-muted-foreground">
                        We reserve the right to showcase completed projects in
                        our portfolio unless specifically agreed otherwise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Warranties and Limitations */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Warranties and Support
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Quality Guarantee
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>30-day warranty on bug fixes for new projects</li>
                        <li>
                          All work tested across major browsers and devices
                        </li>
                        <li>Code follows industry best practices</li>
                        <li>Professional design standards maintained</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Support Services
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Technical support during business hours</li>
                        <li>Documentation provided for complex systems</li>
                        <li>Training sessions available upon request</li>
                        <li>Ongoing maintenance packages available</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Limitations
                      </h3>
                      <p className="text-muted-foreground">
                        Our liability is limited to the total value of the
                        project. We are not responsible for indirect damages,
                        lost profits, or data loss not caused by our negligence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    Project Termination
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Either party may terminate a project under the following
                      conditions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Material breach of contract by either party</li>
                      <li>Non-payment after 30 days written notice</li>
                      <li>Mutual agreement to terminate</li>
                      <li>
                        Scope changes that fundamentally alter the project
                      </li>
                    </ul>
                    <p className="text-muted-foreground">
                      Upon termination, payment is due for all work completed to
                      date. Deliverables will be provided proportional to
                      payment received.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Gavel className="w-6 h-6 text-primary" />
                    Governing Law and Disputes
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      These terms are governed by the laws of South Africa. Any
                      disputes will be resolved through:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Good faith negotiation between parties</li>
                      <li>Mediation through an agreed mediator</li>
                      <li>Arbitration or court proceedings in South Africa</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      For questions about these terms or our services, contact
                      us:
                    </p>
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">
                        INHIM Trading (Pty) Ltd
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <strong>Director:</strong> Hlulani Bliss Mahlathi
                        </p>
                        <p>
                          <strong>Email:</strong> blissmahlathi37@gmail.com
                        </p>
                        <p>
                          <strong>Phone:</strong> 071 523 1720
                        </p>
                        <p>
                          <strong>WhatsApp:</strong> Hlulani Bliss Mahlathi
                        </p>
                        <p>
                          <strong>Location:</strong> Nkowankowa Township, South
                          Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss your project and receive a custom quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Get Quote
                </Button>
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
