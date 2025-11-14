import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upcomingRentDue } from "@/dummy/data";

export function UpcomingRentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Rent Due</CardTitle>
        <CardDescription>Next 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingRentDue.map((rent) => (
            <div key={rent.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <p className="font-semibold">{rent.tenantName}</p>
                <p className="text-sm text-muted-foreground">{rent.propertyName}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-semibold">${rent.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{rent.dueDate}</p>
                </div>
                <Badge variant={rent.daysUntilDue <= 3 ? "destructive" : "secondary"}>
                  {rent.daysUntilDue} days
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
