import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, DollarSign, AlertCircle } from "lucide-react";
import { properties, tenants, payments } from "@/dummy/data";

export function SummaryCards() {
  const totalProperties = properties.length;
  const activeTenants = tenants.filter(t => t.status === "active").length;
  const rentCollected = payments.filter(p => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);
  const rentPending = payments.filter(p => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);
  const rentOverdue = payments.filter(p => p.status === "overdue").reduce((sum, p) => sum + p.amount, 0);

  const cards = [
    {
      title: "Total Properties",
      value: totalProperties,
      icon: Building2,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Active Tenants",
      value: activeTenants,
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Rent Collected",
      value: `$${rentCollected.toLocaleString()}`,
      icon: DollarSign,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Rent Pending",
      value: `$${rentPending.toLocaleString()}`,
      icon: DollarSign,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      title: "Overdue Amounts",
      value: `$${rentOverdue.toLocaleString()}`,
      icon: AlertCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
