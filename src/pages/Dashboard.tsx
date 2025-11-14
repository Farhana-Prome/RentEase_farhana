import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { RentTrendsChart } from "@/components/dashboard/RentTrendsChart";
import { PaymentStatusChart } from "@/components/dashboard/PaymentStatusChart";
import { UpcomingRentList } from "@/components/dashboard/UpcomingRentList";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your rental properties</p>
        </div>
        
        <SummaryCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RentTrendsChart />
          <PaymentStatusChart />
        </div>
        
        <UpcomingRentList />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
