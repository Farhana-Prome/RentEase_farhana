import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", rate: 88 },
  { month: "Feb", rate: 89 },
  { month: "Mar", rate: 90 },
  { month: "Apr", rate: 91 },
  { month: "May", rate: 90 },
  { month: "Jun", rate: 92 },
];

export function OccupancyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Occupancy Rate</CardTitle>
        <CardDescription>Property occupancy trend</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-muted-foreground" />
            <YAxis className="text-muted-foreground" domain={[80, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="rate" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--accent))", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
