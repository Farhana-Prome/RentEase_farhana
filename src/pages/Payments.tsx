import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PaymentsList } from "@/components/payments/PaymentsList";
import { PaymentFilters } from "@/components/payments/PaymentFilters";

const Payments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payment Tracking</h1>
          <p className="text-muted-foreground">Monitor rent payments and collections</p>
        </div>
        
        <PaymentFilters />
        <PaymentsList />
      </div>
    </DashboardLayout>
  );
};

export default Payments;
