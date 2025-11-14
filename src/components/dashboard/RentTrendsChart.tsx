import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { rentTrends } from "@/dummy/data";

export function RentTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rent Collection Trends</CardTitle>
        <CardDescription>Last 6 months comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={rentTrends}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-muted-foreground" />
            <YAxis className="text-muted-foreground" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="collected" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Collected"
            />
            <Line 
              type="monotone" 
              dataKey="expected" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Expected"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
