import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Target,
  Plus,
  Eye,
  Heart,
  Share2
} from "lucide-react";

export const Dashboard = () => {
  const userStats = {
    totalRaised: 87500,
    totalBackers: 234,
    activeCampaigns: 2,
    completedCampaigns: 1,
  };

  const campaigns = [
    {
      id: 1,
      title: "Smart Home Security System with AI Detection",
      status: "active",
      successProbability: 85,
      currentFunding: 87500,
      goal: 100000,
      daysLeft: 15,
      backers: 234,
      views: 5689,
      likes: 456,
    },
    {
      id: 2,
      title: "Eco-Friendly Water Bottle with Smart Tracking",
      status: "draft",
      successProbability: 72,
      currentFunding: 0,
      goal: 25000,
      daysLeft: 0,
      backers: 0,
      views: 0,
      likes: 0,
    },
  ];

  const performanceData = [
    { label: "Campaign Views", value: "5,689", change: "+12%", positive: true },
    { label: "Conversion Rate", value: "4.1%", change: "+0.8%", positive: true },
    { label: "Avg. Pledge", value: "$374", change: "-2%", positive: false },
    { label: "Social Shares", value: "1,234", change: "+18%", positive: true },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "draft": return "bg-warning text-warning-foreground";
      case "completed": return "bg-secondary text-secondary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Creator Dashboard</h1>
              <p className="text-muted-foreground">Manage your campaigns with AI-powered insights</p>
            </div>
            <Button variant="hero" className="mt-4 sm:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>

          {/* Overview Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Raised</CardTitle>
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${userStats.totalRaised.toLocaleString()}</div>
                <p className="text-xs text-success">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Backers</CardTitle>
                  <Users className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.totalBackers}</div>
                <p className="text-xs text-success">+8% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
                  <Target className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.activeCampaigns}</div>
                <p className="text-xs text-muted-foreground">2 running campaigns</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-success">Above platform average</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="campaigns" className="space-y-6">
            <TabsList>
              <TabsTrigger value="campaigns">My Campaigns</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-6">
              <div className="grid gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="border-border bg-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{campaign.title}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(campaign.status)}>
                              {campaign.status}
                            </Badge>
                            <Badge variant="outline">
                              AI Prediction: {campaign.successProbability}%
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {campaign.status === "active" && (
                        <>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">
                                ${campaign.currentFunding.toLocaleString()} / ${campaign.goal.toLocaleString()}
                              </span>
                            </div>
                            <Progress value={(campaign.currentFunding / campaign.goal) * 100} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{((campaign.currentFunding / campaign.goal) * 100).toFixed(1)}% funded</span>
                              <span>{campaign.daysLeft} days left</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-lg font-semibold">{campaign.backers}</div>
                              <div className="text-xs text-muted-foreground">Backers</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold">{campaign.views.toLocaleString()}</div>
                              <div className="text-xs text-muted-foreground">Views</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold">{campaign.likes}</div>
                              <div className="text-xs text-muted-foreground">Likes</div>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {performanceData.map((metric, index) => (
                  <Card key={index} className="border-border bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <p className={`text-xs ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                        {metric.change} from last month
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Detailed analytics for your active campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Detailed analytics charts would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>AI-Powered Insights</CardTitle>
                  <CardDescription>
                    Personalized recommendations to improve your campaign performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <h4 className="font-medium text-success mb-2">Optimization Opportunity</h4>
                      <p className="text-sm text-muted-foreground">
                        Your campaign is performing 15% above predicted rate. Consider extending the duration 
                        by 10 days to maximize funding potential.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                      <h4 className="font-medium text-warning mb-2">Engagement Alert</h4>
                      <p className="text-sm text-muted-foreground">
                        Social media engagement has decreased by 8% this week. Consider posting an update 
                        or behind-the-scenes content.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <h4 className="font-medium text-primary mb-2">Trending Insight</h4>
                      <p className="text-sm text-muted-foreground">
                        Similar campaigns in the Technology category are trending 23% higher than average. 
                        Great timing for your launch!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};