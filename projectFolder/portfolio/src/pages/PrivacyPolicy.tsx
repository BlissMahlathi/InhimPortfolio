import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Mail,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

const PrivacyPolicy = () => {
  const principles = [
    {
      icon: Shield,
      title: "Data Protection",
      description:
        "We implement industry-standard security measures to protect your personal information.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We clearly explain what data we collect, how we use it, and who we share it with.",
    },
    {
      icon: Lock,
      title: "Your Control",
      description:
        "You have the right to access, update, or delete your personal information at any time.",
    },
    {
      icon: Users,
      title: "Limited Sharing",
      description:
        "We never sell your data and only share it when necessary for service delivery.",
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
              Privacy
              <span className="block text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                POPIA Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Privacy Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to protecting your privacy and handling your data
              responsibly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Information We Collect */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Information We Collect
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Personal Information
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        We collect information you provide directly to us, such
                        as:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>
                          Name and contact information (email, phone number)
                        </li>
                        <li>Business information and project requirements</li>
                        <li>Payment and billing information</li>
                        <li>Communications and feedback</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Technical Information
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        We automatically collect certain technical information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>IP address and browser information</li>
                        <li>Device type and operating system</li>
                        <li>Website usage analytics</li>
                        <li>Cookies and similar technologies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We use the information we collect for the following
                      purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Provide and deliver our web development services</li>
                      <li>Process payments and manage billing</li>
                      <li>Communicate with you about projects and services</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                      <li>Prevent fraud and ensure security</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Information Sharing and Disclosure
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We do not sell, trade, or rent your personal information
                      to third parties. We may share your information only in
                      the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>With your explicit consent</li>
                      <li>
                        To service providers who assist in our operations
                        (hosting, payment processing)
                      </li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                    </ul>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-1">
                            Third-Party Services
                          </h4>
                          <p className="text-sm text-blue-800">
                            We use trusted third-party services for hosting,
                            analytics, and payment processing. These providers
                            are contractually bound to protect your data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Data Security
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational
                      measures to protect your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure cloud storage with reputable providers</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-primary" />
                    Your Rights and Choices
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Under the Protection of Personal Information Act (POPIA)
                      and other applicable laws, you have the following rights:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>
                        <strong>Access:</strong> Request a copy of your personal
                        information
                      </li>
                      <li>
                        <strong>Correction:</strong> Request correction of
                        inaccurate information
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your
                        personal information
                      </li>
                      <li>
                        <strong>Objection:</strong> Object to processing of your
                        information
                      </li>
                      <li>
                        <strong>Portability:</strong> Request transfer of your
                        data
                      </li>
                      <li>
                        <strong>Withdraw Consent:</strong> Withdraw consent for
                        processing
                      </li>
                    </ul>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">
                            Exercise Your Rights
                          </h4>
                          <p className="text-sm text-green-800 mb-2">
                            To exercise any of these rights, please contact us
                            at:
                          </p>
                          <p className="text-sm text-green-800">
                            Email: blissmahlathi37@gmail.com
                            <br />
                            Phone: 071 523 1720
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact Us
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">
                        INHIM Trading (Pty) Ltd
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
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

              {/* Updates */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Changes to This Policy
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Posting the updated policy on our website</li>
                      <li>Sending an email notification to registered users</li>
                      <li>Providing notice through our services</li>
                    </ul>
                    <p className="text-muted-foreground">
                      The updated policy will be effective immediately upon
                      posting unless otherwise specified.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help you understand how we protect your privacy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  View Terms of Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
