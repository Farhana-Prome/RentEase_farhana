import { Building2, Users, CreditCard, Lightbulb, BarChart3, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Building2,
    title: "Property Management",
    description: "Manage multiple properties with ease. Track occupancy, units, and rental income all in one dashboard.",
  },
  {
    icon: Users,
    title: "Tenant Portal",
    description: "Give tenants a dedicated portal to submit requests, pay rent, and communicate seamlessly.",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Automated rent collection and payment tracking. Never miss a payment with smart reminders.",
  },
  {
    icon: Lightbulb,
    title: "Utility Management",
    description: "Track and manage all utility bills across properties. Monitor usage and costs effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Gain insights with comprehensive analytics. Make data-driven decisions for your properties.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security with data encryption. Stay compliant with local rental regulations.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Manage Rentals
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to make rental management effortless
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
