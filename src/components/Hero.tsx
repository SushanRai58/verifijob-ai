import { useState } from 'react';
import { Search, Link, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [inputType, setInputType] = useState<'text' | 'url'>('text');
  const [jobText, setJobText] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    status: 'legitimate' | 'suspicious' | null;
    confidence: number;
    reasons: string[];
  } | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      // Demo result based on input
      const hasWarningKeywords = (inputType === 'text' ? jobText : jobUrl)
        .toLowerCase()
        .includes('urgent') || 
        (inputType === 'text' ? jobText : jobUrl)
        .toLowerCase()
        .includes('immediate') ||
        (inputType === 'text' ? jobText : jobUrl)
        .toLowerCase()
        .includes('easy money');

      setResult({
        status: hasWarningKeywords ? 'suspicious' : 'legitimate',
        confidence: hasWarningKeywords ? 85 : 92,
        reasons: hasWarningKeywords 
          ? ['Contains urgent language', 'Promises unrealistic earnings', 'Lacks company details']
          : ['Detailed job description', 'Legitimate company information', 'Realistic salary range']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6 shadow-soft">
            <Shield className="w-4 h-4" />
            AI-Powered Job Verification
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Verify Your Career Path.{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Avoid Scams.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect yourself from fraudulent job postings with our advanced AI detection system. 
            Get instant analysis and transparent results to make informed career decisions.
          </p>
        </div>

        {/* Job Analysis Tool */}
        <Card className="max-w-3xl mx-auto shadow-strong">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Analyze Job Posting
              </h2>
              <p className="text-muted-foreground">
                Paste a job description or enter a job posting URL for instant verification
              </p>
            </div>

            <Tabs value={inputType} onValueChange={(value) => setInputType(value as 'text' | 'url')} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Job Description
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Link className="w-4 h-4" />
                  Job URL
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <Textarea
                  placeholder="Paste the complete job description here..."
                  value={jobText}
                  onChange={(e) => setJobText(e.target.value)}
                  className="min-h-32 resize-none shadow-soft"
                />
              </TabsContent>

              <TabsContent value="url" className="space-y-4">
                <Input
                  type="url"
                  placeholder="https://example.com/job-posting"
                  value={jobUrl}
                  onChange={(e) => setJobUrl(e.target.value)}
                  className="shadow-soft"
                />
              </TabsContent>
            </Tabs>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleAnalyze}
              disabled={isAnalyzing || (!jobText && !jobUrl)}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Analyzing Job...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Analyze Job Posting
                </>
              )}
            </Button>

            {/* Results Display */}
            {result && (
              <div className="mt-8 p-6 border rounded-lg shadow-medium animate-in slide-in-from-bottom-4 duration-500">
                <div className={`flex items-center gap-3 mb-4 p-4 rounded-lg ${
                  result.status === 'legitimate' 
                    ? 'bg-success-light text-success-foreground' 
                    : 'bg-danger-light text-danger-foreground'
                }`}>
                  {result.status === 'legitimate' ? (
                    <Shield className="w-6 h-6" />
                  ) : (
                    <AlertTriangle className="w-6 h-6" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {result.status === 'legitimate' ? 'LEGITIMATE JOB' : 'SUSPICIOUS JOB'}
                    </h3>
                    <p className="text-sm opacity-90">
                      Confidence: {result.confidence}%
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Analysis Reasons:</h4>
                  <ul className="space-y-2">
                    {result.reasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex gap-3">
                  <Button variant="outline" size="sm">
                    View Detailed Report
                  </Button>
                  <Button variant="outline" size="sm">
                    Report False Result
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">Jobs Analyzed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-muted-foreground">Students Protected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;