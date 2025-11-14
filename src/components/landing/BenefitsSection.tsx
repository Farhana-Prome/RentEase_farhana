import { CheckCircle2 } from "lucide-react";

const landlordBenefits = [
  "Reduce management time by up to 70%",
  "Automated rent collection and tracking",
  "Real-time property performance insights",
  "Streamlined tenant communication",
  "Digital lease management",
];

const tenantBenefits = [
  "Pay rent online securely",
  "Submit maintenance requests instantly",
  "Access lease documents 24/7",
  "Communicate directly with landlord",
  "Track payment history easily",
];

export function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a landlord or tenant, RentEase makes life easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
              For Landlords
            </div>
            <ul className="space-y-4">
              {landlordBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6">
              For Tenants
            </div>
            <ul className="space-y-4">
              {tenantBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
