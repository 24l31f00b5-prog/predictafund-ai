import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, TrendingUp, AlertTriangle, CheckCircle, DollarSign, Clock, Target } from "lucide-react";
import { useState, useEffect } from "react";

export const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    duration: "",
    category: "",
  });

  const [aiPrediction, setAiPrediction] = useState({
    successRate: 0,
    confidence: 0,
    suggestions: [] as string[],
  });

  // Mock AI prediction algorithm
  const calculatePrediction = () => {
    const { title, description, goal, duration, category } = formData;
    
    let score = 50; // Base score
    let suggestions = [];

    // Title analysis
    if (title.length < 10) {
      suggestions.push("Consider a more descriptive title (10+ characters)");
    } else if (title.length > 15) {
      score += 10;
    }

    // Description analysis
    if (description.length < 100) {
      suggestions.push("Add more details to your description (100+ characters)");
    } else if (description.length > 200) {
      score += 15;
    }

    // Goal analysis
    const goalNum = parseInt(goal);
    if (goalNum) {
      if (goalNum < 5000) {
        score += 10;
      } else if (goalNum > 100000) {
        score -= 15;
        suggestions.push("Consider lowering your funding goal for better success rate");
      }
    }

    // Duration analysis
    const durationNum = parseInt(duration);
    if (durationNum) {
      if (durationNum >= 20 && durationNum <= 40) {
        score += 10;
      } else if (durationNum > 60) {
        suggestions.push("Campaigns longer than 60 days tend to lose momentum");
      }
    }

    // Category bonus
    if (["Technology", "Design", "Games"].includes(category)) {
      score += 5;
    }

    const finalScore = Math.min(Math.max(score, 0), 100);
    const confidence = Math.min(finalScore + Math.random() * 20, 95);

    if (suggestions.length === 0) {
      suggestions.push("Your campaign looks great! Consider adding images for better appeal.");
    }

    setAiPrediction({
      successRate: finalScore,
      confidence: confidence,
      suggestions: suggestions,
    });
  };

  useEffect(() => {
    const timer = setTimeout(calculatePrediction, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getPredictionColor = (rate: number) => {
    if (rate >= 70) return "text-success";
    if (rate >= 40) return "text-warning";
    return "text-destructive";
  };

  const getPredictionIcon = (rate: number) => {
    if (rate >= 70) return <CheckCircle className="w-5 h-5 text-success" />;
    if (rate >= 40) return <AlertTriangle className="w-5 h-5 text-warning" />;
    return <TrendingUp className="w-5 h-5 text-destructive" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Create Your Campaign</h1>
            <p className="text-xl text-muted-foreground">
              Get real-time AI feedback as you build your campaign
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Campaign Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                  <CardDescription>
                    Fill out your campaign information and watch our AI analyze your success potential
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Campaign Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter your campaign title..."
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Art">Art</SelectItem>
                          <SelectItem value="Games">Games</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="Film">Film</SelectItem>
                          <SelectItem value="Music">Music</SelectItem>
                          <SelectItem value="Publishing">Publishing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Campaign Duration (days)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="30"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">Funding Goal ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="goal"
                        type="number"
                        placeholder="25000"
                        className="pl-10"
                        value={formData.goal}
                        onChange={(e) => handleInputChange("goal", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Campaign Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project, what makes it unique, and why people should support it..."
                      rows={6}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1" variant="outline">
                      Save Draft
                    </Button>
                    <Button className="flex-1" variant="fund">
                      Launch Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Analysis Panel */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <CardTitle>AI Success Analysis</CardTitle>
                  </div>
                  <CardDescription>
                    Real-time prediction based on your campaign data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {getPredictionIcon(aiPrediction.successRate)}
                      <span className={`text-3xl font-bold ${getPredictionColor(aiPrediction.successRate)}`}>
                        {aiPrediction.successRate}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Predicted Success Rate</p>
                    <Progress value={aiPrediction.successRate} className="mt-2" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Confidence: {aiPrediction.confidence.toFixed(1)}%
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">AI Suggestions:</h4>
                    {aiPrediction.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Campaign Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Optimal Goal Range</span>
                    <Badge variant="secondary">$5K - $50K</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Best Duration</span>
                    <Badge variant="secondary">20-40 days</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Category Performance</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground">High</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};