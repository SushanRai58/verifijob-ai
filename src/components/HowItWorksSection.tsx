import { Brain, Search, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Submit Job Posting",
      description: "Paste the job description or provide a URL to the job posting you want to verify.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analysis",
      description: "Our advanced NLP models analyze linguistic patterns, company information, and content structure.",
      color: "bg-warning/10 text-warning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Get instant results with confidence scores and detailed explanations of flagged elements.",
      color: "bg-success/10 text-success"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Intelligence",
      description: "Contribute to our database by reporting suspicious postings and helping other job seekers.",
      color: "bg-accent text-accent-foreground"
    }
  ];

  const features = [
    "Natural Language Processing for content analysis",
    "Machine Learning models trained on verified data",
    "Real-time risk scoring and confidence metrics",
    "Interpretable results with flagged keywords",
    "Community reporting and verification system",
    "Integration with university placement portals"
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Our AI Detection Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our system combines advanced Natural Language Processing with Machine Learning 
            to provide accurate, transparent job posting verification.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-lg ${step.color} flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Features */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Advanced AI Technology
                </h3>
                <p className="text-muted-foreground">
                  Built with cutting-edge machine learning and natural language processing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-hero rounded-lg text-center">
                <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                  Contributing to SDG 8: Decent Work and Economic Growth
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  Our system promotes fair hiring practices, strengthens trust between applicants and employers, 
                  and creates a foundation for ethical employment verification across industries.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;