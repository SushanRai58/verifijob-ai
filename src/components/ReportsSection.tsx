import { useState } from 'react';
import { AlertTriangle, Send, Shield, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ReportsSection = () => {
  const [reportForm, setReportForm] = useState({
    jobUrl: '',
    reason: '',
    details: '',
    contact: ''
  });
  const { toast } = useToast();

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate report submission
    toast({
      title: "Report Submitted Successfully",
      description: "Thank you for helping keep our community safe. We'll review your report within 24 hours.",
    });
    
    setReportForm({
      jobUrl: '',
      reason: '',
      details: '',
      contact: ''
    });
  };

  const reportReasons = [
    "Unrealistic salary promises",
    "Requests upfront payment",
    "Poor grammar/spelling",
    "No company information",
    "Urgent/immediate hiring",
    "Work from home scam",
    "Personal information phishing",
    "Other suspicious activity"
  ];

  const communityStats = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Reports Submitted",
      value: "2,847",
      description: "Community-submitted suspicious job reports",
      color: "text-warning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Safe",
      value: "8,523",
      description: "Jobs verified as legitimate postings",
      color: "text-success"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Active Users",
      value: "12,450",
      description: "Students and professionals using our platform",
      color: "text-primary"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Accuracy Rate",
      value: "95.2%",
      description: "AI model accuracy in detecting fake jobs",
      color: "text-accent-foreground"
    }
  ];

  return (
    <section id="reports" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Community Intelligence
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Help protect fellow job seekers by reporting suspicious postings. 
            Together, we can build a safer employment ecosystem.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Report Form */}
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Report Suspicious Job
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReport} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Job Posting URL *
                    </label>
                    <Input
                      type="url"
                      placeholder="https://example.com/suspicious-job"
                      value={reportForm.jobUrl}
                      onChange={(e) => setReportForm({ ...reportForm, jobUrl: e.target.value })}
                      required
                      className="shadow-soft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Reason *
                    </label>
                    <Select 
                      value={reportForm.reason} 
                      onValueChange={(value) => setReportForm({ ...reportForm, reason: value })}
                    >
                      <SelectTrigger className="shadow-soft">
                        <SelectValue placeholder="Select the main concern" />
                      </SelectTrigger>
                      <SelectContent>
                        {reportReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      placeholder="Provide any additional information that might help our review..."
                      value={reportForm.details}
                      onChange={(e) => setReportForm({ ...reportForm, details: e.target.value })}
                      className="min-h-24 shadow-soft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Email (Optional)
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={reportForm.contact}
                      onChange={(e) => setReportForm({ ...reportForm, contact: e.target.value })}
                      className="shadow-soft"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll only contact you if we need clarification about your report
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={!reportForm.jobUrl || !reportForm.reason}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Report
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Anonymous Reporting:</strong> All reports are reviewed manually by our team. 
                    Your personal information is kept confidential and used only for verification purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6">
                    {communityStats.map((stat, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className={`${stat.color} p-2 bg-background rounded-lg shadow-soft`}>
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="font-medium text-foreground">{stat.title}</div>
                          <div className="text-sm text-muted-foreground">{stat.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Recent Community Alerts
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-warning bg-warning-light rounded-r">
                      <p className="text-sm font-medium">High volume of fake "Data Entry" jobs detected</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <div className="p-3 border-l-4 border-danger bg-danger-light rounded-r">
                      <p className="text-sm font-medium">Scam targeting graphic design students</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                    <div className="p-3 border-l-4 border-success bg-success-light rounded-r">
                      <p className="text-sm font-medium">Verified legitimate internship program</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;