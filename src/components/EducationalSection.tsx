import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertTriangle, 
  CreditCard, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  DollarSign,
  Shield,
  BookOpen,
  Eye
} from 'lucide-react';

const EducationalSection = () => {
  const redFlags = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Upfront Payment Requests",
      description: "Legitimate employers never ask for money upfront for training, equipment, or background checks.",
      examples: ["Registration fees", "Training materials costs", "Equipment deposits", "Processing fees"]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Suspicious Contact Methods",
      description: "Professional companies use official email domains and proper communication channels.",
      examples: ["Gmail/Yahoo for business", "WhatsApp-only communication", "No phone number", "Vague addresses"]
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Personal Information Fishing",
      description: "Be cautious of jobs requesting sensitive information before formal interviews.",
      examples: ["SSN in initial application", "Bank account details", "Credit card information", "Passport copies"]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Unrealistic Offers",
      description: "If it sounds too good to be true, it probably is. Research market rates.",
      examples: ["Extremely high pay for simple work", "Guaranteed income", "Work-from-home with no experience", "Instant hiring"]
    }
  ];

  const safetyTips = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Research the Company",
      description: "Verify company legitimacy through multiple sources before applying.",
      tips: [
        "Check company website and social media presence",
        "Look up reviews on Glassdoor or similar platforms", 
        "Verify business registration and licenses",
        "Search for company news and press releases"
      ]
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Verify Job Postings",
      description: "Cross-check job details and requirements across platforms.",
      tips: [
        "Compare similar jobs on multiple job boards",
        "Check if the same job is posted by different companies",
        "Verify job requirements match industry standards",
        "Look for consistent company information"
      ]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Interview Best Practices",
      description: "Professional interviews follow certain standards and protocols.",
      tips: [
        "Interviews should be scheduled in advance",
        "Meet in professional locations or video calls",
        "Interviewer should know your background",
        "Questions should be job-related and professional"
      ]
    }
  ];

  const scamTypes = [
    {
      type: "Reshipping Scams",
      description: "You receive packages to forward elsewhere, unknowingly participating in fraud.",
      warning: "You could face legal consequences for handling stolen goods."
    },
    {
      type: "Check Cashing Scams", 
      description: "Fake jobs involving cashing checks or money transfers.",
      warning: "Banks will hold you responsible when fake checks bounce."
    },
    {
      type: "Identity Theft Jobs",
      description: "Positions requiring extensive personal information upfront.",
      warning: "Your identity could be stolen and used for fraudulent activities."
    },
    {
      type: "Pyramid Schemes",
      description: "Jobs focusing on recruiting others rather than selling products.",
      warning: "Most participants lose money in these unsustainable models."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Job Scam Prevention Guide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about common scam tactics and learn how to protect yourself in the job market.
          </p>
        </div>

        <Tabs defaultValue="red-flags" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="red-flags" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Red Flags
            </TabsTrigger>
            <TabsTrigger value="safety-tips" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Safety Tips
            </TabsTrigger>
            <TabsTrigger value="scam-types" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Scam Types
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Glossary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="red-flags" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, index) => (
                <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-destructive">
                      {flag.icon}
                      {flag.title}
                    </CardTitle>
                    <CardDescription>{flag.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Watch out for:</h5>
                      <ul className="space-y-1">
                        {flag.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="safety-tips" className="space-y-6">
            <div className="grid gap-6">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                      {tip.icon}
                      {tip.title}
                    </CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {tip.tips.map((tipItem, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-sm">{tipItem}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scam-types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {scamTypes.map((scam, index) => (
                <Card key={index} className="border-warning/20">
                  <CardHeader>
                    <CardTitle className="text-warning">{scam.type}</CardTitle>
                    <CardDescription>{scam.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert className="border-destructive/20 bg-destructive/5">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <AlertDescription className="text-destructive font-medium">
                        {scam.warning}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="glossary" className="space-y-6">
            <div className="grid gap-4">
              {[
                { term: "Phishing", definition: "Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities." },
                { term: "Social Engineering", definition: "Manipulation techniques used to trick people into divulging confidential information." },
                { term: "Advance Fee Fraud", definition: "Scams requiring upfront payment with promises of larger returns or employment." },
                { term: "MLM (Multi-Level Marketing)", definition: "Business model focusing on recruiting distributors, often resembling pyramid schemes." },
                { term: "Work-from-Home Scam", definition: "Fraudulent job offers promising easy remote work for unrealistic compensation." },
                { term: "Background Check Scam", definition: "Fake employers requesting payment for background verification services." },
                { term: "Overpayment Scam", definition: "Scammers send fake payments exceeding agreed amounts, requesting refunds of excess." },
                { term: "Employment Agency Scam", definition: "Fake recruitment agencies charging fees for job placement services." }
              ].map((item, index) => (
                <Card key={index} className="border-secondary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <h4 className="font-semibold text-primary min-w-fit">{item.term}</h4>
                      <div className="w-full h-px bg-border hidden md:block" />
                      <p className="text-sm text-muted-foreground">{item.definition}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EducationalSection;