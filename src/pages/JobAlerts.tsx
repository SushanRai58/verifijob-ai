import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Bell, Plus, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface JobAlert {
  id: string;
  alert_name: string;
  keywords: string[];
  location: string | null;
  alert_frequency: 'daily' | 'weekly' | 'instant' | null;
  is_active: boolean;
  created_at: string;
}

const JobAlerts = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [alerts, setAlerts] = useState<JobAlert[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    alertName: '',
    keywords: '',
    location: '',
    alertFrequency: 'daily',
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchJobAlerts();
    }
  }, [user]);

  const fetchJobAlerts = async () => {
    const { data, error } = await supabase
      .from('job_alerts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to load job alerts.',
      });
      return;
    }

    setAlerts((data as JobAlert[]) || []);
  };

  const handleAddAlert = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    const keywordsArray = formData.keywords.split(',').map((k) => k.trim()).filter(Boolean);

    if (keywordsArray.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter at least one keyword.',
      });
      return;
    }

    const { error } = await supabase.from('job_alerts').insert({
      user_id: user.id,
      alert_name: formData.alertName,
      keywords: keywordsArray,
      location: formData.location || null,
      alert_frequency: formData.alertFrequency,
      is_active: true,
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create job alert.',
      });
      return;
    }

    toast({
      title: 'Success',
      description: 'Job alert created successfully!',
    });

    setFormData({
      alertName: '',
      keywords: '',
      location: '',
      alertFrequency: 'daily',
    });
    setShowAddForm(false);
    fetchJobAlerts();
  };

  const handleToggleAlert = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('job_alerts')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update alert status.',
      });
      return;
    }

    fetchJobAlerts();
  };

  const handleDeleteAlert = async (id: string) => {
    const { error } = await supabase.from('job_alerts').delete().eq('id', id);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete alert.',
      });
      return;
    }

    toast({
      title: 'Deleted',
      description: 'Job alert removed.',
    });
    fetchJobAlerts();
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Job Alerts</h1>
              <p className="text-muted-foreground">
                Get notified about safe job opportunities matching your criteria
              </p>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Alert
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 shadow-medium">
              <CardHeader>
                <CardTitle>Create Job Alert</CardTitle>
                <CardDescription>
                  Set up notifications for jobs matching your safe search criteria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddAlert} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="alertName">Alert Name</Label>
                    <Input
                      id="alertName"
                      placeholder="e.g., Remote Developer Jobs"
                      value={formData.alertName}
                      onChange={(e) => setFormData({ ...formData, alertName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                    <Input
                      id="keywords"
                      placeholder="e.g., developer, remote, react"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Separate multiple keywords with commas
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      placeholder="e.g., New York, Remote"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alertFrequency">Alert Frequency</Label>
                    <Select
                      value={formData.alertFrequency}
                      onValueChange={(value) => setFormData({ ...formData, alertFrequency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instant">Instant</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Create Alert</Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {alerts.length === 0 ? (
            <Card className="shadow-medium">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bell className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No job alerts yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Create alerts to get notified about safe job opportunities
                </p>
                <Button onClick={() => setShowAddForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Alert
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <Card key={alert.id} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{alert.alert_name}</h3>
                          {alert.is_active ? (
                            <Badge>Active</Badge>
                          ) : (
                            <Badge variant="secondary">Paused</Badge>
                          )}
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex flex-wrap gap-2">
                            {alert.keywords.map((keyword, index) => (
                              <Badge key={index} variant="outline">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                          {alert.location && (
                            <p className="text-sm text-muted-foreground">
                              Location: {alert.location}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            Frequency: {alert.alert_frequency}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={alert.is_active}
                              onCheckedChange={() => handleToggleAlert(alert.id, alert.is_active)}
                            />
                            <span className="text-sm text-muted-foreground">
                              {alert.is_active ? 'Active' : 'Paused'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteAlert(alert.id)}
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

export default JobAlerts;
