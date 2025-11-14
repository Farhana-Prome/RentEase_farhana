import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

export function AnalyticsOverview() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$132,400",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Occupancy Rate",
      value: "91.7%",
      change: "+2.3%",
      trend: "up",
      icon: Percent,
    },
    {
      title: "Collection Rate",
      value: "94.2%",
      change: "-1.2%",
      trend: "down",
      icon: Percent,
    },
    {
      title: "Average Rent",
      value: "$2,450",
      change: "+5.1%",
      trend: "up",
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${metric.trend === 'up' ? 'bg-success/10' : 'bg-destructive/10'} flex items-center justify-center`}>
                <metric.icon className={`h-5 w-5 ${metric.trend === 'up' ? 'text-success' : 'text-destructive'}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${metric.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {metric.change}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{metric.title}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
