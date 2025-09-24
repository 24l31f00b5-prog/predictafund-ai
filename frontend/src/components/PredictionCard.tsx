import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface PredictionCardProps {
  title: string;
  successProbability: number;
  currentFunding: number;
  goal: number;
  daysLeft: number;
  category: string;
  imageUrl?: string;
}

export const PredictionCard = ({
  title,
  successProbability,
  currentFunding,
  goal,
  daysLeft,
  category,
  imageUrl,
}: PredictionCardProps) => {
  const fundingPercentage = (currentFunding / goal) * 100;
  const getPredictionColor = (probability: number) => {
    if (probability >= 70) return "success";
    if (probability >= 40) return "warning";
    return "destructive";
  };

  const getPredictionIcon = (probability: number) => {
    if (probability >= 70) return <TrendingUp className="w-4 h-4" />;
    if (probability >= 40) return <AlertTriangle className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  return (
    <Card className="hover:shadow-card transition-all duration-300 border-border bg-card">
      {imageUrl && (
        <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Funding Progress</span>
            <span className="font-medium">${currentFunding.toLocaleString()} / ${goal.toLocaleString()}</span>
          </div>
          <Progress value={fundingPercentage} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{fundingPercentage.toFixed(1)}% funded</span>
            <span>{daysLeft} days left</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center space-x-2">
            {getPredictionIcon(successProbability)}
            <span className="text-sm font-medium">AI Prediction</span>
          </div>
          <Badge 
            variant={getPredictionColor(successProbability) as any}
            className="font-semibold"
          >
            {successProbability}% Success Rate
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};