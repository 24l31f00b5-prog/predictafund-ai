import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { PredictionCard } from "@/components/PredictionCard";
import { Brain, Target, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

export const Landing = () => {
  const mockCampaigns = [
    {
      title: "Smart Home Security System with AI Detection",
      successProbability: 85,
      currentFunding: 87500,
      goal: 100000,
      daysLeft: 15,
      category: "Technology",
    },
    {
      title: "Sustainable Urban Farming Kit",
      successProbability: 72,
      currentFunding: 32000,
      goal: 50000,
      daysLeft: 23,
      category: "Environment",
    },
    {
      title: "Educational VR Platform for Kids",
      successProbability: 45,
      currentFunding: 15000,
      goal: 75000,
      daysLeft: 8,
      category: "Education",
    },
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Success Prediction",
      description: "Our machine learning models analyze 50+ factors to predict your campaign's success probability",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Optimization",
      description: "Get real-time suggestions to improve your funding goal, timeline, and campaign content",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track your campaign's performance with detailed insights and predictive analytics",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Backer Intelligence",
      description: "Help backers discover high-potential campaigns with AI-powered recommendations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 pb-32 px-6 bg-gradient-hero relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Crowdfunding
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Fund Smarter with
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The first crowdfunding platform that predicts campaign success, optimizes your strategy, 
            and connects you with the right backers using advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" asChild>
              <Link to="/create">Start Your Campaign</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/discover">Discover Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages machine learning to give you unprecedented insights into campaign success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Campaigns */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Analyzed Campaigns</h2>
            <p className="text-xl text-muted-foreground">
              See how our AI predicts campaign success in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCampaigns.map((campaign, index) => (
              <PredictionCard key={index} {...campaign} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/discover">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust FundAI to optimize their crowdfunding success
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/create">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};