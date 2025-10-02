import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Plus, Trash2, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface SavedJob {
  id: string;
  job_title: string;
  company_name: string;
  job_url: string | null;
  verification_status: 'verified' | 'suspicious' | 'unverified' | null;
  notes: string | null;
  created_at: string;
}

const SavedJobs = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [jobs, setJobs] = useState<SavedJob[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    jobUrl: '',
    verificationStatus: 'unverified',
    notes: '',
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchSavedJobs();
    }
  }, [user]);

  const fetchSavedJobs = async () => {
    const { data, error } = await supabase
      .from('saved_jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to load saved jobs.',
      });
      return;
    }

    setJobs((data as SavedJob[]) || []);
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    const { error } = await supabase.from('saved_jobs').insert({
      user_id: user.id,
      job_title: formData.jobTitle,
      company_name: formData.companyName,
      job_url: formData.jobUrl || null,
      verification_status: formData.verificationStatus,
      notes: formData.notes || null,
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to save job. This job URL may already be saved.',
      });
      return;
    }

    toast({
      title: 'Success',
      description: 'Job saved successfully!',
    });

    setFormData({
      jobTitle: '',
      companyName: '',
      jobUrl: '',
      verificationStatus: 'unverified',
      notes: '',
    });
    setShowAddForm(false);
    fetchSavedJobs();
  };

  const handleDeleteJob = async (id: string) => {
    const { error } = await supabase.from('saved_jobs').delete().eq('id', id);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete job.',
      });
      return;
    }

    toast({
      title: 'Deleted',
      description: 'Job removed from saved list.',
    });
    fetchSavedJobs();
  };

  const getStatusBadgeVariant = (status: string | null) => {
    switch (status) {
      case 'verified':
        return 'default';
      case 'suspicious':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Saved Jobs</h1>
              <p className="text-muted-foreground">
                Keep track of job postings you've verified
              </p>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 shadow-medium">
              <CardHeader>
                <CardTitle>Add New Job</CardTitle>
                <CardDescription>Save a job posting for future reference</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddJob} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobUrl">Job URL (Optional)</Label>
                    <Input
                      id="jobUrl"
                      type="url"
                      value={formData.jobUrl}
                      onChange={(e) => setFormData({ ...formData, jobUrl: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="verificationStatus">Verification Status</Label>
                    <Select
                      value={formData.verificationStatus}
                      onValueChange={(value) => setFormData({ ...formData, verificationStatus: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="verified">Verified</SelectItem>
                        <SelectItem value="unverified">Unverified</SelectItem>
                        <SelectItem value="suspicious">Suspicious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Save Job</Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {jobs.length === 0 ? (
            <Card className="shadow-medium">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bookmark className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No saved jobs yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Start saving job postings you've verified to keep track of opportunities
                </p>
                <Button onClick={() => setShowAddForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Job
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.job_title}</h3>
                          <Badge variant={getStatusBadgeVariant(job.verification_status)}>
                            {job.verification_status || 'unverified'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{job.company_name}</p>
                        {job.notes && (
                          <p className="text-sm text-muted-foreground mb-3">{job.notes}</p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Saved {new Date(job.created_at).toLocaleDateString()}</span>
                          {job.job_url && (
                            <a
                              href={job.job_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-primary hover:underline"
                            >
                              View Job <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedJobs;
