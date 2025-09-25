import { Navigation } from "@/components/Navigation";
import { PredictionCard } from "@/components/PredictionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, TrendingUp, Clock, Target } from "lucide-react";
import { useState } from "react";

export const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Art", "Games", "Design", "Film", "Music", "Publishing"];

  const mockCampaigns = [
    {
      title: "Revolutionary Solar Panel with AI Tracking",
      successProbability: 92,
      currentFunding: 145000,
      goal: 200000,
      daysLeft: 12,
      category: "Technology",
    },
    {
      title: "Interactive Children's Book Series",
      successProbability: 78,
      currentFunding: 28000,
      goal: 40000,
      daysLeft: 18,
      category: "Publishing",
    },
    {
      title: "Modular Workspace Furniture Collection",
      successProbability: 65,
      currentFunding: 52000,
      goal: 80000,
      daysLeft: 25,
      category: "Design",
    },
    {
      title: "Indie Game: Cyberpunk Adventure RPG",
      successProbability: 55,
      currentFunding: 35000,
      goal: 100000,
      daysLeft: 30,
      category: "Games",
    },
    {
      title: "Sustainable Fashion Brand Launch",
      successProbability: 43,
      currentFunding: 18000,
      goal: 60000,
      daysLeft: 14,
      category: "Design",
    },
    {
      title: "AI-Powered Music Composition Tool",
      successProbability: 88,
      currentFunding: 95000,
      goal: 120000,
      daysLeft: 8,
      category: "Technology",
    },
  ];

  const filteredCampaigns = mockCampaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: "Active Campaigns", value: "2,847", icon: <Target className="w-5 h-5" /> },
    { label: "Success Rate", value: "73%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Avg. Prediction Accuracy", value: "91%", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Discover AI-Analyzed Campaigns</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore campaigns with real-time AI success predictions and smart insights
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Campaign Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign, index) => (
              <PredictionCard key={index} {...campaign} />
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No campaigns found matching your criteria.</p>
            </div>
          )}

          {/* Load More */}
          {filteredCampaigns.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Campaigns
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};